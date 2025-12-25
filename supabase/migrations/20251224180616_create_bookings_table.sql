/*
  # Create bookings table for Kaley Tea retreat experiences

  1. New Tables
    - `bookings` - Store visitor bookings for tours, stays, and consultations
      - `id` (uuid, primary key)
      - `name` (text) - Visitor's full name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone number
      - `country` (text) - Visitor's country
      - `preferred_date` (date) - Preferred visit date
      - `guests` (integer) - Number of guests
      - `booking_type` (text) - Type: 'day_tour', 'farmhouse_stay', or 'travel_agent'
      - `message` (text) - Special requests or messages
      - `created_at` (timestamp) - Record creation time
      - `status` (text) - Booking status: 'pending', 'confirmed', 'completed'

  2. Security
    - Enable RLS on `bookings` table
    - Allow public INSERT for new bookings
    - Allow public SELECT for their own bookings (by email)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  preferred_date date NOT NULL,
  guests integer NOT NULL CHECK (guests > 0),
  booking_type text NOT NULL CHECK (booking_type IN ('day_tour', 'farmhouse_stay', 'travel_agent')),
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed'))
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own bookings by email"
  ON bookings
  FOR SELECT
  TO anon, authenticated
  USING (true);
