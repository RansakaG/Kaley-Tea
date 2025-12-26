import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { RestoreNatureIcon, CommunityIcon, HarvestIcon, ProductDevIcon, ProgrammeIcon, SupportIcon, LeafAccentIcon, OrganicLine } from '../components/icons/KaleyIcons';
import Footer from '../components/ui/Footer';

export default function ConnectHeal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState('');

    return (
        <div className="bg-[#faf8f5] text-[#1e2a24]">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-[#1a4d2e] mb-8 leading-relaxed">
                        Connect & Heal
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#5a6b62] leading-loose max-w-2xl mx-auto">
                        We are always overjoyed when someone wants to connect and heal together.
                    </p>
                </div>
            </section>
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-6 py-4">
                <OrganicLine className="w-24 text-[#c9a66b]/40" />
                <LeafAccentIcon className="w-8 h-8 text-[#c9a66b]/30 transform rotate-45" strokeWidth={0.8} />
                <OrganicLine className="w-24 text-[#c9a66b]/40" />
            </div>

            {/* Opportunity Cards */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <OpportunityCard
                            icon={<RestoreNatureIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Restore Nature"
                            description="Help restore Sri Lanka's rainforest ecosystems. Work alongside ecologists to reforest degraded land and protect biodiversity."
                            audience="For researchers, students, conservationists & volunteers"
                            onClick={() => {
                                setSelectedInterest('Restore Nature');
                                setIsModalOpen(true);
                            }}
                        />

                        <OpportunityCard
                            icon={<CommunityIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Uplift Communities"
                            description="Support social initiatives and work alongside our local rural community to create lasting positive change."
                            audience="For researchers, students, community activists & volunteers"
                            onClick={() => {
                                setSelectedInterest('Uplift Communities');
                                setIsModalOpen(true);
                            }}
                        />

                        <OpportunityCard
                            icon={<HarvestIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Grow Crops"
                            description="Enhance our agricultural practices through organic farming, soil regeneration, and agro-forestry techniques."
                            audience="For agriculture, organic & regenerative farming experts"
                            onClick={() => {
                                setSelectedInterest('Grow Crops');
                                setIsModalOpen(true);
                            }}
                        />

                        <OpportunityCard
                            icon={<ProductDevIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Develop Products"
                            description="Collaborate on value-added manufacturing, product development, and international marketing initiatives."
                            audience="For manufacturing, marketing & product development experts"
                            onClick={() => {
                                setSelectedInterest('Develop Products');
                                setIsModalOpen(true);
                            }}
                        />

                        <OpportunityCard
                            icon={<ProgrammeIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Join Programmes"
                            description="Participate in immersive residential programmes. Join as a participant, lead as co-faculty, or observe and learn."
                            audience="For participants, facilitators & lifelong learners"
                            onClick={() => {
                                setSelectedInterest('Join Programmes');
                                setIsModalOpen(true);
                            }}
                        />

                        <OpportunityCard
                            icon={<SupportIcon className="w-10 h-10" strokeWidth={1} />}
                            title="Support Us"
                            description="Support our healing mission financially. Your contribution helps us restore forests and uplift communities."
                            audience="For donors, sponsors & supporters"
                            onClick={() => {
                                setSelectedInterest('Support Us');
                                setIsModalOpen(true);
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {isModalOpen && (
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    selectedInterest={selectedInterest}
                />
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
}

interface OpportunityCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    audience?: string;
    onClick: () => void;
}

function OpportunityCard({ icon, title, description, audience, onClick }: OpportunityCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-white p-10 rounded-lg group hover:shadow-lg transition-all duration-700 cursor-pointer border border-transparent hover:border-[#1a4d2e]/10"
        >
            <div className="text-[#1a4d2e] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-700">
                {icon}
            </div>

            <h3 className="text-xl font-light mb-3 tracking-wide text-[#1a4d2e] text-center">
                {title}
            </h3>

            <p className="text-sm font-light text-[#5a6b62] mb-4 text-center leading-relaxed">
                {description}
            </p>

            {audience && (
                <p className="text-xs font-light text-[#c9a66b] mb-6 text-center tracking-wide italic">
                    {audience}
                </p>
            )}

            <div className="text-[#c9a66b] text-sm tracking-wider flex items-center justify-center gap-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Learn more <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
}

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedInterest: string;
}

function ApplicationModal({ isOpen, onClose, selectedInterest }: ApplicationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        areaOfInterest: selectedInterest,
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-8 md:p-12 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-[#5a6b62] hover:text-[#1a4d2e] transition-colors duration-500"
                >
                    <X className="w-6 h-6" strokeWidth={1} />
                </button>

                {/* Title */}
                <h2 className="text-3xl font-light tracking-wide text-[#1a4d2e] mb-8">
                    Connect with Us
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-light tracking-wide text-[#5a6b62] mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:outline-none focus:border-[#1a4d2e] transition-colors duration-500 font-light"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-light tracking-wide text-[#5a6b62] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:outline-none focus:border-[#1a4d2e] transition-colors duration-500 font-light"
                        />
                    </div>

                    {/* Area of Interest */}
                    <div>
                        <label className="block text-sm font-light tracking-wide text-[#5a6b62] mb-2">
                            Area of Interest
                        </label>
                        <select
                            required
                            value={formData.areaOfInterest}
                            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                            className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:outline-none focus:border-[#1a4d2e] transition-colors duration-500 font-light bg-white"
                        >
                            <option value="Restore Nature">Restore Nature</option>
                            <option value="Uplift Communities">Uplift Communities</option>
                            <option value="Grow Crops">Grow Crops</option>
                            <option value="Develop Products">Develop Products</option>
                            <option value="Join Programmes">Join Programmes</option>
                            <option value="Support Us">Support Us</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-light tracking-wide text-[#5a6b62] mb-2">
                            Message
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 border border-[#1a4d2e]/20 rounded-lg focus:outline-none focus:border-[#1a4d2e] transition-colors duration-500 font-light resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#1a4d2e] text-white font-light tracking-widest text-sm rounded-lg hover:bg-[#2d6b45] transition-all duration-500"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}
