
import { useEffect, useState } from "react";
import banner from './baatdekha.png'

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let headerStyle = scrolled ? "bg-white text-amber-600 shadow-2xl" : "text-white"


  return (
    <div className={`flex flex-col h-fit`}>
      <header className={`fixed inset-0 p-6 max-w-full h-10 inline-flex items-center gap-5 font-carter-one ${headerStyle}`}>
        <button
          aria-label="Toggle menu">
          Menu
        </button>
        <span>Your Smart Ways</span>
      </header>
      <div className="image-cover">
        <img src={banner} alt="baatdekha.com" />
      </div>
    </div>
  );
}

export default Header;
