import { useState } from 'react';
import { Check } from 'lucide-react';
import { TourIcon, StayIcon, TravelAgentIcon, OrganicLine } from '../icons/KaleyIcons';
import LeafButton from '../ui/LeafButton';
import { supabase } from '../../lib/supabaseClient';

type BookingType = 'day_visit' | 'stay_over' | 'travel_agent';
type StayDuration = '1_night' | '2_nights' | '3_plus_nights';

interface FormData {
    booking_type: BookingType;
    stay_duration: StayDuration;
    name: string;
    email: string;
    phone: string;
    country: string;
    preferred_date: string;
    guests: string;
    message: string;
}

const COUNTRIES = [
    'Sri Lanka', 'United States', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Canada', 'Japan', 'China', 'India', 'Netherlands', 'Italy',
    'Switzerland', 'Singapore', 'Other'
];

export default function BookingWizard() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        booking_type: 'day_visit',
        stay_duration: '2_nights',
        name: '',
        email: '',
        phone: '',
        country: '',
        preferred_date: '',
        guests: '2',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selectExperience = (type: BookingType) => {
        setFormData(prev => ({ ...prev, booking_type: type }));
    };

    const selectDuration = (duration: StayDuration) => {
        setFormData(prev => ({ ...prev, stay_duration: duration }));
    };

    const nextStep = () => {
        if (step === 1 && !formData.booking_type) return;

        // Skip duration step for Day Visit and Travel Agent
        if (step === 1 && formData.booking_type !== 'stay_over') {
            setStep(2); // Go directly to details (step 2 for non-stay)
            return;
        }

        if (step === 2 && formData.booking_type === 'stay_over') {
            // For stay over, step 2 is duration, step 3 is details
            setStep(3);
            return;
        }

        if (step === 2 && (!formData.name || !formData.email)) return;
        if (step === 3 && formData.booking_type === 'stay_over' && (!formData.name || !formData.email)) return;

        setStep(prev => Math.min(prev + 1, formData.booking_type === 'stay_over' ? 4 : 3));
    };

    const prevStep = () => {
        if (step === 2 && formData.booking_type !== 'stay_over') {
            setStep(1);
            return;
        }
        setStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async () => {
        if (!formData.preferred_date || !formData.country) return;

        setLoading(true);
        setError('');

        try {
            const { error: insertError } = await supabase.from('bookings').insert([
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || null,
                    country: formData.country,
                    preferred_date: formData.preferred_date,
                    guests: parseInt(formData.guests),
                    booking_type: formData.booking_type,
                    stay_duration: formData.booking_type === 'stay_over' ? formData.stay_duration : null,
                    message: formData.message || null,
                },
            ]);

            if (insertError) {
                setError('Unable to submit booking. Please try again.');
                console.error(insertError);
            } else {
                setSubmitted(true);
            }
        } catch (err) {
            setError('An unexpected error occurred.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Determine actual step number for display
    const getDisplayStep = () => {
        if (formData.booking_type === 'stay_over') {
            return step;
        }
        // For non-stay options, we skip step 2 (duration) so adjust display
        return step === 1 ? 1 : step === 2 ? 2 : 3;
    };

    // Success state
    if (submitted) {
        return (
            <div className="text-center py-16 animate-fade-in">
                <div className="inline-block mb-6">
                    <div className="w-20 h-20 bg-[#1a4d2e] rounded-full flex items-center justify-center">
                        <Check className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                </div>
                <h3 className="text-3xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                    We've Received Your Request
                </h3>
                <p className="text-[#5a6b62] font-light leading-relaxed max-w-md mx-auto mb-2">
                    Thank you for choosing to experience Kaley.
                </p>
                <p className="text-[#5a6b62] font-light text-sm">
                    We'll reach out within 24 hours to confirm your visit.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Step Indicator */}
            <StepIndicator
                currentStep={getDisplayStep()}
                isStayOver={formData.booking_type === 'stay_over'}
            />

            {error && (
                <div className="mb-8 p-4 border border-red-300 bg-red-50/30 rounded-lg">
                    <p className="text-red-700 text-sm font-light">{error}</p>
                </div>
            )}

            {/* Step 1: Choose Experience */}
            {step === 1 && (
                <div className="animate-fade-in">
                    <h3 className="text-2xl font-light text-[#1a4d2e] text-center mb-2">
                        How would you like to experience Kaley?
                    </h3>
                    <p className="text-[#5a6b62] text-center font-light mb-10">
                        Select the experience that speaks to you
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ExperienceCard
                            icon={<TourIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Day Visit"
                            description="Tour & return same day"
                            selected={formData.booking_type === 'day_visit'}
                            onClick={() => selectExperience('day_visit')}
                        />
                        <ExperienceCard
                            icon={<StayIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Stay Over"
                            description="Experience the full retreat"
                            selected={formData.booking_type === 'stay_over'}
                            onClick={() => selectExperience('stay_over')}
                            badge="Recommended"
                        />
                        <ExperienceCard
                            icon={<TravelAgentIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Travel Agent"
                            description="Booking for your guests"
                            selected={formData.booking_type === 'travel_agent'}
                            onClick={() => selectExperience('travel_agent')}
                        />
                    </div>

                    <div className="mt-10 flex justify-center">
                        <LeafButton onClick={nextStep} variant="dark">
                            Continue
                        </LeafButton>
                    </div>
                </div>
            )}

            {/* Step 2: Duration (only for Stay Over) */}
            {step === 2 && formData.booking_type === 'stay_over' && (
                <div className="animate-fade-in">
                    <h3 className="text-2xl font-light text-[#1a4d2e] text-center mb-2">
                        How long would you like to stay?
                    </h3>
                    <p className="text-[#5a6b62] text-center font-light mb-10">
                        We recommend 2+ nights for the full healing experience
                    </p>

                    <div className="space-y-3 max-w-md mx-auto">
                        <DurationOption
                            value="1_night"
                            label="1 Night"
                            sublabel="Quick escape"
                            selected={formData.stay_duration === '1_night'}
                            onClick={() => selectDuration('1_night')}
                        />
                        <DurationOption
                            value="2_nights"
                            label="2 Nights"
                            sublabel="Recommended for full experience"
                            selected={formData.stay_duration === '2_nights'}
                            onClick={() => selectDuration('2_nights')}
                            recommended
                        />
                        <DurationOption
                            value="3_plus_nights"
                            label="3+ Nights"
                            sublabel="Deep healing immersion"
                            selected={formData.stay_duration === '3_plus_nights'}
                            onClick={() => selectDuration('3_plus_nights')}
                        />
                    </div>

                    <div className="mt-10 flex justify-between items-center">
                        <LeafButton onClick={prevStep} variant="ghost">
                            Back
                        </LeafButton>
                        <LeafButton onClick={nextStep} variant="dark">
                            Continue
                        </LeafButton>
                    </div>
                </div>
            )}

            {/* Step 2/3: Your Details */}
            {((step === 2 && formData.booking_type !== 'stay_over') ||
                (step === 3 && formData.booking_type === 'stay_over')) && (
                    <div className="animate-fade-in">
                        <h3 className="text-2xl font-light text-[#1a4d2e] text-center mb-2">
                            Tell us about yourself
                        </h3>
                        <p className="text-[#5a6b62] text-center font-light mb-10">
                            So we can personalize your experience
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                    Phone <span className="text-[#5a6b62]/60">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        <div className="mt-10 flex justify-between items-center">
                            <LeafButton onClick={prevStep} variant="ghost">
                                Back
                            </LeafButton>
                            <LeafButton
                                onClick={nextStep}
                                disabled={!formData.name || !formData.email}
                                variant="dark"
                            >
                                Continue
                            </LeafButton>
                        </div>
                    </div>
                )}

            {/* Step 3/4: Visit Details */}
            {((step === 3 && formData.booking_type !== 'stay_over') ||
                (step === 4 && formData.booking_type === 'stay_over')) && (
                    <div className="animate-fade-in">
                        <h3 className="text-2xl font-light text-[#1a4d2e] text-center mb-2">
                            Plan your visit
                        </h3>
                        <p className="text-[#5a6b62] text-center font-light mb-10">
                            When would you like to experience Kaley?
                        </p>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                        Arrival Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="preferred_date"
                                        value={formData.preferred_date}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                        Number of Guests
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                                        ))}
                                        <option value="10+">10+ guests</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                    Country *
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                                >
                                    <option value="">Select your country</option>
                                    {COUNTRIES.map(country => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-2">
                                    Special Requests <span className="text-[#5a6b62]/60">(optional)</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full bg-white border border-[#1a4d2e]/20 rounded-lg px-4 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light resize-none"
                                    placeholder="Dietary preferences, accessibility needs, or any requests..."
                                />
                            </div>
                        </div>

                        <div className="mt-10 flex justify-between items-center">
                            <LeafButton onClick={prevStep} variant="ghost">
                                Back
                            </LeafButton>
                            <LeafButton
                                onClick={handleSubmit}
                                disabled={loading || !formData.preferred_date || !formData.country}
                                variant="dark"
                            >
                                {loading ? 'Submitting...' : 'Complete Booking'}
                            </LeafButton>
                        </div>
                    </div>
                )}
        </div>
    );
}

// Step Indicator Component
interface StepIndicatorProps {
    currentStep: number;
    isStayOver: boolean;
}

function StepIndicator({ currentStep, isStayOver }: StepIndicatorProps) {
    const steps = isStayOver
        ? [
            { num: 1, label: 'Experience' },
            { num: 2, label: 'Duration' },
            { num: 3, label: 'About You' },
            { num: 4, label: 'Details' },
        ]
        : [
            { num: 1, label: 'Experience' },
            { num: 2, label: 'About You' },
            { num: 3, label: 'Details' },
        ];

    return (
        <div className="mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-4">
                {steps.map((s, index) => (
                    <div key={s.num} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-light transition-all duration-500
                  ${currentStep > s.num
                                        ? 'bg-[#1a4d2e] text-white'
                                        : currentStep === s.num
                                            ? 'bg-[#1a4d2e] text-white ring-4 ring-[#1a4d2e]/20'
                                            : 'bg-white border-2 border-[#1a4d2e]/20 text-[#5a6b62]'
                                    }`}
                            >
                                {currentStep > s.num ? <Check className="w-4 h-4" /> : s.num}
                            </div>
                            <span className={`mt-2 text-xs font-light tracking-wide hidden md:block
                ${currentStep >= s.num ? 'text-[#1a4d2e]' : 'text-[#5a6b62]/60'}`}>
                                {s.label}
                            </span>
                        </div>

                        {index < steps.length - 1 && (
                            <div className="w-8 md:w-16 h-px mx-2 md:mx-3">
                                <OrganicLine
                                    className={`w-full transition-all duration-500 ${currentStep > s.num ? 'text-[#1a4d2e]' : 'text-[#1a4d2e]/20'
                                        }`}
                                    strokeWidth={currentStep > s.num ? 1 : 0.5}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Duration Option Component
interface DurationOptionProps {
    value: string;
    label: string;
    sublabel: string;
    selected: boolean;
    onClick: () => void;
    recommended?: boolean;
}

function DurationOption({ label, sublabel, selected, onClick, recommended }: DurationOptionProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between
        ${selected
                    ? 'bg-white border-2 border-[#c9a66b] shadow-md'
                    : 'bg-white/60 border-2 border-transparent hover:border-[#c9a66b]/40'
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
          ${selected ? 'border-[#c9a66b] bg-[#c9a66b]' : 'border-[#1a4d2e]/30'}`}>
                    {selected && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                    <p className={`font-light ${selected ? 'text-[#1a4d2e]' : 'text-[#1a4d2e]/80'}`}>
                        {label}
                    </p>
                    <p className="text-xs text-[#5a6b62] font-light">{sublabel}</p>
                </div>
            </div>
            {recommended && (
                <span className="text-xs bg-[#c9a66b]/20 text-[#8a6d3b] px-3 py-1 rounded-full font-light">
                    Recommended
                </span>
            )}
        </button>
    );
}

// Experience Card Component
interface ExperienceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
    badge?: string;
}

function ExperienceCard({ icon, title, description, selected, onClick, badge }: ExperienceCardProps) {
    return (
        <button
            onClick={onClick}
            className={`p-6 rounded-2xl text-center transition-all duration-500 cursor-pointer group relative
        ${selected
                    ? 'bg-white border-2 border-[#c9a66b] shadow-lg'
                    : 'bg-white/60 border-2 border-transparent hover:border-[#c9a66b]/40 hover:shadow-md'
                }`}
        >
            {badge && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-[#c9a66b] text-white px-3 py-1 rounded-full font-light">
                    {badge}
                </span>
            )}
            <div className={`mb-4 flex justify-center transition-all duration-500
        ${selected ? 'text-[#1a4d2e] scale-110' : 'text-[#1a4d2e]/70 group-hover:text-[#1a4d2e]'}`}>
                {icon}
            </div>
            <h4 className={`text-lg font-light mb-2 transition-colors duration-300
        ${selected ? 'text-[#1a4d2e]' : 'text-[#1a4d2e]/80'}`}>
                {title}
            </h4>
            <p className="text-sm text-[#5a6b62] font-light">
                {description}
            </p>
            {selected && (
                <div className="mt-4">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-[#c9a66b] rounded-full">
                        <Check className="w-4 h-4 text-white" />
                    </div>
                </div>
            )}
        </button>
    );
}
