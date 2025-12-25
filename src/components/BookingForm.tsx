import { useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

type BookingType = 'day_tour' | 'farmhouse_stay' | 'travel_agent';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  preferred_date: string;
  guests: string;
  booking_type: BookingType;
  message: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    preferred_date: '',
    guests: '1',
    booking_type: 'day_tour',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: BookingType) => {
    setFormData(prev => ({
      ...prev,
      booking_type: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          preferred_date: formData.preferred_date,
          guests: parseInt(formData.guests),
          booking_type: formData.booking_type,
          message: formData.message || null,
        },
      ]);

      if (insertError) {
        setError('Unable to submit booking. Please try again.');
        console.error(insertError);
      } else {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            country: '',
            preferred_date: '',
            guests: '1',
            booking_type: 'day_tour',
            message: '',
          });
          setSubmitted(false);
        }, 3000);
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
          <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center animate-scale-in">
            <Check className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-3xl font-light text-[#1a4d2e] mb-4 tracking-wide">
          Booking Received
        </h3>
        <p className="text-[#5a6b62] font-light leading-relaxed max-w-md mx-auto">
          Thank you for your interest in experiencing Kaley. We'll be in touch soon to confirm your
          visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {error && (
        <div className="mb-8 p-4 border border-red-300 bg-red-50/30 rounded-lg">
          <p className="text-red-700 text-sm font-light">{error}</p>
        </div>
      )}

      <div className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="phone" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
              placeholder="Your country"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="preferred_date" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferred_date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
              placeholder="1"
            />
          </div>
        </div>

        <div>
          <fieldset>
            <legend className="text-sm font-light tracking-wide text-[#1a4d2e] mb-4 block">
              Experience Type
            </legend>
            <div className="space-y-4">
              {[
                { value: 'day_tour', label: 'Day Tour' },
                { value: 'farmhouse_stay', label: 'Farmhouse Stay' },
                { value: 'travel_agent', label: 'Travel Agent Inquiry' },
              ].map(option => (
                <label key={option.value} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="booking_type"
                    value={option.value}
                    checked={formData.booking_type === option.value}
                    onChange={() => handleRadioChange(option.value as BookingType)}
                    className="w-4 h-4 accent-[#1a4d2e]"
                  />
                  <span className="ml-3 font-light text-[#1e2a24] group-hover:text-[#1a4d2e] transition-colors duration-300">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Special Requests
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light resize-none"
            placeholder="Tell us about any special requests or dietary preferences..."
          />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-12 py-4 bg-[#1a4d2e] text-white font-light tracking-widest text-sm rounded-full hover:bg-[#0d2d1b] transition-all duration-500 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Plan Your Visit'}
          </button>
        </div>
      </div>
    </form>
  );
}
