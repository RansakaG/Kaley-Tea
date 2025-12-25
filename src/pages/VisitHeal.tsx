import { Leaf, Home, MapPin } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import visitHealHero from '../assets/images/visit-heal-hero-new.jpg';

export default function VisitHeal() {
  return (
    <div className="bg-[#faf8f5] text-[#1e2a24]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${visitHealHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-relaxed tracking-wide">
            Visit & Heal
          </h1>
          <p className="text-2xl md:text-3xl font-light italic text-white/80 mb-16 tracking-wide">
            Do Nothing. Just Feel.
          </p>

          <button className="px-10 py-4 border-2 border-white/60 text-white font-light tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white/80 transition-all duration-500">
            Plan Your Visit
          </button>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <ExperienceCard
              icon={<Leaf className="w-12 h-12" strokeWidth={1} />}
              title="Tour with Us"
              items={[
                'Tea garden walk',
                'Watch artisans',
                'Make your tea',
                'Forest trek',
              ]}
              cta="Learn more"
            />

            <ExperienceCard
              icon={<Home className="w-12 h-12" strokeWidth={1} />}
              title="Live with Us"
              items={['Stay 2+ days for the full healing experience', 'Farm-to-table meals', 'Wellness rituals']}
              cta="Book your stay"
            />

            <ExperienceCard
              icon={<MapPin className="w-12 h-12" strokeWidth={1} />}
              title="Nearby Places"
              items={[
                "Kandy's sacred temples",
                'Ella Rock hiking trail',
                'Nine Arches Bridge',
                'Scenic train rides',
              ]}
              cta="Explore"
            />
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-white/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light tracking-wide text-[#1a4d2e] mb-6">
              Ready to Experience
              <br />
              Kaley?
            </h2>
            <p className="text-[#5a6b62] font-light text-lg leading-relaxed">
              Fill in your details below and we'll create the perfect experience for you.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-[#1a4d2e]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-xl font-light tracking-[0.3em] text-[#1a4d2e]">
              KALEY TEA
            </div>

            <div className="flex items-center gap-10 font-light text-sm tracking-wider text-[#5a6b62]">
              <a href="/" className="hover:text-[#1a4d2e] transition-colors duration-500">
                Home
              </a>
              <a href="/visit" className="hover:text-[#1a4d2e] transition-colors duration-500">
                Visit
              </a>
              <a href="#" className="hover:text-[#1a4d2e] transition-colors duration-500">
                Shop
              </a>
              <a href="#" className="hover:text-[#1a4d2e] transition-colors duration-500">
                Contact
              </a>
            </div>

            <div className="text-sm font-light text-[#5a6b62] tracking-wide">
              Sri Lanka · Organic · Healing
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  cta: string;
}

function ExperienceCard({ icon, title, items, cta }: ExperienceCardProps) {
  return (
    <div className="text-center group transition-all duration-700">
      <div className="text-[#1a4d2e] mb-8 flex justify-center group-hover:scale-110 transition-transform duration-700">
        {icon}
      </div>

      <h3 className="text-2xl font-light mb-8 tracking-wide text-[#1a4d2e]">{title}</h3>

      <ul className="space-y-3 mb-8 text-[#5a6b62] font-light leading-relaxed">
        {items.map((item, index) => (
          <li key={index} className="text-sm">
            • {item}
          </li>
        ))}
      </ul>

      <div className="text-[#c9a66b] text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light">
        {cta} →
      </div>
    </div>
  );
}
