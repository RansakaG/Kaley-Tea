import { Link } from 'react-router-dom';
import { LeafAccentIcon, OrganicLine } from '../icons/KaleyIcons';
import logoMain from '../../assets/images/logo-main.png';

export default function Footer() {
    return (
        <>
            {/* Footer Divider */}
            <div className="flex items-center justify-center gap-6 py-12">
                <OrganicLine className="w-32 text-[#1a4d2e]/20" />
                <LeafAccentIcon className="w-6 h-6 text-[#1a4d2e]/20 transform rotate-45" strokeWidth={0.5} />
                <OrganicLine className="w-32 text-[#1a4d2e]/20" />
            </div>

            <footer className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <Link to="/" className="hover:opacity-70 transition-opacity duration-500">
                            <img
                                src={logoMain}
                                alt="Kaley Tea"
                                className="h-10 w-auto brightness-0"
                            />
                        </Link>

                        <div className="flex items-center gap-10 font-light text-sm tracking-wider text-[#5a6b62]">
                            <Link to="/" className="hover:text-[#1a4d2e] transition-colors duration-500">
                                Home
                            </Link>
                            <Link to="/visit" className="hover:text-[#1a4d2e] transition-colors duration-500">
                                Visit
                            </Link>
                            <Link to="/buy" className="hover:text-[#1a4d2e] transition-colors duration-500">
                                Shop
                            </Link>
                            <Link to="/story" className="hover:text-[#1a4d2e] transition-colors duration-500">
                                Story
                            </Link>
                        </div>

                        <div className="text-sm font-light text-[#5a6b62] tracking-wide">
                            Sri Lanka · Organic · Healing
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
