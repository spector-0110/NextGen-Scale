'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { label: 'Brands Scaled', value: 500, suffix: '+' },
    { label: 'Campaigns Launched', value: 1200, suffix: '+' },
    { label: 'Clients Served', value: 300, suffix: '+' },
    { label: 'Avg ROI Increase', value: 4, suffix: 'x' },
  ];

export default function QuickStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1.0 });

  return (
    <section
      ref={ref}
      className="relative py-20"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* <div className="absolute inset-0 z-0 blur-3xl bg-gradient-to-r from-yellow-400 via-[var(--accent)] to-yellow-200 opacity-10" /> */}

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-lg dark:bg-[#0b0c10]/60"
          >
            <h3 className="text-5xl font-extrabold text-[var(--accent)]">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                '0' + stat.suffix
              )}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}