import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[9999]">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] relative rounded-r-full"
        style={{
          width: `${progress}%`,
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-70"></div>
      </div>
    </div>
  );
}

export default ScrollProgressBar;
