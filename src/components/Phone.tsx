type PhoneProps = {
  src: string;
  label: string;
  active: boolean;
};

const brand = "#FF4E8C";

export default function Phone({ src, label, active }: PhoneProps) {
  return (
    <div
      className={`w-[180px] md:w-[220px] transition-all duration-500 ${
        active ? "scale-105 -translate-y-2 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      <div
        className="relative h-[380px] md:h-[460px] rounded-[36px] overflow-hidden bg-[#16161F] shadow-xl"
        style={{
          border: active
            ? `2px solid ${brand}`
            : "2px solid rgba(255,255,255,0.08)",
          boxShadow: active
            ? `0 20px 60px rgba(255,78,140,0.25)`
            : "0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover object-top"
        />

        {active && (
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
            style={{ background: brand }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
