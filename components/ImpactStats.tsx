"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  prefix?: string;
  color: string;
  icon: string;
  description: string;
  change: string;
}

const STATS: Stat[] = [
  {
    value: 12450,
    label: "Food Rescued",
    suffix: "kg",
    color: "var(--primary)",
    icon: "fa-solid fa-leaf",
    description: "Diverted from landfills",
    change: "+124 kg today",
  },
  {
    value: 49800,
    label: "Meals Provided",
    suffix: "",
    color: "var(--secondary)",
    icon: "fa-solid fa-bowl-rice",
    description: "Served to those in need",
    change: "+432 this week",
  },
  {
    value: 18.5,
    label: "CO₂ Reduced",
    suffix: "t",
    color: "var(--blue)",
    icon: "fa-solid fa-wind",
    description: "Carbon emissions avoided",
    change: "+0.2t this month",
  },
  {
    value: 87,
    label: "Partner Network",
    suffix: "+",
    color: "#c084fc",
    icon: "fa-solid fa-handshake",
    description: "Restaurants & NGOs united",
    change: "+3 new partners",
  },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, elementRef };
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { count, elementRef } = useCountUp(stat.value, 2000 + index * 200);
  const isDecimal = stat.value % 1 !== 0;
  const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <div
      ref={elementRef}
      className="stat-card"
      style={{
        animationDelay: `${index * 0.1}s`,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "2.5rem 2rem",
        position: "relative",
        overflow: "hidden",
        transition: "var(--transition)",
      }}
    >
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px", right: "-40px",
          width: "120px", height: "120px",
          borderRadius: "50%",
          background: stat.color,
          opacity: 0.04,
          filter: "blur(30px)",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "48px", height: "48px",
          borderRadius: "12px",
          background: `${stat.color}18`,
          border: `1px solid ${stat.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <i className={stat.icon} style={{ color: stat.color, fontSize: "1.1rem" }} />
      </div>

      {/* Value */}
      <div
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          fontWeight: 800,
          color: stat.color,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "0.5rem",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {stat.prefix}{displayValue}{stat.suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--text-main)",
          marginBottom: "0.4rem",
        }}
      >
        {stat.label}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          marginBottom: "1rem",
        }}
      >
        {stat.description}
      </div>

      {/* Live change badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "3px 10px",
          borderRadius: "99px",
          background: `${stat.color}15`,
          border: `1px solid ${stat.color}25`,
          fontSize: "0.72rem",
          fontWeight: 600,
          color: stat.color,
        }}
      >
        <span
          style={{
            width: "5px", height: "5px",
            borderRadius: "50%",
            background: stat.color,
            display: "inline-block",
            animation: "pulse-ring 1.5s infinite",
          }}
        />
        {stat.change}
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const [liveStats, setLiveStats] = useState(STATS);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) =>
        prev.map((s) => ({
          ...s,
          value:
            s.label === "Food Rescued"
              ? +(s.value + Math.random() * 0.5).toFixed(1)
              : s.label === "Meals Provided"
              ? s.value + Math.floor(Math.random() * 2)
              : s.label === "CO₂ Reduced"
              ? +(s.value + 0.01).toFixed(2)
              : s.value,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {liveStats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  );
}
