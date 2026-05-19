import Reveal from "./Reveal";

export function StatsSection() {
  const stats = [
    ["2M+", "Active users"],
    ["98%", "Delivery rate"],
    ["150+", "Countries"],
    ["4.9 ★", "App rating"],
  ];

  return (
    <section className="py-16 md:py-20 px-[5%] bg-[#16161F] border-y border-[#FF4E8C]/10">
      <Reveal>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {stats.map(([number, label]) => (
            <div key={label}>
              <h3
                className="text-3xl md:text-5xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #FF4E8C, #FF8CB8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {number}
              </h3>
              <p className="text-[#6B6B80] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
