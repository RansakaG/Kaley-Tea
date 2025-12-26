import { LocalContactIcon, GlobalIcon, LocationPinIcon, LeafAccentIcon, OrganicLine } from '../components/icons/KaleyIcons';
import Products from '../components/Products';
import BulkOrderForm from '../components/BulkOrderForm';
import Footer from '../components/ui/Footer';
import heroBackground from '../assets/images/22.jpg';

const tasteLocations = [
  { name: 'Forest View Café', area: 'Kandy' },
  { name: 'Heritage Tea House', area: 'Nuwara Eliya' },
  { name: 'Sunrise Wellness Retreat', area: 'Ella' },
  { name: 'Colombo Tea Lounge', area: 'Colombo' },
  { name: 'Mountain Peak Bistro', area: 'Dambulla' },
  { name: 'Garden Restaurant & Bar', area: 'Galle' },
];

export default function BuySipHeal() {
  return (
    <div className="bg-[#faf8f5] text-[#1e2a24]">
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: 'center 70%',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl animate-fade-in">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide leading-relaxed mb-6">
            <span className="text-[#d4b896]">Buy</span>, <span className="text-[#d4b896]">Sip</span> & <span className="text-[#d4b896]">Heal</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 leading-loose max-w-2xl mx-auto">
            Bring the forest home to you
          </p>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <Products />
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-6 py-8">
        <OrganicLine className="w-24 text-[#c9a66b]/40" />
        <LeafAccentIcon className="w-10 h-10 text-[#c9a66b]/30 transform rotate-45" strokeWidth={0.8} />
        <OrganicLine className="w-24 text-[#c9a66b]/40" />
      </div>

      <section className="py-32 md:py-40 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light text-[#1a4d2e] mb-20 text-center tracking-wide">
            How to Buy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <LocalContactIcon className="w-16 h-16 text-[#1a4d2e]" strokeWidth={0.8} />
              </div>
              <h3 className="text-3xl font-light text-[#1a4d2e] mb-8 tracking-wide">
                Sri Lanka
              </h3>
              <div className="space-y-6">
                <a
                  href="https://wa.me/94123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-light text-[#1a4d2e] hover:text-[#c9a66b] transition-colors duration-500 tracking-wider text-sm"
                >
                  Message us on WhatsApp →
                </a>
                <div className="text-[#5a6b62] font-light text-sm space-y-2">
                  <p>Colombo Central Store</p>
                  <p>Kandy Heritage Shop</p>
                  <p>Ella Forest Market</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <GlobalIcon className="w-16 h-16 text-[#1a4d2e]" strokeWidth={0.8} />
              </div>
              <h3 className="text-3xl font-light text-[#1a4d2e] mb-8 tracking-wide">
                International
              </h3>
              <div className="space-y-6">
                <a
                  href="#"
                  className="block font-light text-[#1a4d2e] hover:text-[#c9a66b] transition-colors duration-500 tracking-wider text-sm"
                >
                  Global Tea Partners →
                </a>
                <div className="text-[#5a6b62] font-light text-sm space-y-2">
                  <p>Available in 15+ countries</p>
                  <p>Specialty tea retailers</p>
                  <p>Wellness boutiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-[#1a4d2e] mb-6 tracking-wide">
              Buying for Business?
            </h2>
            <p className="text-[#5a6b62] font-light text-lg leading-relaxed">
              Partner with us for bulk orders, wholesale pricing, and dedicated support
            </p>
          </div>

          <BulkOrderForm />
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-6 py-8">
        <OrganicLine className="w-24 text-[#c9a66b]/40" />
        <LeafAccentIcon className="w-10 h-10 text-[#c9a66b]/30 transform -rotate-45" strokeWidth={0.8} />
        <OrganicLine className="w-24 text-[#c9a66b]/40" />
      </div>

      <section className="py-32 md:py-40 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light text-[#1a4d2e] mb-20 text-center tracking-wide">
            Where to Taste Kaley
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {tasteLocations.map((location, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <LocationPinIcon className="w-10 h-10 text-[#1a4d2e] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-light text-[#1a4d2e] mb-2 tracking-wide">
                  {location.name}
                </h3>
                <p className="text-[#5a6b62] font-light text-sm">{location.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
