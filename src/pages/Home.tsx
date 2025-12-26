import { Leaf, Coffee, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeafAccentIcon, OrganicLine } from '../components/icons/KaleyIcons';
import LeafButton from '../components/ui/LeafButton';
import Footer from '../components/ui/Footer';
import heroBackground from '../assets/images/03.jpg';
import visitHealCard from '../assets/images/visit-heal-card.png';
import buySipHealCard from '../assets/images/buy-sip-heal-card.png';
import connectHealCard from '../assets/images/connect-heal-card.png';
import ourStoryImage from '../assets/images/our-story-image.png';

function Home() {
    return (
        <div className="bg-[#faf8f5] text-[#1e2a24]">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroBackground})`,
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl animate-fade-in">
                    {/* Unified Hero Statement - Light text on dark background */}
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide leading-relaxed mb-8 sm:mb-12 md:mb-16">
                        Healing <span className="text-[#d4b896]">One Forest</span>, <span className="text-[#d4b896]">One Community</span>, and <span className="text-[#d4b896]">You</span>
                        <br />
                        <span className="text-white/80">One Flavourful Sip at a Time</span>
                    </h1>

                    {/* CTA Buttons - Using LeafButton component */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                        <LeafButton to="/visit" variant="light">Experience Kaley</LeafButton>
                        <LeafButton to="/buy" variant="light">Our Teas</LeafButton>
                    </div>
                </div>

                {/* Scroll indicator - Hand-drawn style with small + large curves */}
                <button
                    onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                    className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer hover:opacity-80 transition-opacity"
                    aria-label="Scroll to journey section"
                >
                    <svg className="w-8 h-10 sm:w-10 sm:h-12 text-white/60" viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        {/* Small inner curve */}
                        <path d="M16 12c2 4 3 6 4 8 1-2 2-4 4-8" />
                        {/* Large outer curve */}
                        <path d="M10 8c5 10 8 16 10 20 2-4 5-10 10-20" />
                    </svg>
                </button>
            </section>

            {/* Three Healing Journeys - Premium Section */}
            <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d4a3a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#a86d4d]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3d4a3a] tracking-wide">
                            Your Healing Journey
                        </h2>
                        <div className="flex items-center justify-center gap-6 mt-12">
                            <OrganicLine className="w-24 text-[#a86d4d]/40" />
                            <LeafAccentIcon className="w-8 h-8 text-[#a86d4d]/30 transform rotate-45" strokeWidth={0.8} />
                            <OrganicLine className="w-24 text-[#a86d4d]/40" />
                        </div>
                    </div>

                    {/* Journey Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        <JourneyCardLink
                            icon={<Leaf className="w-10 h-10" strokeWidth={1} />}
                            title="Visit & Heal"
                            description="Immerse yourself in our peaceful forest retreat where nature restores your spirit"
                            href="/visit"
                            bgImage={visitHealCard}
                            accent="from-[#3d4a3a]/80 to-[#2a332d]/90"
                        />
                        <JourneyCardLink
                            icon={<Coffee className="w-10 h-10" strokeWidth={1} />}
                            title="Buy, Sip & Heal"
                            description="Experience the transformative power of organic tea crafted with intention"
                            href="/buy"
                            bgImage={buySipHealCard}
                            accent="from-[#a86d4d]/80 to-[#7a4f38]/90"
                        />
                        <JourneyCardLink
                            icon={<Heart className="w-10 h-10" strokeWidth={1} />}
                            title="Connect & Heal"
                            description="Join a community dedicated to wellness, sustainability, and mindful living"
                            href="/connect"
                            bgImage={connectHealCard}
                            accent="from-[#5a6b5e]/80 to-[#3d4a3a]/90"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story - Immersive Section */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-[#faf8f5] via-[#f5f2ed] to-[#faf8f5]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Story Content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-[#c9a66b]" strokeWidth={1.5} />
                                <span className="text-[#c9a66b] text-sm font-light tracking-[0.3em] uppercase">Our Story</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a4d2e] leading-[1.2] tracking-wide">
                                Rooted in Heritage,
                                <br />
                                <span className="text-[#c9a66b]">Growing with Purpose</span>
                            </h2>

                            <div className="space-y-6 text-[#5a6b62]">
                                <p className="text-lg font-light leading-relaxed">
                                    Nestled in the misty highlands of Sri Lanka, Kaley Tea began as a dream shared between generations —
                                    a vision to preserve ancient tea wisdom while healing the land that nurtures us.
                                </p>
                                <p className="text-lg font-light leading-relaxed">
                                    Today, every leaf we harvest tells a story of forest regeneration, community empowerment,
                                    and the delicate art of organic cultivation passed down through centuries.
                                </p>
                            </div>

                            <div className="pt-4">
                                <LeafButton to="/story" variant="dark">Discover Our Full Journey</LeafButton>
                            </div>
                        </div>

                        {/* Story Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#1a4d2e]/10">
                                <img
                                    src={ourStoryImage}
                                    alt="Tea artisan hands holding freshly picked tea leaves"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#c9a66b]/20 rounded-full"></div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#c9a66b]/10 rounded-full blur-2xl"></div>

                            {/* Quote Card */}
                            <div className="absolute bottom-8 left-8 right-8 lg:-left-8 lg:right-auto lg:w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                <p className="text-[#1a4d2e] font-light italic text-sm leading-relaxed">
                                    "We don't just grow tea — we nurture a legacy of healing that connects people, nature, and tradition."
                                </p>
                                <p className="text-[#c9a66b] text-xs mt-3 tracking-wider">— The Kaley Family</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 md:py-40 bg-white/40">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-wide text-[#1a4d2e]">
                        Why Kaley
                    </h2>

                    <div className="space-y-16">
                        <ValueStatement
                            title="Organic Heritage"
                            text="Every leaf is cultivated without chemicals, honoring Sri Lanka's centuries-old tea wisdom"
                        />
                        <ValueStatement
                            title="Forest Regeneration"
                            text="With each sip, you're helping restore precious ecosystems and protect biodiversity"
                        />
                        <ValueStatement
                            title="Community Empowerment"
                            text="We partner directly with tea farmers, ensuring fair wages and sustainable livelihoods"
                        />
                        <ValueStatement
                            title="Healing Experience"
                            text="More than tea – a mindful ritual that brings peace to your day"
                        />
                    </div>
                </div>
            </section>

            <section className="py-32 md:py-40">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        className="h-[60vh] bg-cover bg-center rounded-3xl"
                        style={{
                            backgroundImage:
                                'url(https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?w=1920&h=1080&fit=crop)',
                        }}
                    ></div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div >
    );
}

function JourneyCardLink({
    icon,
    title,
    description,
    href,
    bgImage,
    accent,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    bgImage: string;
    accent: string;
}) {
    return (
        <Link
            to={href}
            className="group relative h-[420px] md:h-[480px] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1a4d2e]/20"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Dark Base Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-80 group-hover:opacity-85 transition-opacity duration-500`}></div>

            {/* Extra Bottom Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Decorative Ring */}
            <div className="absolute top-6 right-6 w-16 h-16 border border-white/30 rounded-full group-hover:scale-125 group-hover:border-white/50 transition-all duration-700"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Icon with glow effect */}
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-white group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform transition-transform duration-500 drop-shadow-lg">
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide group-hover:translate-x-1 transition-transform duration-500 drop-shadow-lg">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-light leading-relaxed text-sm md:text-base max-w-xs drop-shadow-md">
                    {description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-500 drop-shadow-md">
                    <span className="text-sm tracking-wider font-medium">Begin Your Journey</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
        </Link>
    );
}

// JourneyCard component removed - "Our Story" now has its own dedicated section

function ValueStatement({ title, text }: { title: string; text: string }) {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-wide text-[#1a4d2e]">{title}</h3>
            <p className="text-[#5a6b62] font-light leading-[1.8] text-lg max-w-2xl mx-auto">
                {text}
            </p>
        </div>
    );
}

export default Home;
