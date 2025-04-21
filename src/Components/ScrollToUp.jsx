import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react'; // optional: install lucide-react icons or use any icon

const ScrollToUp = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 bg-custBlack text-white rounded-full shadow-lg hover:bg-custBlueDark transition-all duration-300"
      >
        <ChevronUp size={20} />
      </button>
    )
  );
};

export default ScrollToUp;
