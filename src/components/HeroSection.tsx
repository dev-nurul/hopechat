import { useEffect, useState } from "react";
import Phone from "./Phone";
import features from "../data/features";

const brand = "#FF4E8C";

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#0D0D14] text-white px-[5%] pt-32 pb-20 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF4E8C]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FF4E8C]/25 bg-[#FF4E8C]/10 text-sm font-medium text-[#FF4E8C] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4E8C]" />
            The messenger that feels human
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
            Chat, share stories,
            <br />
            <span style={{ color: brand }}>stay close</span> always.
          </h1>

          <p className="text-[#A0A0B8] text-lg leading-8 max-w-2xl mx-auto mt-8">
            Hopenity makes conversations feel warm, expressive, and naturally
            connected — messaging, stories, calls, and private chats in one
            beautiful experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              className="px-8 py-4 rounded-full font-semibold shadow-lg text-white"
              style={{ background: brand, boxShadow: "0 4px 30px rgba(255,78,140,0.4)" }}
            >
              Get Started Free
            </button>

            <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 text-[#A0A0B8] hover:border-[#FF4E8C]/40 hover:text-white transition">
              Watch Demo →
            </button>
          </div>
        </div>

        {/* phone showcase */}
        <div className="mt-24 flex flex-wrap justify-center items-end gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="cursor-pointer"
            >
              <Phone
                src={item.screen}
                label={item.label}
                active={active === index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
