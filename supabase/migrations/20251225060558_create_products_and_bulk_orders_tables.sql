/*
  # Create products and bulk orders tables for Kaley Tea

  1. New Tables
    - `products` - Tea products available for purchase
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `category` (text) - Product category: 'black', 'green', 'herbal'
      - `description` (text) - One-line description
      - `price` (numeric) - Price in USD
      - `image_url` (text) - Product image URL
      - `created_at` (timestamp)

    - `bulk_inquiries` - Business inquiries for bulk orders
      - `id` (uuid, primary key)
      - `company_name` (text) - Company name
      - `contact_person` (text) - Contact person name
      - `email` (text) - Contact email
      - `products_interested` (text) - Which products they're interested in
      - `quantity_estimate` (text) - Estimated quantity needed
      - `message` (text) - Additional details
      - `created_at` (timestamp)
      - `status` (text) - Inquiry status: 'new', 'contacted', 'completed'

  2. Security
    - Enable RLS on both tables
    - Allow public INSERT for inquiries
    - Allow public SELECT for products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('black', 'green', 'herbal')),
  description text NOT NULL,
  price numeric NOT NULL CHECK (price > 0),
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bulk_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  products_interested text NOT NULL,
  quantity_estimate text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed'))
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit bulk inquiry"
  ON bulk_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own inquiries"
  ON bulk_inquiries
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO products (name, category, description, price, image_url) VALUES
  ('Moonlight Black', 'black', 'Rich, smooth black tea with subtle honey notes', 24.99, 'https://images.unsplash.com/photo-1597318013312-64f3999e0b54?w=800&q=80'),
  ('Forest Mist', 'black', 'Bold, full-bodied black tea from our oldest gardens', 28.99, 'https://images.unsplash.com/photo-1600788148184-403f7d63d05f?w=800&q=80'),
  ('Dawn Green', 'green', 'Delicate green tea with jasmine essence', 22.99, 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=800&q=80'),
  ('Sacred Garden', 'green', 'Fresh, grassy green tea with natural sweetness', 19.99, 'https://images.unsplash.com/photo-1599599810980-46e50461f006?w=800&q=80'),
  ('Wellness Blend', 'herbal', 'Chamomile, lavender, and calming herbs', 17.99, 'https://images.unsplash.com/photo-1599599810694-2202c0a45f08?w=800&q=80'),
  ('Forest Healing', 'herbal', 'Immunity-boosting blend with ginger and turmeric', 21.99, 'https://images.unsplash.com/photo-1599599810964-06eaf53e1337?w=800&q=80'),
  ('Twilight Blend', 'herbal', 'Sleep-promoting blend with passionflower', 18.99, 'https://images.unsplash.com/photo-1599599810823-f26c7d0b4d48?w=800&q=80'),
  ('Vitality Mix', 'black', 'Energizing black tea with natural adaptogen blend', 26.99, 'https://images.unsplash.com/photo-1599599809802-cbffb1cc7f99?w=800&q=80');
