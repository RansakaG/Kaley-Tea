import { useEffect, useState } from 'react';

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
}

// Fallback products with local mockup images
const fallbackProducts: Product[] = [
  {
    id: '1',
    name: 'Ceylon Black Gold',
    category: 'black',
    description: 'Rich, full-bodied black tea from the highlands of Sri Lanka with malty undertones.',
    price: 24.99,
    image_url: blackTeaImg,
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
  },
  {
    id: '8',
    name: 'Premium Tea Collection',
    category: 'black',
    description: 'Three signature blends in elegant packaging – the complete Kaley experience.',
    price: 69.99,
    image_url: giftSetImg,
  },
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use local fallback products directly
    setProducts(fallbackProducts);
    setLoading(false);
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'black', label: 'Black' },
    { value: 'green', label: 'Green' },
    { value: 'herbal', label: 'Herbal' },
  ];

  if (loading) {
    return <div className="py-20 text-center text-[#5a6b62] font-light">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-16 flex justify-center gap-8 md:gap-12">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`font-light text-sm tracking-wider transition-all duration-500 ${selectedCategory === cat.value
              ? 'text-[#1a4d2e]'
              : 'text-[#5a6b62] hover:text-[#1a4d2e]'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredProducts.map(product => (
          <div key={product.id} className="group transition-all duration-700">
            <div className="mb-6 h-64 md:h-72 bg-gradient-to-br from-[#faf8f5] to-[#f0ebe5] rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23e8e8e8%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2224%22 fill=%22%23999%22%3E%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            <h3 className="text-lg font-light tracking-wide text-[#1a4d2e] mb-2">
              {product.name}
            </h3>
            <p className="text-sm font-light text-[#5a6b62] mb-4 leading-relaxed h-10 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[#c9a66b] font-light text-sm tracking-wider">
                ${product.price.toFixed(2)}
              </span>
              <a
                href={`https://wa.me/?text=Hi%20Kaley%20Tea%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20($${product.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d2e] font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 hover:text-[#c9a66b]"
              >
                Order →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
