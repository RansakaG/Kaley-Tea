import { useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  company_name: string;
  contact_person: string;
  email: string;
  products_interested: string;
  quantity_estimate: string;
  message: string;
}

export default function BulkOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    company_name: '',
    contact_person: '',
    email: '',
    products_interested: '',
    quantity_estimate: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('bulk_inquiries').insert([
        {
          company_name: formData.company_name,
          contact_person: formData.contact_person,
          email: formData.email,
          products_interested: formData.products_interested,
          quantity_estimate: formData.quantity_estimate,
          message: formData.message || null,
        },
      ]);

      if (insertError) {
        setError('Unable to submit inquiry. Please try again.');
        console.error(insertError);
      } else {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            company_name: '',
            contact_person: '',
            email: '',
            products_interested: '',
            quantity_estimate: '',
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
          Inquiry Received
        </h3>
        <p className="text-[#5a6b62] font-light leading-relaxed max-w-md mx-auto">
          Thank you for your interest in bulk orders. Our team will contact you soon to discuss your needs.
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
          <label htmlFor="company_name" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="contact_person" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Contact Person
          </label>
          <input
            type="text"
            id="contact_person"
            name="contact_person"
            value={formData.contact_person}
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

        <div>
          <label htmlFor="products_interested" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Products Interested In
          </label>
          <input
            type="text"
            id="products_interested"
            name="products_interested"
            value={formData.products_interested}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            placeholder="e.g., Moonlight Black, Dawn Green"
          />
        </div>

        <div>
          <label htmlFor="quantity_estimate" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Estimated Quantity
          </label>
          <input
            type="text"
            id="quantity_estimate"
            name="quantity_estimate"
            value={formData.quantity_estimate}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light"
            placeholder="e.g., 100+ boxes"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-light tracking-wide text-[#1a4d2e] mb-3">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-b-2 border-[#1a4d2e]/20 py-3 text-[#1e2a24] placeholder-[#5a6b62]/40 focus:outline-none focus:border-b-2 focus:border-[#1a4d2e] transition-all duration-300 font-light resize-none"
            placeholder="Tell us more about your business and needs..."
          />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-12 py-4 bg-[#1a4d2e] text-white font-light tracking-widest text-sm rounded-full hover:bg-[#0d2d1b] transition-all duration-500 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Send Inquiry'}
          </button>
        </div>
      </div>
    </form>
  );
}
