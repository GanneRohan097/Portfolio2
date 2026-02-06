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
  }, []);

  return (
    <div style={styles.container}>
      <div className="bg-blue-500 h-[100%] rounded-r"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "6px",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 9999,
  },
};
