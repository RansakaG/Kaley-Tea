import React from 'react';

interface IconProps {
    className?: string;
    strokeWidth?: number;
}

// Restore Nature - Tea leaf with intertwining vine
export const RestoreNatureIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Main tea leaf */}
        <path d="M24 8c-8 4-12 12-10 22 0 0 4-6 10-10s10-6 10-10c0-6-10-2-10-2z" />
        {/* Leaf vein */}
        <path d="M24 12c-2 4-3 10-2 16" />
        {/* Curling vine */}
        <path d="M14 30c2-2 4-2 6 0s4 4 8 2" />
        {/* Small sprouting leaves */}
        <path d="M10 36c2-4 6-4 8-2" />
        <path d="M38 24c-2 2-4 1-5-1" />
    </svg>
);

// Uplift Communities - Three figures with leaves forming a circle
export const CommunityIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Center figure */}
        <circle cx="24" cy="12" r="4" />
        <path d="M24 16c0 4 0 8-2 12" />
        <path d="M24 16c0 4 0 8 2 12" />
        {/* Left figure */}
        <circle cx="12" cy="20" r="3.5" />
        <path d="M12 24c0 3 1 6 4 10" />
        <path d="M12 24c-1 3-2 7 0 10" />
        {/* Right figure */}
        <circle cx="36" cy="20" r="3.5" />
        <path d="M36 24c0 3-1 6-4 10" />
        <path d="M36 24c1 3 2 7 0 10" />
        {/* Connecting leaf arc */}
        <path d="M8 38c6-2 10-1 16 0s10-2 16 0" />
        {/* Tea leaf accent */}
        <path d="M22 6c0-2 2-3 4-2s2 2 0 3" />
    </svg>
);

// Grow Crops - Tea plant with leaves and visible roots
export const HarvestIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Main stem */}
        <path d="M24 14v20" />
        {/* Top leaf pair */}
        <path d="M24 14c-4-2-8-1-9 2s4 4 9 1" />
        <path d="M24 14c4-2 8-1 9 2s-4 4-9 1" />
        {/* Middle leaf pair */}
        <path d="M24 22c-5 0-8 2-8 5s5 2 8-1" />
        <path d="M24 22c5 0 8 2 8 5s-5 2-8-1" />
        {/* Bottom leaf pair */}
        <path d="M24 30c-4 1-6 3-5 5s5 1 5-2" />
        <path d="M24 30c4 1 6 3 5 5s-5 1-5-2" />
        {/* Roots */}
        <path d="M24 34c-2 4-6 8-8 10" />
        <path d="M24 34v10" />
        <path d="M24 34c2 4 6 8 8 10" />
        {/* Soil line */}
        <path d="M12 34h24" strokeDasharray="2 2" />
    </svg>
);

// Develop Products - Tea cup with steam and leaf
export const ProductDevIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Steam wisps */}
        <path d="M18 8c0-2 2-4 0-6" />
        <path d="M24 10c0-3 2-4 0-7" />
        <path d="M30 8c0-2 2-4 0-6" />
        {/* Cup body */}
        <path d="M12 16h24v4c0 8-4 14-12 16-8-2-12-8-12-16v-4z" />
        {/* Cup rim detail */}
        <path d="M14 18h20" />
        {/* Handle with leaf flourish */}
        <path d="M36 20c4 0 6 2 6 6s-2 6-6 6" />
        <path d="M42 24c2-2 4-1 4 1s-2 3-4 2" />
        {/* Tea leaf inside cup */}
        <path d="M20 24c2-1 4 0 5 2s-1 4-3 4-3-2-2-4" />
        {/* Saucer */}
        <path d="M8 40c0-2 6-4 16-4s16 2 16 4" />
    </svg>
);

// Join Programmes - Spiral calendar with leaf
export const ProgrammeIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Calendar body */}
        <rect x="8" y="12" width="32" height="30" rx="3" />
        {/* Calendar top */}
        <path d="M8 20h32" />
        {/* Binding rings */}
        <path d="M16 8v8" />
        <path d="M32 8v8" />
        {/* Decorative tea leaf pattern inside */}
        <path d="M16 28c2-2 4-2 6 0s4 2 6 0" />
        <path d="M18 34c3-1 5 0 6 2" />
        {/* Leaf accent on corner */}
        <path d="M34 24c2-3 5-3 6-1s-2 4-5 3" />
        {/* Small dots for calendar feel */}
        <circle cx="14" cy="26" r="1" fill="currentColor" stroke="none" />
        <circle cx="34" cy="34" r="1" fill="currentColor" stroke="none" />
    </svg>
);

// Support Us - Hands cradling a sprouting leaf
export const SupportIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Left hand */}
        <path d="M8 28c-2-4-2-8 2-10s8 2 10 6" />
        <path d="M10 18c-2-2-1-4 1-5s4 1 4 4" />
        {/* Right hand */}
        <path d="M40 28c2-4 2-8-2-10s-8 2-10 6" />
        <path d="M38 18c2-2 1-4-1-5s-4 1-4 4" />
        {/* Cupped hands bottom */}
        <path d="M12 30c4 6 8 8 12 8s8-2 12-8" />
        {/* Central sprouting plant */}
        <path d="M24 28v-10" />
        {/* Main leaf */}
        <path d="M24 18c-4-4-8-4-9-1s4 6 9 3" />
        <path d="M24 18c4-4 8-4 9-1s-4 6-9 3" />
        {/* Top small leaf/bud */}
        <path d="M24 10c-2-3-1-5 1-5s3 2 1 5" />
        <path d="M24 10c2-3 1-5-1-5s-3 2 1 5" />
        {/* Heart-shaped base */}
        <path d="M20 36c2 2 4 4 4 4s2-2 4-4" />
    </svg>
);

// Tour with Us - Tea leaf forming a winding path
export const TourIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Winding path */}
        <path d="M8 40c4-4 8-2 12-6s4-8 8-10 8 0 12-4" />
        {/* Tea leaves along path */}
        <path d="M10 36c-2-3 0-6 3-5s2 5-1 6" />
        <path d="M20 28c-3-2-2-6 1-6s4 4 1 6" />
        <path d="M30 20c-2-3 0-5 3-4s2 4-1 5" />
        <path d="M38 14c-2-2 0-4 2-3s2 3 0 4" />
        {/* Tree/plant silhouettes */}
        <path d="M6 32c0-4 2-6 4-6s4 2 4 6" />
        <path d="M42 28c0-3 1-5 3-5" />
        {/* Walking figure abstraction */}
        <circle cx="24" cy="10" r="3" />
        <path d="M24 13v6" />
        <path d="M22 16l-2 4" />
        <path d="M26 16l2 4" />
    </svg>
);

// Live with Us - Cottage with nature elements
export const StayIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Cottage roof with organic curve */}
        <path d="M6 24c6-8 12-12 18-12s12 4 18 12" />
        {/* House body */}
        <path d="M10 24v14h28v-14" />
        {/* Door */}
        <path d="M20 38v-10h8v10" />
        {/* Window */}
        <rect x="14" y="28" width="4" height="4" rx="0.5" />
        <rect x="30" y="28" width="4" height="4" rx="0.5" />
        {/* Chimney with smoke */}
        <path d="M32 16v-4h4v8" />
        <path d="M34 10c0-2 1-3 0-5" />
        <path d="M36 11c0-2 1-2 0-4" />
        {/* Surrounding nature - leaves */}
        <path d="M4 32c2-2 4-1 4 1s-2 3-4 2" />
        <path d="M44 30c-2-2-4-1-4 1s2 3 4 2" />
        {/* Ground vegetation */}
        <path d="M2 42c4-2 8-1 12 0s8-2 12 0 8-1 12 0 8-2 10 0" />
    </svg>
);

// Nearby Places - Organic map pin with landscape
export const NearbyIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Map pin with leaf shape */}
        <path d="M24 4c-8 0-14 6-14 14 0 10 14 22 14 22s14-12 14-22c0-8-6-14-14-14z" />
        {/* Tea leaf inside pin */}
        <path d="M20 14c2-3 5-3 7-1s1 5-2 6-5-1-5-3" />
        <path d="M24 16c2-2 5-2 6 0s-1 4-3 4" />
        {/* Mountain silhouette at bottom */}
        <path d="M4 44l10-8 8 4 12-6 10 8" />
        {/* Small tree accent */}
        <path d="M8 40c0-3 2-4 3-4s3 1 3 4" />
        <path d="M10 40v4" />
    </svg>
);

// Sri Lanka Contact - Sri Lanka island shape with tea leaf
export const LocalContactIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Sri Lanka island silhouette - accurate teardrop shape */}
        <path d="M22 4c2 0 4 1 6 2 3 2 6 4 8 8 2 3 3 7 3 11 0 3-1 6-2 9-2 4-4 7-7 9-2 2-5 3-7 3-3 0-5-1-7-3-2-3-4-6-5-10-1-3-1-7 0-11 1-4 3-8 6-11 2-3 4-5 5-7z" />
        {/* Internal road/path lines */}
        <path d="M18 16c2 4 1 8 2 12" />
        <path d="M24 12c0 4 2 8 0 14" />
        <path d="M28 18c-1 3-2 6-4 8" />
        {/* City/location dots */}
        <circle cx="16" cy="34" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="24" cy="22" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="20" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="30" cy="16" r="1" fill="currentColor" stroke="none" />
        <circle cx="28" cy="28" r="1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="24" r="1" fill="currentColor" stroke="none" />
    </svg>
);

// International - Globe with tea leaf (rotated 90 degrees)
export const GlobalIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <g transform="rotate(90 24 24)">
            {/* Globe circle */}
            <circle cx="24" cy="24" r="18" />
            {/* Latitude lines */}
            <ellipse cx="24" cy="24" rx="18" ry="8" />
            <ellipse cx="24" cy="24" rx="18" ry="14" />
            {/* Longitude line */}
            <path d="M24 6v36" />
            {/* Tea leaf accent on globe */}
            <path d="M28 18c4-2 8 0 8 4s-6 6-10 4c0 0 4-2 4-4s-4-2-2-4z" />
            {/* Connection dots suggesting network */}
            <circle cx="14" cy="20" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="32" cy="30" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="18" cy="34" r="1.5" fill="currentColor" stroke="none" />
        </g>
    </svg>
);

// Location Pin - Simplified organic pin for taste locations
export const LocationPinIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Pin shape */}
        <path d="M24 4c-9 0-16 7-16 16 0 12 16 24 16 24s16-12 16-24c0-9-7-16-16-16z" />
        {/* Tea cup inside */}
        <path d="M18 16h12v2c0 4-2 6-6 8-4-2-6-4-6-8v-2z" />
        {/* Steam */}
        <path d="M22 12c0-2 1-3 0-4" />
        <path d="M26 12c0-2 1-3 0-4" />
        {/* Small handle */}
        <path d="M30 18c2 0 3 1 3 3s-1 3-3 3" />
    </svg>
);

// Quote Icon - Tea leaf forming a quote mark
export const QuoteIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* First quote mark as tea leaf curl */}
        <path d="M8 12c6-4 12-2 14 4s-4 12-12 14c0 0 4-6 2-10s-6-6-4-8z" />
        <path d="M12 16c2 4 0 8-2 10" />
        {/* Second quote mark as tea leaf curl */}
        <path d="M28 12c6-4 12-2 14 4s-4 12-12 14c0 0 4-6 2-10s-6-6-4-8z" />
        <path d="M32 16c2 4 0 8-2 10" />
    </svg>
);

// Close Icon - X with organic leaf touches
export const CloseIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* X shape with curved ends */}
        <path d="M12 12c2 2 10 10 12 12 2-2 10-10 12-12" />
        <path d="M12 36c2-2 10-10 12-12 2 2 10 10 12 12" />
        {/* Small leaf accents */}
        <path d="M10 10c-2-2-3-1-2 1s2 2 3 0" />
        <path d="M38 10c2-2 3-1 2 1s-2 2-3 0" />
        <path d="M10 38c-2 2-3 1-2-1s2-2 3 0" />
        <path d="M38 38c2 2 3 1 2-1s-2-2-3 0" />
    </svg>
);

// Chevron Left - Organic arrow with leaf tip
export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Main chevron */}
        <path d="M30 10c-4 4-10 10-14 14 4 4 10 10 14 14" />
        {/* Leaf tip accent */}
        <path d="M14 24c-4-2-6 0-5 3s4 3 5 1" />
    </svg>
);

// Chevron Right - Organic arrow with leaf tip
export const ChevronRightIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Main chevron */}
        <path d="M18 10c4 4 10 10 14 14-4 4-10 10-14 14" />
        {/* Leaf tip accent */}
        <path d="M34 24c4-2 6 0 5 3s-4 3-5 1" />
    </svg>
);

// Organic Certification - Simple leaf in circle
export const OrganicIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Outer circle */}
        <circle cx="24" cy="24" r="20" />
        {/* Simple clear leaf shape */}
        <path d="M24 12c-8 6-10 14-6 22" />
        <path d="M24 12c8 6 10 14 6 22" />
        <path d="M18 34c2-4 4-6 6-8c2 2 4 4 6 8" />
        {/* Central vein */}
        <path d="M24 14v16" />
        {/* Small stem */}
        <path d="M24 30v6" />
    </svg>
);

// Fairtrade Certification - Clear handshake symbol
export const FairtradeIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Outer circle */}
        <circle cx="24" cy="24" r="20" />
        {/* Left arm and hand */}
        <path d="M6 24h10" />
        <path d="M16 24l4-2h6" />
        {/* Right arm and hand */}
        <path d="M42 24h-10" />
        <path d="M32 24l-4 2h-6" />
        {/* Clasped hands in center - interlocking fingers */}
        <path d="M20 22c0-2 2-4 4-4s4 2 4 4" />
        <path d="M20 26c0 2 2 4 4 4s4-2 4-4" />
        {/* Wrist lines */}
        <path d="M16 22v4" />
        <path d="M32 22v4" />
    </svg>
);

// Leaf Accent - Single decorative floating leaf
export const LeafAccentIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Single curved tea leaf */}
        <path d="M8 40c4-10 14-20 28-32 0 0-8 6-16 14s-10 14-12 18z" />
        {/* Leaf vein */}
        <path d="M12 36c6-8 14-16 24-28" />
        {/* Secondary veins */}
        <path d="M16 32c2-4 6-8 10-12" />
        <path d="M20 28c2-2 4-4 6-6" />
    </svg>
);

// Herb Accent - Decorative herb sprig
export const HerbAccentIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Main stem */}
        <path d="M24 44c0-10 1-20 1-30" />
        {/* Leaves on left */}
        <path d="M24 14c-6 1-10 4-10 8s4 4 10 0" />
        <path d="M24 24c-8 2-12 6-10 10s8 2 10-4" />
        <path d="M24 36c-6 2-8 4-6 7" />
        {/* Leaves on right */}
        <path d="M25 10c6 0 8 3 8 6s-4 4-8 0" />
        <path d="M25 20c6 2 10 5 8 9s-6 2-8-4" />
        <path d="M25 32c5 1 7 4 5 7" />
        {/* Top bud */}
        <path d="M24 4c-2 2-2 4 0 6 2-2 2-4 0-6z" />
    </svg>
);

// Gallery All - Four leaves in a circular arrangement
export const GalleryAllIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Four leaves arranged in compass formation */}
        <path d="M24 6c-3 4-4 8-2 12 0 0 2-4 4-6s4-4 4-6c0-2-6 0-6 0z" />
        <path d="M42 24c-4-3-8-4-12-2 0 0 4 2 6 4s4 4 6 4c2 0 0-6 0-6z" />
        <path d="M24 42c3-4 4-8 2-12 0 0-2 4-4 6s-4 4-4 6c0 2 6 0 6 0z" />
        <path d="M6 24c4 3 8 4 12 2 0 0-4-2-6-4s-4-4-6-4c-2 0 0 6 0 6z" />
        {/* Center connecting point */}
        <circle cx="24" cy="24" r="3" />
    </svg>
);

// Gallery Estate - Rolling hills with tea plants
export const GalleryEstateIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Mountain silhouette */}
        <path d="M4 38c4-8 10-16 16-20 6 4 12 12 16 20" />
        {/* Second hill */}
        <path d="M8 38c2-4 6-10 10-12 4 2 8 8 10 12" />
        {/* Tea plants on hills */}
        <path d="M16 28c-2-2-1-4 1-4s3 2 1 4" />
        <path d="M24 22c-2-2-1-4 1-4s3 2 1 4" />
        <path d="M32 28c-2-2-1-4 1-4s3 2 1 4" />
        {/* Sun/mist */}
        <circle cx="38" cy="12" r="4" />
        <path d="M38 4v2" />
        <path d="M44 12h-2" />
        <path d="M42 8l-1 1" />
    </svg>
);

// Gallery Tea - Tea cup with leaves
export const GalleryTeaIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Flowing tea leaves */}
        <path d="M14 8c4-2 8 0 8 4s-6 6-10 4c0 0 4-2 4-4s-4-2-2-4z" />
        <path d="M28 6c3-1 6 1 5 4s-5 4-7 2c0 0 3-1 3-3s-3-2-1-3z" />
        {/* Cup silhouette */}
        <path d="M10 22h24v3c0 8-4 13-12 15-8-2-12-7-12-15v-3z" />
        {/* Cup rim */}
        <path d="M12 24c6-1 12-1 20 0" />
        {/* Handle with leaf detail */}
        <path d="M34 26c4 0 6 2 6 5s-2 5-6 5" />
        <path d="M40 30c2-1 3 0 3 2s-2 2-3 1" />
        {/* Steam wisps */}
        <path d="M18 18c0-2 1-3 0-4" />
        <path d="M26 18c0-2 1-3 0-4" />
    </svg>
);

// Gallery Community - People figures with connecting leaves
export const GalleryCommunityIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Three figures */}
        <circle cx="24" cy="10" r="4" />
        <path d="M24 14v10" />
        <circle cx="12" cy="18" r="3" />
        <path d="M12 21v8" />
        <circle cx="36" cy="18" r="3" />
        <path d="M36 21v8" />
        {/* Connecting vine between figures */}
        <path d="M12 29c4 2 8 3 12 3s8-1 12-3" />
        {/* Leaf accents above figures */}
        <path d="M20 6c-2-2-1-4 1-4s2 2 0 4" />
        <path d="M28 6c2-2 1-4-1-4s-2 2 0 4" />
        {/* Ground with plants */}
        <path d="M6 38c4-2 8-1 12 0s8-2 12 0 8-1 12 0" />
        {/* Small plants */}
        <path d="M8 34c1-2 3-2 4 0" />
        <path d="M36 34c1-2 3-2 4 0" />
    </svg>
);

// Gallery Frame - Decorative organic corner frame element
export const GalleryFrameCorner: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Organic corner frame */}
        <path d="M4 44V20c0-8 4-12 12-16" />
        <path d="M44 44H20" />
        {/* Decorative leaf curl at corner */}
        <path d="M16 4c-4 4-8 8-10 14 0 0 4-4 8-6s6-4 6-6c0-2-4-2-4-2z" />
        {/* Vine extending on bottom */}
        <path d="M20 44c2-4 4-4 6-2s4 2 6 0" />
        {/* Leaf accent */}
        <path d="M38 40c2-3 5-3 6-1s-2 4-5 3" />
    </svg>
);

// Gallery Hover Overlay - Leaf pattern for image hover
export const GalleryOverlayIcon: React.FC<IconProps> = ({ className = "w-10 h-10", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Central magnifying glass with leaf */}
        <circle cx="22" cy="22" r="12" />
        <path d="M30 30l10 10" />
        {/* Tea leaf inside */}
        <path d="M18 18c2-3 5-3 7-1s1 5-2 6-5-1-5-3z" />
        <path d="M22 20c2-2 4-1 5 1" />
    </svg>
);

// Organic Line - A wavy, hand-drawn horizontal separator
export const OrganicLine: React.FC<IconProps> = ({ className = "w-full h-2", strokeWidth = 0.5 }) => (
    <svg viewBox="0 0 120 2" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor">
        <path
            d="M0 1 C 20 0.5, 40 1.5, 60 1 S 100 0.5, 120 1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
    </svg>
);

// Organic Vertical Line - A wavy, hand-drawn vertical separator
export const OrganicVerticalLine: React.FC<IconProps> = ({ className = "w-2 h-full", strokeWidth = 0.5 }) => (
    <svg viewBox="0 0 2 120" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor">
        <path
            d="M1 0 C 0.5 20, 1.5 40, 1 60 S 0.5 100, 1 120"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
    </svg>
);

// Healing Bud Icon - Simple elegant tea bud for separators
export const HealingBudIcon: React.FC<IconProps> = ({ className = "w-4 h-4", strokeWidth = 1 }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Central bud shape - Stretched vertically */}
        <path d="M12 22c-1.5-6-1.5-14 0-19 1.5 5 1.5 13 0 19z" />
        {/* Unfurling side leaf */}
        <path d="M12 11c4-1 6 3 5 7-3 0-5-4-5-7z" />
        {/* Supporting side leaf */}
        <path d="M12 16c-3 0-5-3-4-6 3-1 4 6 4 6z" />
    </svg>
);

// Journey: Estate Founded (1920) - Classic tea factory blueprint with leaf
export const HistoryIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1 }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8 38V16l12-8 12 8v22H8z" />
        <path d="M20 38V24h8v14" />
        <path d="M32 16l8 4v18h-8" />
        <path d="M14 6c4 0 6 4 4 8s-8 4-10 2 2-10 6-10z" />
    </svg>
);

// Journey: Organic Transition (1985) - Sprouting leaf circle
export const OrganicGrowthIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1 }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="24" cy="24" r="20" strokeDasharray="4 4" />
        <path d="M24 34V14" />
        <path d="M24 14c-6 0-10 4-10 10s4 6 10 2" />
        <path d="M24 18c6-2 10 2 10 6s-4 10-10 6" />
    </svg>
);

// Journey: Fairtrade Certified (2005) - Shield with hand-leaf
export const MilestoneFairtradeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1 }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M24 4C14 8 8 16 8 28c0 10 10 16 16 16s16-6 16-16c0-12-6-20-16-24z" />
        <path d="M18 24c2 4 4 6 6 6s4-2 6-6" />
        <path d="M24 14c-4 2-6 6-4 10s6 2 4-2" />
    </svg>
);

// Journey: Forest Regeneration (2015) - Full canopy tree
export const NatureRestorationIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1 }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M24 42V28" />
        <path d="M16 28h16c6 0 10-4 10-10S38 8 32 8c-2-4-8-6-14-4-8 2-12 8-10 14-2 2-2 10 8 10z" />
        <path d="M20 18c2-2 4-2 6 0" />
        <path d="M14 22c2-1 4 0 5 1" />
    </svg>
);

// Journey: Healing Retreat (2023) - Lotus bud sanctuary
export const HealingSanctuaryIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1 }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M24 44c-12 0-20-8-20-20S12 4 24 4s20 8 20 20-8 20-20 20z" opacity="0.2" />
        <path d="M24 36c-4-8-4-16 0-24 4 8 4 16 0 24z" />
        <path d="M24 24c6-2 10 2 8 8-4 0-8-4-8-8z" />
        <path d="M24 24c-6-2-10 2-8 8 4 0 8-4 8-8z" />
    </svg>
);

export default {
    RestoreNatureIcon,
    CommunityIcon,
    HarvestIcon,
    ProductDevIcon,
    ProgrammeIcon,
    SupportIcon,
    TourIcon,
    StayIcon,
    NearbyIcon,
    LocalContactIcon,
    GlobalIcon,
    LocationPinIcon,
    QuoteIcon,
    CloseIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    OrganicIcon,
    FairtradeIcon,
    LeafAccentIcon,
    HerbAccentIcon,
    GalleryAllIcon,
    GalleryEstateIcon,
    GalleryTeaIcon,
    GalleryCommunityIcon,
    GalleryFrameCorner,
    GalleryOverlayIcon,
    OrganicLine,
    OrganicVerticalLine,
    HealingBudIcon,
    HistoryIcon,
    OrganicGrowthIcon,
    MilestoneFairtradeIcon,
    NatureRestorationIcon,
    HealingSanctuaryIcon
};
