import { useState } from 'react';
import {
    QuoteIcon, CloseIcon,
    OrganicIcon, FairtradeIcon, LeafAccentIcon, HerbAccentIcon,
    GalleryAllIcon, GalleryEstateIcon, GalleryTeaIcon, GalleryCommunityIcon,
    GalleryFrameCorner, GalleryOverlayIcon, OrganicLine, OrganicVerticalLine,
    HealingBudIcon, HistoryIcon, OrganicGrowthIcon, MilestoneFairtradeIcon,
    NatureRestorationIcon, HealingSanctuaryIcon
} from '../components/icons/KaleyIcons';
import Footer from '../components/ui/Footer';

// Import gallery images
import teaEstateLandscape from '../assets/images/gallery/tea_estate_landscape.png';
import freshTeaLeaves from '../assets/images/gallery/fresh_tea_leaves.png';
import teaCommunityWorkers from '../assets/images/gallery/tea_community_workers.png';
import teaPreparation from '../assets/images/gallery/tea_preparation.png';
import mistyMountains from '../assets/images/gallery/misty_mountains.png';
import teaPlantation from '../assets/images/gallery/tea_plantation.png';
import localCommunity from '../assets/images/gallery/local_community.png';
import teaHarvest from '../assets/images/gallery/tea_harvest.png';
import artisanTeaWork from '../assets/images/gallery/artisan_tea_work.png';

// Story hero image
import storyHeroImage from '../assets/images/story.png';

// Gallery images with local sources
const galleryImages = [
    { id: 1, src: teaEstateLandscape, category: 'estate', alt: 'Tea estate landscape in Sri Lankan highlands' },
    { id: 2, src: freshTeaLeaves, category: 'tea', alt: 'Fresh organic tea leaves being picked' },
    { id: 3, src: teaCommunityWorkers, category: 'community', alt: 'Tea estate workers harvesting' },
    { id: 4, src: teaPreparation, category: 'tea', alt: 'Traditional tea preparation ceremony' },
    { id: 5, src: mistyMountains, category: 'estate', alt: 'Misty mountains of Sri Lanka' },
    { id: 6, src: teaPlantation, category: 'estate', alt: 'Terraced tea plantation panorama' },
    { id: 7, src: localCommunity, category: 'community', alt: 'Local community gathering' },
    { id: 8, src: teaHarvest, category: 'tea', alt: 'Tea harvest basket with fresh leaves' },
    { id: 9, src: artisanTeaWork, category: 'community', alt: 'Artisan processing tea by hand' },
];

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

const milestones = [
    { year: '1920', title: 'Estate Founded', description: 'Our family began cultivating tea in the Sri Lankan highlands', icon: HistoryIcon },
    { year: '1985', title: 'Organic Transition', description: 'Pioneered organic farming methods in the region', icon: OrganicGrowthIcon },
    { year: '2005', title: 'Fairtrade Certified', description: 'Recognized for our commitment to fair wages and practices', icon: MilestoneFairtradeIcon },
    { year: '2015', title: 'Forest Restoration', description: 'Launched our native forest regeneration program', icon: NatureRestorationIcon },
    { year: '2023', title: 'Healing Retreat', description: 'Opened our doors to visitors seeking wellness and connection', icon: HealingSanctuaryIcon },
];

export default function OurStory() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const categories = ['all', 'estate', 'tea', 'community'];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-[#faf8f5] text-[#1e2a24]">
            {/* ========== HERO TITLE SECTION ========== */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-[#1a4d2e] mb-4 leading-relaxed">
                        Our Healing Story
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#5a6b62] leading-loose max-w-2xl mx-auto">
                        A century of tradition, a lifetime of healing
                    </p>
                </div>
            </section>

            {/* ========== STORY CONTENT SECTION ========== */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Split Layout: Text + Image */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 text-[#5a6b62] text-lg leading-[1.9] font-light order-2 lg:order-1">
                            <div className="relative">
                                <OrganicVerticalLine className="absolute -left-4 top-0 w-1 h-full text-[#c9a66b]/40" />
                                <p className="pl-4">
                                    Nestled in the misty highlands of Sri Lanka, where the air carries whispers of ancient wisdom,
                                    Kaley Tea began as a humble dream shared between generations. Our family has tended these lands
                                    for over a century, learning from the forest, listening to the rhythm of the seasons.
                                </p>
                            </div>
                            <p>
                                Today, we stand at the intersection of heritage and purpose. Every leaf we harvest tells a story
                                of forest regeneration, community empowerment, and the delicate art of organic cultivation passed
                                down through the years. We don't just grow tea — we nurture a legacy of healing.
                            </p>
                        </div>

                        {/* Feature Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                                <img
                                    src={storyHeroImage}
                                    alt="Kaley Tea Estate in Sri Lanka"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/30 via-transparent to-[#1a4d2e]/10 pointer-events-none"></div>
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c9a66b]/10 rounded-2xl -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1a4d2e]/5 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MISSION SECTION ========== */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Compact Mission Banner */}
                    <div className="relative bg-[#1a4d2e]/[0.03] rounded-2xl p-8 md:p-12 border border-[#1a4d2e]/5">
                        {/* Decorative corner accents */}
                        <div className="absolute top-3 left-3">
                            <HealingBudIcon className="w-4 h-4 text-[#c9a66b]/30 rotate-[-30deg]" />
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <HealingBudIcon className="w-4 h-4 text-[#c9a66b]/30 rotate-[30deg]" />
                        </div>

                        <div className="text-center max-w-3xl mx-auto">
                            {/* Purpose Label */}
                            <span className="text-[#c9a66b] text-[10px] font-light tracking-[0.5em] uppercase mb-6 block">Our Purpose</span>

                            {/* Main Statement */}
                            <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#1a4d2e] leading-relaxed mb-6">
                                To heal the forest, uplift our community, and through every flavourful sip,
                                <span className="text-[#c9a66b]"> bring that healing to you.</span>
                            </p>

                            {/* Divider */}
                            <div className="flex items-center justify-center gap-3 my-6">
                                <div className="w-8 h-px bg-[#c9a66b]/20"></div>
                                <HealingBudIcon className="w-3 h-3 text-[#c9a66b]/40" />
                                <div className="w-8 h-px bg-[#c9a66b]/20"></div>
                            </div>

                            {/* Invitation */}
                            <p className="text-base md:text-lg font-light text-[#5a6b62]">
                                There are numerous ways we could heal together —
                                <span className="text-[#1a4d2e]"> come, join our healing journey.</span>
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mt-16 pt-16 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg">
                            <OrganicLine className="text-[#1a4d2e]/10" strokeWidth={0.5} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-[#1a4d2e] font-light tracking-widest text-sm">
                            <span className="hover:text-[#c9a66b] transition-colors duration-500">Organic</span>
                            <HealingBudIcon className="text-[#c9a66b]/40 w-3 h-3" />
                            <span className="hover:text-[#c9a66b] transition-colors duration-500">Fairtrade</span>
                            <HealingBudIcon className="text-[#c9a66b]/40 w-3 h-3" />
                            <span className="hover:text-[#c9a66b] transition-colors duration-500">Sustainability</span>
                            <HealingBudIcon className="text-[#c9a66b]/40 w-3 h-3" />
                            <span className="hover:text-[#c9a66b] transition-colors duration-500">Community</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== WHY KALEY SECTION ========== */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-[#faf8f5]">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a66b]/30"></div>
                            <HealingBudIcon className="w-4 h-4 text-[#c9a66b]/50" />
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a66b]/30"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] tracking-wide mb-6">
                            Why Kaley?
                        </h2>
                        <p className="text-lg font-light text-[#5a6b62] max-w-2xl mx-auto">
                            We are unique — probably one of the few places in the world where healing happens at every level.
                        </p>
                    </div>

                    {/* Three Pillars */}
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

            {/* Timeline */}
            <section className="py-16 md:py-20 bg-white/50">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-light text-center text-[#1a4d2e] mb-12 tracking-wide">
                        Our Journey
                    </h2>

                    <div className="relative">
                        {/* Vertical line - Organic Vine Style */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 flex justify-center transform md:-translate-x-1/2 opacity-30">
                            <OrganicVerticalLine className="h-full text-[#c9a66b]" />
                        </div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
                                >
                                    {/* Icon Milestone */}
                                    <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border border-[#c9a66b]/30 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-sm group">
                                        <milestone.icon className="w-5 h-5 text-[#c9a66b] group-hover:scale-110 transition-transform duration-500" strokeWidth={0.8} />
                                    </div>

                                    {/* Content */}
                                    <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                        <span className="text-[#c9a66b] font-light tracking-widest text-sm">{milestone.year}</span>
                                        <h3 className="text-xl font-light text-[#1a4d2e] mt-1 tracking-wide">{milestone.title}</h3>
                                        <p className="text-[#5a6b62] font-light text-sm mt-2 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== GALLERY SECTION ========== */}
            <section id="gallery" className="py-16 md:py-20 relative overflow-hidden">
                {/* Decorative corner frames */}
                <div className="absolute top-8 left-8 opacity-10">
                    <GalleryFrameCorner className="w-24 h-24 text-[#1a4d2e]" strokeWidth={0.5} />
                </div>
                <div className="absolute top-8 right-8 opacity-10 transform scale-x-[-1]">
                    <GalleryFrameCorner className="w-24 h-24 text-[#1a4d2e]" strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-8 left-8 opacity-10 transform scale-y-[-1]">
                    <GalleryFrameCorner className="w-24 h-24 text-[#1a4d2e]" strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-8 right-8 opacity-10 transform scale-[-1]">
                    <GalleryFrameCorner className="w-24 h-24 text-[#1a4d2e]" strokeWidth={0.5} />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <div className="text-center mb-10 flex items-center justify-center gap-4">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#c9a66b]/30"></div>
                        <LeafAccentIcon className="w-8 h-8 text-[#c9a66b]/40 transform rotate-45" strokeWidth={0.8} />
                        <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#c9a66b]/30"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] tracking-wide mb-4">
                        Our World in Pictures
                    </h2>
                    <p className="text-[#5a6b62] font-light text-sm tracking-widest uppercase">
                        Moments from the highlands
                    </p>

                    {/* Icon-Based Category Filter */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-16">
                        {categories.map((category) => {
                            const IconComponent =
                                category === 'all' ? GalleryAllIcon :
                                    category === 'estate' ? GalleryEstateIcon :
                                        category === 'tea' ? GalleryTeaIcon :
                                            GalleryCommunityIcon;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`group flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-500 ${selectedCategory === category
                                        ? 'bg-[#1a4d2e]/5 border border-[#1a4d2e]/10'
                                        : 'hover:bg-[#1a4d2e]/5 border border-transparent'
                                        }`}
                                >
                                    <div className={`relative transition-all duration-300 ${selectedCategory === category
                                        ? 'text-[#1a4d2e]'
                                        : 'text-[#5a6b62]/60 group-hover:text-[#1a4d2e]'
                                        }`}>
                                        <IconComponent className="w-8 h-8 md:w-10 md:h-10" strokeWidth={0.8} />
                                        {selectedCategory === category && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#c9a66b] rounded-full"></div>
                                        )}
                                    </div>
                                    <span className={`text-xs font-light tracking-widest capitalize transition-all duration-300 ${selectedCategory === category
                                        ? 'text-[#1a4d2e]'
                                        : 'text-[#5a6b62]/60 group-hover:text-[#1a4d2e]'
                                        }`}>
                                        {category}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Organic Masonry-Style Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {filteredImages.map((image, index) => {
                            // Create varied heights for organic feel
                            const isLarge = index % 5 === 0;
                            const isMedium = index % 3 === 1;

                            return (
                                <div
                                    key={image.id}
                                    onClick={() => setLightboxImage(image.src)}
                                    className={`relative rounded-2xl overflow-hidden cursor-pointer group 
                                        ${isLarge ? 'row-span-2 aspect-[3/4]' : isMedium ? 'aspect-square' : 'aspect-[4/3]'}
                                        border border-[#1a4d2e]/5 hover:border-[#c9a66b]/30 transition-all duration-500
                                    `}
                                >
                                    {/* Image */}
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Elegant Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/60 via-[#1a4d2e]/20 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <GalleryOverlayIcon className="w-12 h-12 text-white/80" strokeWidth={0.8} />
                                        </div>
                                    </div>

                                    {/* Corner Accent on Hover */}
                                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <div className="w-4 h-4 border-t border-l border-white/40 rounded-tl-sm"></div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <div className="w-4 h-4 border-b border-r border-white/40 rounded-br-sm"></div>
                                    </div>

                                    {/* Category Label */}
                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                        <span className="text-white/80 text-xs font-light tracking-widest uppercase">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Decorative Element */}
                    <div className="flex items-center justify-center gap-4 mt-16">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#c9a66b]/30"></div>
                        <HerbAccentIcon className="w-6 h-6 text-[#c9a66b]/30" strokeWidth={0.8} />
                        <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#c9a66b]/30"></div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {
                lightboxImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                        >
                            <CloseIcon className="w-8 h-8" strokeWidth={1} />
                        </button>
                        <img
                            src={lightboxImage}
                            alt="Gallery image"
                            className="max-w-full max-h-[85vh] rounded-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )
            }

            {/* ========== CERTIFICATIONS SECTION ========== */}
            <section className="py-16 md:py-20 bg-white/50">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] mb-6 tracking-wide">
                            Our Commitments
                        </h2>
                        <p className="text-lg font-light text-[#5a6b62] max-w-2xl mx-auto">
                            Why being certified matters — to you, to our community, and to the planet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Organic Certification */}
                        <div className="text-center group">
                            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                <OrganicIcon className="w-16 h-16 text-[#1a4d2e] group-hover:text-[#c9a66b] transition-colors duration-500" strokeWidth={0.8} />
                            </div>
                            <h3 className="text-2xl font-light text-[#1a4d2e] mb-4 tracking-wide">Certified Organic</h3>
                            <p className="text-[#5a6b62] font-light leading-relaxed max-w-sm mx-auto mb-6">
                                Our teas are cultivated without synthetic pesticides or fertilizers, honoring the natural balance of our ecosystem.
                            </p>
                            <div className="bg-[#1a4d2e]/5 rounded-2xl p-6 max-w-sm mx-auto">
                                <p className="text-sm text-[#1a4d2e] font-light leading-relaxed">
                                    <span className="text-[#c9a66b] font-normal">Why it matters:</span> Organic tea is gentler on your body—no chemicals, no residue. It's tea that heals, not harms.
                                </p>
                            </div>
                        </div>

                        {/* Fairtrade Certification */}
                        <div className="text-center group">
                            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#1a4d2e]/5 flex items-center justify-center border border-[#1a4d2e]/10 group-hover:border-[#c9a66b]/30 transition-colors duration-500">
                                <FairtradeIcon className="w-16 h-16 text-[#1a4d2e] group-hover:text-[#c9a66b] transition-colors duration-500" strokeWidth={0.8} />
                            </div>
                            <h3 className="text-2xl font-light text-[#1a4d2e] mb-4 tracking-wide">Fairtrade Certified</h3>
                            <p className="text-[#5a6b62] font-light leading-relaxed max-w-sm mx-auto mb-6">
                                We ensure fair wages and safe working conditions for all our workers, investing in community development programs.
                            </p>
                            <div className="bg-[#1a4d2e]/5 rounded-2xl p-6 max-w-sm mx-auto">
                                <p className="text-sm text-[#1a4d2e] font-light leading-relaxed">
                                    <span className="text-[#c9a66b] font-normal">Why it matters:</span> Every cup you drink directly uplifts families and strengthens our rural community's future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== REVIEWS SECTION ========== */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-[#1a4d2e] mb-6 tracking-wide">
                            What Others Say About Us
                        </h2>
                        <p className="text-sm font-light text-[#5a6b62] tracking-widest uppercase">
                            Reviews · Visitors · Tea Lovers
                        </p>
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="relative">
                        <div className="text-center px-8 md:px-16">
                            {/* Large Quote Mark */}
                            <QuoteIcon className="w-16 h-16 text-[#c9a66b]/20 mx-auto mb-8" strokeWidth={1} />

                            {/* Quote Text */}
                            <p className="text-xl md:text-2xl font-light italic text-[#1a4d2e] leading-relaxed mb-8">
                                "{testimonials[currentTestimonial].quote}"
                            </p>

                            {/* Name & Location */}
                            <p className="text-[#5a6b62] font-light">
                                <span className="text-[#1a4d2e]">{testimonials[currentTestimonial].name}</span>
                                <br />
                                <span className="text-sm">{testimonials[currentTestimonial].location}</span>
                            </p>
                        </div>

                        {/* Navigation Arrows - Same organic style as Home hero */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-[#5a6b62] hover:text-[#1a4d2e] transition-colors hover:-translate-x-1 transform transition-transform duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-10 h-8 sm:w-12 sm:h-10" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                                {/* Small inner curve - pointing left */}
                                <path d="M28 16c-4 2-6 3-8 4 2 1 4 2 8 4" />
                                {/* Large outer curve - pointing left */}
                                <path d="M32 10c-10 5-16 8-20 10 4 2 10 5 20 10" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#5a6b62] hover:text-[#1a4d2e] transition-colors hover:translate-x-1 transform transition-transform duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-10 h-8 sm:w-12 sm:h-10" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                                {/* Small inner curve - pointing right */}
                                <path d="M20 16c4 2 6 3 8 4-2 1-4 2-8 4" />
                                {/* Large outer curve - pointing right */}
                                <path d="M16 10c10 5 16 8 20 10-4 2-10 5-20 10" />
                            </svg>
                        </button>

                        {/* Carousel Dots */}
                        <div className="flex justify-center gap-2 mt-12">
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

            {/* Footer */}
            <Footer />
        </div >
    );
}
