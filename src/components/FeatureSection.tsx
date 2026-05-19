import Reveal from "./Reveal";
import features from "../data/features";

export default function FeatureSection() {
  const brand = "#FF4E8C";

  return (
    <section className="py-32 bg-[#0D0D14] relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4E8C]/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span
              className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{
                background: "rgba(255,78,140,0.10)",
                color: brand,
                border: "1px solid rgba(255,78,140,0.20)",
              }}
            >
              Powerful Features
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Everything You Need <br />
              In One Beautiful Experience
            </h2>

            <p className="text-[#A0A0B8] text-lg leading-8">
              Designed for speed, simplicity, and modern user engagement —
              crafted to make every interaction feel premium.
            </p>
          </div>
        </Reveal>

        {/* feature cards */}
        <div className="space-y-32">
          {features.map((item, index) => (
            <Reveal key={item.label}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* phone mockup */}
                <div className="relative flex justify-center">
                  <div className="absolute w-[400px] h-[400px] bg-[#FF4E8C]/8 blur-[120px] rounded-full" />

                  <div className="relative p-4 rounded-[40px] border border-white/8 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <div className="w-[290px] h-[590px] rounded-[34px] overflow-hidden border border-white/8 bg-[#16161F]">
                      <img
                        src={item.screen}
                        alt={item.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* content */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-[#FF4E8C]/10 border border-[#FF4E8C]/20 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>

                    <span
                      className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{
                        background: "rgba(255,78,140,0.10)",
                        color: brand,
                        border: "1px solid rgba(255,78,140,0.20)",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                    {item.title}
                  </h3>

                  <p className="text-[#A0A0B8] text-lg leading-8 mb-10 max-w-xl">
                    {item.desc}
                  </p>

                  {/* benefits */}
                  <div className="grid gap-4">
                    {[
                      "Ultra-fast performance",
                      "Premium modern UI",
                      "Built for scale & growth",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03]"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#FF4E8C]/10 border border-[#FF4E8C]/20 flex items-center justify-center text-[#FF4E8C] text-sm">
                          ✓
                        </div>

                        <span className="text-[#D0D0E0] font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
