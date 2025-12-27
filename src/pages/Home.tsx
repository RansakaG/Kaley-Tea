import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    LeafAccentIcon, OrganicLine, HealingBudIcon,
    GalleryTeaIcon, GalleryCommunityIcon, QuoteIcon,
    OrganicIcon, FairtradeIcon, NatureRestorationIcon,
    VisitHealIcon, BuySipHealIcon, ConnectHealIcon
} from '../components/icons/KaleyIcons';
import LeafButton from '../components/ui/LeafButton';
import Footer from '../components/ui/Footer';
import heroBackground from '../assets/images/03.jpg';
import visitHealCard from '../assets/images/visit-heal-card.png';
import buySipHealCard from '../assets/images/buy-sip-heal-card.png';
import connectHealCard from '../assets/images/connect-heal-card.png';
import ourStoryImage from '../assets/images/storyheal.png';

// Gallery preview images
import galleryEstate from '../assets/images/gallery/tea_estate_landscape.png';
import galleryCommunity from '../assets/images/gallery/local_community.png';
import galleryArtisan from '../assets/images/gallery/artisan_tea_work.png';
import galleryHarvest from '../assets/images/gallery/tea_harvest.png';

const testimonials = [
    {
        quote: "The most authentic tea experience I've ever had. The connection to nature and community is palpable in every sip.",
        name: "Sarah Chen",
        location: "San Francisco, USA",
    },
    {
        quote: "Staying at Kaley changed my perspective on sustainability. This is what mindful living looks like.",
        name: "Marcus Weber",
        location: "Berlin, Germany",
    },
    {
        quote: "Not just tea, but a philosophy of healing that touches your soul. I've visited three times now.",
        name: "Priya Sharma",
        location: "Mumbai, India",
    },
];

function Home() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-[#faf8f5] text-[#1e2a24]">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroBackground})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl animate-fade-in">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide leading-relaxed mb-8 sm:mb-12 md:mb-16">
                        Healing <span className="text-[#d4b896]">One Forest</span>, <span className="text-[#d4b896]">One Community</span>, and <span className="text-[#d4b896]">You</span>
                        <br />
                        <span className="text-white/80">One Flavourful Sip at a Time</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                        <LeafButton to="/visit" variant="light">Experience Kaley</LeafButton>
                        <LeafButton to="/buy" variant="light">Our Teas</LeafButton>
                    </div>
                </div>

                <button
                    onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                    className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer hover:opacity-80 transition-opacity"
                    aria-label="Scroll to journey section"
                >
                    <svg className="w-8 h-10 sm:w-10 sm:h-12 text-white/60" viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        <path d="M16 12c2 4 3 6 4 8 1-2 2-4 4-8" />
                        <path d="M10 8c5 10 8 16 10 20 2-4 5-10 10-20" />
                    </svg>
                </button>
            </section>

            {/* Three Healing Journeys */}
            <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d4a3a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#a86d4d]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3d4a3a] tracking-wide">
                            Your Healing Journey
                        </h2>
                        <div className="flex items-center justify-center gap-6 mt-8">
                            <OrganicLine className="w-24 text-[#a86d4d]/40" />
                            <HealingBudIcon className="w-6 h-6 text-[#a86d4d]/50" />
                            <OrganicLine className="w-24 text-[#a86d4d]/40" />
                        </div>
                        <p className="text-lg md:text-xl font-light text-[#5a6b62] mt-8 max-w-2xl mx-auto leading-relaxed">
                            There are numerous ways we could heal together — come, join our healing journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        <JourneyCardLink
                            icon={<VisitHealIcon className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1} />}
                            title="Visit & Heal"
                            tagline="Do Nothing. Just Feel."
                            experiences={["Tea garden walk", "Forest immersion", "Farm-to-table dining"]}
                            audience="For seekers of peace and restoration"
                            href="/visit"
                            bgImage={visitHealCard}
                            accent="from-[#3d4a3a]/80 to-[#2a332d]/90"
                        />
                        <JourneyCardLink
                            icon={<BuySipHealIcon className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1} />}
                            title="Buy, Sip & Heal"
                            tagline="Bring the forest home to you"
                            experiences={["Organic teas", "Herbal blends", "Worldwide shipping"]}
                            audience="For tea enthusiasts everywhere"
                            href="/buy"
                            bgImage={buySipHealCard}
                            accent="from-[#a86d4d]/80 to-[#7a4f38]/90"
                        />
                        <JourneyCardLink
                            icon={<ConnectHealIcon className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1} />}
                            title="Connect & Heal"
                            tagline="Join our healing journey"
                            experiences={["Restore nature", "Uplift communities", "Join programmes"]}
                            audience="For changemakers and healers"
                            href="/connect"
                            bgImage={connectHealCard}
                            accent="from-[#5a6b5e]/80 to-[#3d4a3a]/90"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-white/50 to-[#faf8f5]">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Centered Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a4d2e] tracking-wide mb-6">
                            Our Healing Story
                        </h2>
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <OrganicLine className="w-24 text-[#c9a66b]/40" />
                            <HealingBudIcon className="w-6 h-6 text-[#c9a66b]/50" />
                            <OrganicLine className="w-24 text-[#c9a66b]/40" />
                        </div>
                        <p className="text-lg md:text-xl font-light text-[#5a6b62] max-w-2xl mx-auto leading-relaxed">
                            Rooted in heritage, growing with purpose
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
                                <img
                                    src={ourStoryImage}
                                    alt="Tea artisan hands holding freshly picked tea leaves"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradients */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/50 via-[#1a4d2e]/10 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/20 via-transparent to-[#c9a66b]/10"></div>
                            </div>
                            {/* Decorative accents */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c9a66b]/10 rounded-2xl -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1a4d2e]/5 rounded-2xl -z-10"></div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8">
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

                            {/* Quote Card */}
                            <div className="bg-[#1a4d2e]/5 rounded-2xl p-6 border border-[#1a4d2e]/10">
                                <p className="text-[#1a4d2e] font-light italic text-base leading-relaxed">
                                    "We don't just grow tea — we nurture a legacy of healing that connects people, nature, and tradition."
                                </p>
                                <p className="text-[#c9a66b] text-sm mt-3 font-light tracking-wider">— The Kaley Family</p>
                            </div>

                            <LeafButton to="/story" variant="dark">Discover Our Full Journey</LeafButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Kaley - Enhanced 3-Pillar Design */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-white/50 to-[#faf8f5]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a66b]/30"></div>
                            <HealingBudIcon className="w-4 h-4 text-[#c9a66b]/50" />
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a66b]/30"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[#1a4d2e] tracking-wide mb-6">
                            Why Kaley?
                        </h2>
                        <p className="text-lg font-light text-[#5a6b62] max-w-2xl mx-auto">
                            We are unique — probably one of the few places in the world where healing happens at every level.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {/* Pillar 1: Organic Tea Heals */}
                        <div className="text-center group">
                            <div className="mb-8 relative inline-block">
                                <div className="w-20 h-20 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                    <GalleryTeaIcon className="w-10 h-10 text-[#1a4d2e]/60 group-hover:text-[#c9a66b] transition-colors duration-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                                Organic Tea Heals You
                            </h3>
                            <p className="text-[#5a6b62] font-light text-sm leading-relaxed">
                                Every sip nurtures your body with pure, chemical-free tea grown in harmony with nature. Our organic practices mean the tea is good for you and good for the earth.
                            </p>
                        </div>

                        {/* Pillar 2: Nature Heals */}
                        <div className="text-center group">
                            <div className="mb-8 relative inline-block">
                                <div className="w-20 h-20 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                    <NatureRestorationIcon className="w-10 h-10 text-[#1a4d2e]/60 group-hover:text-[#c9a66b] transition-colors duration-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                                Nature Heals Everyone
                            </h3>
                            <p className="text-[#5a6b62] font-light text-sm leading-relaxed">
                                Our forest regeneration efforts restore native ecosystems. When you visit or support Kaley, you're contributing to the healing of the land itself.
                            </p>
                        </div>

                        {/* Pillar 3: Community Heals */}
                        <div className="text-center group">
                            <div className="mb-8 relative inline-block">
                                <div className="w-20 h-20 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                    <GalleryCommunityIcon className="w-10 h-10 text-[#1a4d2e]/60 group-hover:text-[#c9a66b] transition-colors duration-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                                Community Heals Others
                            </h3>
                            <p className="text-[#5a6b62] font-light text-sm leading-relaxed">
                                Engaging with our local community through Fairtrade practices uplifts lives. When you choose Kaley, you become part of a circle of healing that extends outward.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                            What Others Say About Us
                        </h2>
                        <p className="text-sm font-light text-[#5a6b62] tracking-widest uppercase">
                            Reviews · Visitors · Tea Lovers
                        </p>
                    </div>

                    <div className="relative">
                        <div className="text-center px-8 md:px-16">
                            <QuoteIcon className="w-12 h-12 text-[#c9a66b]/20 mx-auto mb-6" strokeWidth={1} />

                            <p className="text-xl md:text-2xl font-light italic text-[#1a4d2e] leading-relaxed mb-8">
                                "{testimonials[currentTestimonial].quote}"
                            </p>

                            <p className="text-[#5a6b62] font-light">
                                <span className="text-[#1a4d2e]">{testimonials[currentTestimonial].name}</span>
                                <br />
                                <span className="text-sm">{testimonials[currentTestimonial].location}</span>
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-[#5a6b62] hover:text-[#1a4d2e] transition-colors hover:-translate-x-1 transform transition-transform duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-10 h-8 sm:w-12 sm:h-10" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                                <path d="M28 16c-4 2-6 3-8 4 2 1 4 2 8 4" />
                                <path d="M32 10c-10 5-16 8-20 10 4 2 10 5 20 10" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#5a6b62] hover:text-[#1a4d2e] transition-colors hover:translate-x-1 transform transition-transform duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-10 h-8 sm:w-12 sm:h-10" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                                <path d="M20 16c4 2 6 3 8 4-2 1-4 2-8 4" />
                                <path d="M16 10c10 5 16 8 20 10-4 2-10 5-20 10" />
                            </svg>
                        </button>

                        {/* Carousel Dots */}
                        <div className="flex justify-center gap-2 mt-10">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index
                                        ? 'bg-[#c9a66b] w-6'
                                        : 'bg-[#c9a66b]/30 hover:bg-[#c9a66b]/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-24 md:py-32 bg-white/40">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                            Our Commitments
                        </h2>
                        <p className="text-lg font-light text-[#5a6b62] max-w-2xl mx-auto">
                            Certified to make a difference — for you, our community, and the planet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {/* Organic */}
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                <OrganicIcon className="w-12 h-12 text-[#1a4d2e] group-hover:text-[#c9a66b] transition-colors duration-500" strokeWidth={0.8} />
                            </div>
                            <h3 className="text-2xl font-light text-[#1a4d2e] mb-3 tracking-wide">Certified Organic</h3>
                            <p className="text-[#5a6b62] font-light leading-relaxed max-w-sm mx-auto">
                                Our teas are cultivated without synthetic pesticides or fertilizers, honoring the natural balance of our ecosystem.
                            </p>
                        </div>

                        {/* Fairtrade */}
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                <FairtradeIcon className="w-12 h-12 text-[#1a4d2e] group-hover:text-[#c9a66b] transition-colors duration-500" strokeWidth={0.8} />
                            </div>
                            <h3 className="text-2xl font-light text-[#1a4d2e] mb-3 tracking-wide">Fairtrade Certified</h3>
                            <p className="text-[#5a6b62] font-light leading-relaxed max-w-sm mx-auto">
                                We ensure fair wages and safe working conditions, investing in community development programs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a66b] text-sm font-light tracking-[0.3em] uppercase mb-4 block">
                            Our World in Pictures
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] mb-4 tracking-wide">
                            A Glimpse of Kaley
                        </h2>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { src: galleryEstate, alt: 'Tea estate landscape' },
                            { src: galleryCommunity, alt: 'Local community' },
                            { src: galleryArtisan, alt: 'Artisan tea work' },
                            { src: galleryHarvest, alt: 'Tea harvest' },
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#1a4d2e]/0 group-hover:bg-[#1a4d2e]/30 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* See More Link */}
                    <div className="text-center mt-12">
                        <LeafButton to="/story#gallery" variant="ghost">See Full Gallery</LeafButton>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

function JourneyCardLink({
    icon,
    title,
    tagline,
    experiences,
    audience,
    href,
    bgImage,
    accent,
}: {
    icon: React.ReactNode;
    title: string;
    tagline: string;
    experiences: string[];
    audience: string;
    href: string;
    bgImage: string;
    accent: string;
}) {
    return (
        <Link
            to={href}
            className="group relative h-[520px] md:h-[560px] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1a4d2e]/20"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/40"></div>
            <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-80 group-hover:opacity-85 transition-opacity duration-500`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Decorative corner accents */}
            <div className="absolute top-5 left-5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <LeafAccentIcon className="w-5 h-5 text-white transform -rotate-45" strokeWidth={1} />
            </div>
            <div className="absolute top-5 right-5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <LeafAccentIcon className="w-5 h-5 text-white transform rotate-45" strokeWidth={1} />
            </div>

            {/* Decorative circle */}
            <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full group-hover:scale-125 group-hover:border-white/40 transition-all duration-700"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Icon with glow effect */}
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-white group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform transition-transform duration-500 drop-shadow-lg">
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-wide group-hover:translate-x-1 transition-transform duration-500 drop-shadow-lg">
                    {title}
                </h3>

                {/* Tagline */}
                <p className="text-white/90 font-light italic text-base mb-5 drop-shadow-md">
                    "{tagline}"
                </p>

                {/* Experience bullet list */}
                <ul className="space-y-2 mb-5">
                    {experiences.map((exp, index) => (
                        <li key={index} className="flex items-center gap-2 text-white/85 text-sm font-light drop-shadow-sm">
                            <LeafAccentIcon className="w-3 h-3 text-[#c9a66b]/70 flex-shrink-0" strokeWidth={1.5} />
                            <span>{exp}</span>
                        </li>
                    ))}
                </ul>

                {/* Audience tag */}
                <p className="text-[#c9a66b] text-xs font-light italic tracking-wide mb-4 drop-shadow-sm">
                    {audience}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-500 drop-shadow-md">
                    <span className="text-sm tracking-wider font-medium">Begin Your Journey</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
        </Link>
    );
}

export default Home;

