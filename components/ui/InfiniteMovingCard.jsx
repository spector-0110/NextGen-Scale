import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  direction = "left",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = useRef(null);

  const animationDuration =
    speed === "fast" ? 20 : speed === "normal" ? 40 : 80; // in seconds

  const animationName = direction === "right" ? "marqueeRight" : "marqueeLeft";

  // Inject keyframes into document
  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    const keyframesLeft = `
      @keyframes marqueeLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    const keyframesRight = `
      @keyframes marqueeRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;

    // Prevent duplicates
    if (![...styleSheet.cssRules].some(rule => rule.name === "marqueeLeft")) {
      styleSheet.insertRule(keyframesLeft, styleSheet.cssRules.length);
    }
    if (![...styleSheet.cssRules].some(rule => rule.name === "marqueeRight")) {
      styleSheet.insertRule(keyframesRight, styleSheet.cssRules.length);
    }
  }, []);

  const animationStyle = {
    display: "flex",
    width: "max-content",
    gap: "3rem",
    animation: `${animationName} ${animationDuration}s linear infinite`,
    willChange: "transform",
    ...(pauseOnHover
      ? {
          pointerEvents: "auto",
        }
      : {})
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          ...animationStyle,
        }}
        // onMouseEnter={(e) =>
        //   pauseOnHover && (e.currentTarget.style.animationPlayState = "paused")
        // }
        onMouseLeave={(e) =>
          pauseOnHover && (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...items, ...items].map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            style={{
              height: "3rem",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};