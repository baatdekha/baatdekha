import { useEffect, useState } from "react";
import banner from "./baatdekha.png";
import { LuMenu } from "react-icons/lu";
import { Menu } from "./Menu/Menu";
import { MENU_ITEMS } from "./Menu/menuData";
import { FiX } from "react-icons/fi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let headerScrolledStyle =
    scrolled || isMenuOpen ? "bg-white text-amber-600 shadow-lg" : "text-white";

  return (
    <>
      <div className={`flex flex-col h-fit`}>
        <header
          className={`fixed inset-0 py-6 px-4 max-w-full h-12 inline-flex items-center gap-5 z-100 font-carter-one transition-all duration-300 ${headerScrolledStyle}`}
        >
          <button aria-label="Toggle menu" onClick={() => setIsMenuOpen(true)}>
            {isMenuOpen ? <FiX size={30} /> : <LuMenu size={30} />}
          </button>
          <span>Your Smart Ways</span>
        </header>
        <div className="image-cover">
          <img src={banner} alt="baatdekha.com" />
        </div>
      </div>
      <Menu
        isOpen={isMenuOpen}
        items={MENU_ITEMS}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Header;
