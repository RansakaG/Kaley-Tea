import { Link } from 'react-router-dom';

interface LeafButtonProps {
    to?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark' | 'ghost';
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

/**
 * LeafButton - A creative button with hand-drawn leaf bracket decorations
 * Matches the Kaley Tea organic/artisan aesthetic
 * Can be used as a Link (with 'to' prop) or as a button (with 'onClick' prop)
 */
export default function LeafButton({
    to,
    children,
    className = '',
    variant = 'light',
    onClick,
    disabled = false,
    type = 'button'
}: LeafButtonProps) {
    const textColor = variant === 'light' ? 'text-white' : variant === 'ghost' ? 'text-[#5a6b62]' : 'text-[#1a4d2e]';
    const bracketColor = variant === 'light' ? 'text-white/60' : variant === 'ghost' ? 'text-[#5a6b62]/50' : 'text-[#1a4d2e]/50';
    const hoverColor = variant === 'ghost' ? 'group-hover:text-[#1a4d2e]' : 'group-hover:text-[#d4b896]';
    const disabledClass = disabled ? 'opacity-40 cursor-not-allowed' : '';

    const content = (
        <>
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
        </>
    );

    const sharedClasses = `group relative flex items-center justify-center gap-2 px-2 py-2 ${textColor} font-light tracking-[0.2em] text-[11px] sm:text-xs uppercase ${disabledClass} ${className}`;

    // Handle hash links for smooth scrolling
    const handleClick = (e: React.MouseEvent) => {
        if (to && to.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(to);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (onClick) onClick();
    };

    // If 'to' is provided, render as Link or anchor
    if (to) {
        // For same-page hash links, use anchor tag for smooth scroll
        if (to.startsWith('#')) {
            return (
                <a href={to} onClick={handleClick} className={sharedClasses}>
                    {content}
                </a>
            );
        }
        // For cross-page hash links (e.g., /story#gallery), use Link with scroll handling
        if (to.includes('#')) {
            const hash = to.split('#')[1];
            return (
                <Link
                    to={to}
                    className={sharedClasses}
                    onClick={() => {
                        setTimeout(() => {
                            const element = document.getElementById(hash);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                >
                    {content}
                </Link>
            );
        }
        return (
            <Link to={to} className={sharedClasses}>
                {content}
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={sharedClasses}
        >
            {content}
        </button>
    );
}
