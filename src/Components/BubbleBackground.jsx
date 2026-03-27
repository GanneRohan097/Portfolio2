import React, { useEffect, useState } from "react";

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate random bubbles
    const bubbleCount = 40;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => {
      const size = Math.random() * 10 + 1; // Size between 1px and 5px (like stars/small bubbles)
      const left = Math.random() * 100; // Position 0% to 100%
      const animationDuration = Math.random() * 20 + 10; // 10s to 30s
      const animationDelay = Math.random() * 10; // 0s to 10s delay
      const maxOpacity = Math.random() * 0.5 + 0.1 // Opacity between 0.1 and 0.6

      return {
        id: i,
        size,
        left,
        animationDuration,
        animationDelay,
        maxOpacity
      };
    });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white animate-float-up"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            bottom: "-10px",
            '--max-opacity': bubble.maxOpacity,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
