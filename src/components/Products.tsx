import { useEffect, useState } from 'react';
import { LeafAccentIcon, HerbAccentIcon } from './icons/KaleyIcons';
import LeafButton from './ui/LeafButton';

// Import local mockup images
import blackTeaImg from '../assets/images/products/black_tea_product_1766654890912.png';
import greenTeaImg from '../assets/images/products/green_tea_product_1766654921866.png';
import herbalTeaImg from '../assets/images/products/herbal_tea_product_1766654943754.png';
import giftSetImg from '../assets/images/products/tea_gift_set_1766655050392.png';

type Category = 'all' | 'black' | 'green' | 'herbal';

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    image_url: string;
    badge?: string;
}

const fallbackProducts: Product[] = [
    {
        id: '1',
        name: 'Ceylon Black Gold',
        category: 'black',
        description: 'Rich, full-bodied black tea from the highlands of Sri Lanka with malty undertones.',
        price: 24.99,
        image_url: blackTeaImg,
        badge: 'Bestseller',
    },
    {
        id: '2',
        name: 'Forest Morning Black',
        category: 'black',
        description: 'A robust breakfast tea with hints of caramel and a smooth finish.',
        price: 22.99,
        image_url: blackTeaImg,
    },
    {
        id: '3',
        name: 'Pure Green Serenity',
        category: 'green',
        description: 'Delicate green tea leaves handpicked at dawn, offering a refreshing, grassy flavor.',
        price: 28.99,
        image_url: greenTeaImg,
        badge: 'Organic',
    },
    {
        id: '4',
        name: 'Jade Mountain Green',
        category: 'green',
        description: 'Light and aromatic green tea with subtle floral notes and antioxidant benefits.',
        price: 26.99,
        image_url: greenTeaImg,
    },
    {
        id: '5',
        name: 'Healing Herbs Blend',
        category: 'herbal',
        description: 'A soothing caffeine-free blend of chamomile, lavender, and native Sri Lankan herbs.',
        price: 19.99,
        image_url: herbalTeaImg,
        badge: 'Caffeine-Free',
    },
    {
        id: '6',
        name: 'Forest Calm Infusion',
        category: 'herbal',
        description: 'Relaxing herbal tisane with lemongrass, ginger, and wild mint from the forest floor.',
        price: 21.99,
        image_url: herbalTeaImg,
    },
    {
        id: '7',
        name: 'Kaley Discovery Set',
        category: 'herbal',
        description: 'A curated collection of our finest teas – perfect for gifting or exploring new flavors.',
        price: 59.99,
        image_url: giftSetImg,
        badge: 'Gift Set',
    },
    {
        id: '8',
        name: 'Premium Tea Collection',
        category: 'black',
        description: 'Three signature blends in elegant packaging – the complete Kaley experience.',
        price: 69.99,
        image_url: giftSetImg,
        badge: 'Premium',
    },
];

const categoryColors: Record<string, { bg: string; border: string; accent: string }> = {
    black: { bg: 'from-amber-900/10 to-amber-800/5', border: 'border-amber-900/20', accent: '#5a3825' },
    green: { bg: 'from-emerald-900/10 to-emerald-800/5', border: 'border-emerald-900/20', accent: '#1a4d2e' },
    herbal: { bg: 'from-purple-900/10 to-purple-800/5', border: 'border-purple-900/20', accent: '#4a3f5c' },
};

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [loading, setLoading] = useState(true);
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    useEffect(() => {
        setProducts(fallbackProducts);
        setLoading(false);
    }, []);

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter(p => p.category === selectedCategory);

    const categories: { value: Category; label: string; icon: 'leaf' | 'herb' }[] = [
        { value: 'all', label: 'All Teas', icon: 'leaf' },
        { value: 'black', label: 'Black Tea', icon: 'leaf' },
        { value: 'green', label: 'Green Tea', icon: 'leaf' },
        { value: 'herbal', label: 'Herbal Blends', icon: 'herb' },
    ];

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="inline-block animate-pulse">
                    <LeafAccentIcon className="w-12 h-12 text-[#1a4d2e]/30 animate-spin" strokeWidth={0.8} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Decorative floating leaves */}
            <div className="absolute -top-16 -left-8 opacity-10 pointer-events-none">
                <LeafAccentIcon className="w-32 h-32 text-[#1a4d2e] transform -rotate-45" strokeWidth={0.5} />
            </div>
            <div className="absolute -top-8 -right-12 opacity-10 pointer-events-none">
                <HerbAccentIcon className="w-24 h-24 text-[#c9a66b] transform rotate-12" strokeWidth={0.5} />
            </div>

            {/* Header with decorative elements */}
            <div className="text-center mb-20 relative">
                <span className="text-[#c9a66b] text-sm tracking-[0.3em] uppercase font-light mb-4 block">
                    Handcrafted in Sri Lanka
                </span>
                <h2 className="text-5xl md:text-7xl font-light text-[#1a4d2e] tracking-wide">
                    Our Teas
                </h2>
                <p className="text-[#5a6b62] font-light text-lg mt-6 max-w-xl mx-auto leading-relaxed">
                    Each blend tells a story of ancient wisdom, organic cultivation, and the healing power of nature
                </p>
                {/* Decorative underline */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a66b]/50"></span>
                    <LeafAccentIcon className="w-5 h-5 text-[#c9a66b]/60" strokeWidth={1} />
                    <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a66b]/50"></span>
                </div>
            </div>

            {/* Enhanced Category Filter */}
            <div className="mb-20 flex flex-wrap justify-center gap-4 md:gap-6">
                {categories.map(cat => (
                    <LeafButton
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        variant={selectedCategory === cat.value ? 'dark' : 'ghost'}
                        className={selectedCategory === cat.value ? 'bg-[#1a4d2e]/5 rounded-full px-4' : ''}
                    >
                        {cat.label}
                    </LeafButton>
                ))}
            </div>

            {/* Premium Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => {
                    const colors = categoryColors[product.category] || categoryColors.black;
                    const isHovered = hoveredProduct === product.id;

                    return (
                        <div
                            key={product.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card container with organic border */}
                            <div className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-700 ${isHovered
                                ? 'shadow-2xl shadow-[#1a4d2e]/15 -translate-y-2'
                                : 'shadow-lg shadow-[#1a4d2e]/5'
                                }`}>
                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none overflow-hidden">
                                    <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl ${colors.bg} rounded-full transform transition-transform duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
                                </div>

                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs tracking-wider font-medium bg-[#c9a66b]/90 text-white shadow-lg backdrop-blur-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                                            {product.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Image container with organic frame */}
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#f8f6f3] to-[#f0ece5]">
                                    {/* Subtle pattern overlay */}
                                    <div className="absolute inset-0 opacity-5" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, #1a4d2e 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>

                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                                            }`}
                                    />

                                    {/* Hover overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/80 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <a
                                                href={`https://wa.me/?text=Hi%20Kaley%20Tea%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20($${product.price})`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-3 bg-white/95 backdrop-blur-sm text-[#1a4d2e] text-center rounded-xl font-light text-sm tracking-wider hover:bg-white transition-all duration-300"
                                            >
                                                Order on WhatsApp →
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    {/* Category indicator */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colors.accent }}></span>
                                        <span className="text-xs tracking-widest uppercase font-light text-[#5a6b62]">
                                            {product.category} tea
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-light tracking-wide text-[#1a4d2e] mb-2 group-hover:text-[#2d6b45] transition-colors duration-500">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm font-light text-[#5a6b62] leading-relaxed line-clamp-2 mb-5">
                                        {product.description}
                                    </p>

                                    {/* Price with decorative element */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#1a4d2e]/10">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-light text-[#1a4d2e]">
                                                ${Math.floor(product.price)}
                                            </span>
                                            <span className="text-sm text-[#5a6b62]">
                                                .{(product.price % 1).toFixed(2).slice(2)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#c9a66b] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <LeafAccentIcon className="w-4 h-4" strokeWidth={1.2} />
                                            <span className="text-xs tracking-wider">Organic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom decorative element */}
            <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#1a4d2e]/5 border border-[#1a4d2e]/10">
                    <LeafAccentIcon className="w-5 h-5 text-[#1a4d2e]" strokeWidth={1} />
                    <span className="text-sm text-[#5a6b62] font-light tracking-wider">
                        All our teas are certified organic and fairtrade
                    </span>
                    <LeafAccentIcon className="w-5 h-5 text-[#1a4d2e] transform scale-x-[-1]" strokeWidth={1} />
                </div>
            </div>
        </div>
    );
}
