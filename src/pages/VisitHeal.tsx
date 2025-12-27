import { TourIcon, StayIcon, NearbyIcon, LeafAccentIcon } from '../components/icons/KaleyIcons';
import BookingWizard from '../components/forms/BookingWizard';
import LeafButton from '../components/ui/LeafButton';
import Footer from '../components/ui/Footer';
import visitHealHero from '../assets/images/visit-heal-hero-new.jpg';

export default function VisitHeal() {
  return (
    <div className="bg-[#faf8f5] text-[#1e2a24]">
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${visitHealHero})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl animate-fade-in">
          {/* Hero text with white text on dark background */}
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide leading-relaxed mb-6">
            <span className="text-[#d4b896]">Visit</span> & <span className="text-[#d4b896]">Heal</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 leading-loose max-w-2xl mx-auto mb-8">
            Do Nothing. Just Feel.
          </p>

          {/* CTA Button - LeafButton component */}
          <LeafButton to="#booking-section" variant="light">Plan Your Visit</LeafButton>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a66b] text-sm tracking-[0.3em] uppercase mb-4">Our Retreats</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-[#1a4d2e]">
              Choose Your Healing Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <ExperienceCard
              icon={<TourIcon className="w-12 h-12" strokeWidth={1} />}
              title="Day Visit"
              items={[
                'Tea garden walk',
                'Watch artisans craft tea',
                'Make your own tea',
                'Forest trek',
                'Farm-to-table lunch',
              ]}
              cta="Book a day visit"
            />

            <ExperienceCard
              icon={<StayIcon className="w-12 h-12" strokeWidth={1} />}
              title="Stay Over"
              items={[
                '1-night escape or 2+ nights',
                'Full healing experience',
                'Farm-to-table meals',
                'Wellness rituals',
                'Forest immersion',
              ]}
              cta="Book your stay"
              recommended
            />

            <ExperienceCard
              icon={<NearbyIcon className="w-12 h-12" strokeWidth={1} />}
              title="Activities"
              items={[
                'Tea tasting sessions',
                'Cooking with herbs',
                'Meditation & yoga',
                'Nature photography',
                'Nearby temple visits',
              ]}
              cta="Explore activities"
            />
          </div>
        </div>
      </section>

      <section id="booking-section" className="py-24 md:py-32 bg-white/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a66b] text-sm tracking-[0.3em] uppercase mb-4">Plan Your Visit</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-[#1a4d2e] mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-[#5a6b62] font-light text-base leading-relaxed max-w-lg mx-auto">
              Three simple steps to plan your experience at Kaley
            </p>
          </div>

          <BookingWizard />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  cta: string;
  recommended?: boolean;
}

function ExperienceCard({ icon, title, items, cta, recommended }: ExperienceCardProps) {
  return (
    <div className="text-center group transition-all duration-700 relative">
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[#c9a66b] text-white px-4 py-1 rounded-full font-light z-10">
          Recommended
        </span>
      )}
      <div className={`text-[#1a4d2e] mb-8 flex justify-center group-hover:scale-110 transition-transform duration-700 ${recommended ? 'mt-4' : ''}`}>
        {icon}
      </div>

      <h3 className="text-2xl font-light mb-8 tracking-wide text-[#1a4d2e]">{title}</h3>

      <ul className="space-y-4 mb-10 text-[#5a6b62] font-light leading-relaxed">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-center gap-2 text-sm">
            <LeafAccentIcon className="w-3 h-3 text-[#c9a66b]/40 flex-shrink-0" strokeWidth={1} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="text-[#c9a66b] text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light">
        {cta} →
      </div>
    </div>
  );
}
