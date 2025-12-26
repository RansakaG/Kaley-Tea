import { Link } from 'react-router-dom';

interface LeafButtonProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark';
}

/**
 * LeafButton - A creative button with hand-drawn leaf bracket decorations
 * Matches the Kaley Tea organic/artisan aesthetic
 */
export default function LeafButton({
    to,
    children,
    className = '',
    variant = 'light'
}: LeafButtonProps) {
    const textColor = variant === 'light' ? 'text-white' : 'text-[#1a4d2e]';
    const bracketColor = variant === 'light' ? 'text-white/60' : 'text-[#1a4d2e]/50';
    const hoverColor = 'group-hover:text-[#d4b896]';

    return (
        <Link
            to={to}
            className={`group relative flex items-center gap-2 px-2 py-2 ${textColor} font-light tracking-[0.2em] text-[11px] sm:text-xs uppercase ${className}`}
        >
            {/* Left decorative leaf bracket */}
            <svg
                className={`w-5 h-8 ${bracketColor} ${hoverColor} transition-all duration-500 group-hover:-translate-x-1`}
                viewBox="0 0 20 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
            >
                <path d="M16 4c-6 2-10 8-10 12s4 10 10 12" />
                <path d="M12 10c-2 2-3 4-3 6s1 4 3 6" />
            </svg>

            <span className="relative">
                {children}
                {/* Animated underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4b896] group-hover:w-full transition-all duration-500"></span>
            </span>

            {/* Right decorative leaf bracket */}
            <svg
                className={`w-5 h-8 ${bracketColor} ${hoverColor} transition-all duration-500 group-hover:translate-x-1`}
                viewBox="0 0 20 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
            >
                <path d="M4 4c6 2 10 8 10 12s-4 10-10 12" />
                <path d="M8 10c2 2 3 4 3 6s-1 4-3 6" />
            </svg>
        </Link>
    );
}
