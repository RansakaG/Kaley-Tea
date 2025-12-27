import { useState } from 'react';
import { Check, Store, Utensils, Building2, Sparkles, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import LeafButton from './ui/LeafButton';

interface FormData {
  business_type: string;
  business_name: string;
  email: string;
  phone: string;
  products: string[];
  quantity_range: string;
}

const businessTypes = [
  { id: 'cafe', label: 'Café / Restaurant', icon: Utensils },
  { id: 'retail', label: 'Retail Store', icon: Store },
  { id: 'hotel', label: 'Hotel / Resort', icon: Building2 },
  { id: 'wellness', label: 'Spa / Wellness', icon: Sparkles },
];

const productOptions = [
  { id: 'moonlight-black', label: 'Moonlight Black' },
  { id: 'dawn-green', label: 'Dawn Green' },
  { id: 'sunset-oolong', label: 'Sunset Oolong' },
  { id: 'herbal-blend', label: 'Herbal Blends' },
  { id: 'gift-sets', label: 'Gift Sets' },
];

const quantityRanges = [
  { value: '50-100', label: '50 - 100 units' },
  { value: '100-500', label: '100 - 500 units' },
  { value: '500-1000', label: '500 - 1,000 units' },
  { value: '1000+', label: '1,000+ units' },
];

export default function BulkOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    business_type: '',
    business_name: '',
    email: '',
    phone: '',
    products: [],
    quantity_range: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleBusinessTypeSelect = (typeId: string) => {
    setFormData(prev => ({ ...prev, business_type: typeId }));
  };

  const handleProductToggle = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter(p => p !== productId)
        : [...prev.products, productId],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    if (step === 1 && !formData.business_type) {
      setError('Please select your business type');
      return;
    }
    if (step === 2 && formData.products.length === 0) {
      setError('Please select at least one product');
      return;
    }
    setError('');
    setStep(prev => prev + 1);
  };

  const goToPreviousStep = () => {
    setError('');
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.business_name || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('bulk_inquiries').insert([
        {
          company_name: formData.business_name,
          contact_person: formData.business_name,
          email: formData.email,
          products_interested: formData.products.join(', '),
          quantity_estimate: formData.quantity_range,
          message: `Business Type: ${formData.business_type}\nPhone: ${formData.phone || 'Not provided'}`,
        },
      ]);

      if (insertError) {
        setError('Unable to submit inquiry. Please try again.');
        console.error(insertError);
      } else {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            business_type: '',
            business_name: '',
            email: '',
            phone: '',
            products: [],
            quantity_range: '',
          });
          setSubmitted(false);
          setStep(1);
        }, 4000);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-24">
        <div className="inline-block mb-6">
          <div className="w-20 h-20 bg-[#1a4d2e] rounded-full flex items-center justify-center animate-scale-in">
            <Check className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-3xl font-light text-[#1a4d2e] mb-4 tracking-wide">
          We'll Be in Touch Soon!
        </h3>
        <p className="text-[#5a6b62] font-light leading-relaxed max-w-md mx-auto">
          Thank you for your interest. Our partnership team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${s < step
                ? 'bg-[#1a4d2e] text-white'
                : s === step
                  ? 'bg-[#1a4d2e] text-white scale-110'
                  : 'bg-[#1a4d2e]/10 text-[#5a6b62]'
                }`}
            >
              {s < step ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-12 h-0.5 mx-2 transition-all duration-300 ${s < step ? 'bg-[#1a4d2e]' : 'bg-[#1a4d2e]/10'
                  }`}
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="mb-8 p-4 border border-red-300 bg-red-50/30 rounded-xl text-center">
          <p className="text-red-700 text-sm font-light">{error}</p>
        </div>
      )}

      {/* Step 1: Business Type */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-light text-[#1a4d2e] mb-3 text-center tracking-wide">
            What type of business are you?
          </h3>
          <p className="text-[#5a6b62] font-light text-center mb-10 text-sm">
            Select the option that best describes your business
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {businessTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = formData.business_type === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleBusinessTypeSelect(type.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 group hover:shadow-lg ${isSelected
                    ? 'border-[#1a4d2e] bg-[#1a4d2e]/5 shadow-md'
                    : 'border-[#1a4d2e]/20 hover:border-[#1a4d2e]/40 bg-white'
                    }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${isSelected
                        ? 'bg-[#1a4d2e] text-white'
                        : 'bg-[#1a4d2e]/10 text-[#1a4d2e] group-hover:bg-[#1a4d2e]/20'
                        }`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span
                      className={`font-light text-sm tracking-wide text-center ${isSelected ? 'text-[#1a4d2e]' : 'text-[#5a6b62]'
                        }`}
                    >
                      {type.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <LeafButton onClick={goToNextStep} variant="dark">
              Continue
            </LeafButton>
          </div>
        </div>
      )}

      {/* Step 2: Products */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-light text-[#1a4d2e] mb-3 text-center tracking-wide">
            Which products interest you?
          </h3>
          <p className="text-[#5a6b62] font-light text-center mb-10 text-sm">
            Select all that apply
          </p>

          <div className="space-y-3 mb-8">
            {productOptions.map((product) => {
              const isSelected = formData.products.includes(product.id);
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleProductToggle(product.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${isSelected
                    ? 'border-[#1a4d2e] bg-[#1a4d2e]/5'
                    : 'border-[#1a4d2e]/20 hover:border-[#1a4d2e]/40 bg-white'
                    }`}
                >
                  <span
                    className={`font-light tracking-wide ${isSelected ? 'text-[#1a4d2e]' : 'text-[#5a6b62]'
                      }`}
                  >
                    {product.label}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isSelected
                      ? 'border-[#1a4d2e] bg-[#1a4d2e]'
                      : 'border-[#5a6b62]/30'
                      }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quantity Range */}
          <div className="mb-10">
            <label className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
              Estimated Quantity
            </label>
            <div className="relative">
              <select
                name="quantity_range"
                value={formData.quantity_range}
                onChange={handleChange}
                className="w-full appearance-none bg-white border-2 border-[#1a4d2e]/20 rounded-xl px-4 py-4 text-[#1e2a24] font-light focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 cursor-pointer"
              >
                <option value="">Select quantity range</option>
                {quantityRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5a6b62] pointer-events-none" />
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <LeafButton onClick={goToPreviousStep} variant="dark">
              Back
            </LeafButton>
            <LeafButton onClick={goToNextStep} variant="dark">
              Continue
            </LeafButton>
          </div>
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <h3 className="text-2xl font-light text-[#1a4d2e] mb-3 text-center tracking-wide">
            How can we reach you?
          </h3>
          <p className="text-[#5a6b62] font-light text-center mb-10 text-sm">
            We'll contact you within 24 hours
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <label
                htmlFor="business_name"
                className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3"
              >
                Business Name *
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                required
                className="w-full bg-white border-2 border-[#1a4d2e]/20 rounded-xl px-4 py-4 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                placeholder="Your business name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border-2 border-[#1a4d2e]/20 rounded-xl px-4 py-4 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3"
              >
                Phone Number <span className="text-[#5a6b62]/60">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border-2 border-[#1a4d2e]/20 rounded-xl px-4 py-4 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-[#1a4d2e] transition-all duration-300 font-light"
                placeholder="+94 XX XXX XXXX"
              />
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <LeafButton onClick={goToPreviousStep} variant="dark">
              Back
            </LeafButton>
            <LeafButton type="submit" variant="dark" disabled={loading}>
              {loading ? 'Sending...' : 'Send Inquiry'}
            </LeafButton>
          </div>
        </form>
      )}
    </div>
  );
}
