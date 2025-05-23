"use client";
import { useState, useRef ,useEffect} from "react";
import { motion } from "framer-motion";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

export default function Hero({ children }) {
  const [muted, setMute] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const toggleMute = () => setMute((prev) => !prev);

  return (
    
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center bg-background  dark:bg-background-dark ">
      {/* Decorative lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-[var(--muted)]/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-[var(--muted)]/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-[var(--muted)]/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-[var(--foreground)] md:text-4xl lg:text-7xl">
          {"Transform Your Digital Presence With Expert Marketing".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-[var(--muted)]"
        >
          Our digital marketing strategies drive growth, increase conversions, and maximize your ROI. Let our team of
          experts take your online presence to the next level.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* CTA Buttons */}
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="relative z-10 mt-20 rounded-3xl border border-[var(--muted)] bg-[var(--background)] p-4 shadow-md"
      >
        <div className="relative w-full overflow-hidden rounded-xl border border-[var(--muted)]">
          <video
            ref={videoRef}
            src="/heroVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/9] h-auto w-full object-cover"
            height={1000}
            width={1000}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 flex items-center justify-center rounded-full bg-white/80 p-2 text-black backdrop-blur hover:bg-white dark:bg-black/60 dark:text-white dark:hover:bg-black transition"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              <SpeakerXMarkIcon className="h-6 w-6" />
            ) : (
              <SpeakerWaveIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

        {children}
      </div>
    </div>
  );
}