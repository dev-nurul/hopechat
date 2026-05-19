const brandColor = "#FF4E8C";
import Reveal from "./Reveal";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-[5%] text-center bg-[#0D0D14] border-t border-[#FF4E8C]/12"
      style={{ background: "linear-gradient(135deg, rgba(255,78,140,0.07) 0%, transparent 60%), #0D0D14" }}>
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Ready to join the conversation?
        </h2>

        <p className="text-[#A0A0B8] mb-10 max-w-xl mx-auto">
          Download Hopenity free on any device. No ads, no subscriptions.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 text-[#A0A0B8] hover:border-[#FF4E8C]/40 hover:text-white transition">
            🍎 App Store
          </button>

          <button className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 text-[#A0A0B8] hover:border-[#FF4E8C]/40 hover:text-white transition">
            ▶ Google Play
          </button>

          <button
            className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white shadow-md hover:opacity-90 transition"
            style={{ background: brandColor, boxShadow: "0 4px 30px rgba(255,78,140,0.4)" }}
          >
            Use on Web →
          </button>
        </div>
      </Reveal>
    </section>
  );
}
