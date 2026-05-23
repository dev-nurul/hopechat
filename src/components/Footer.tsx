const brand = "#FF4E8C";

export function Footer() {
  return (
    <footer className="px-[5%] py-8 md:py-10 bg-[#16161F] text-[#6B6B80] flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/6 w-full">
      <h2 className="text-2xl font-bold text-white">
        Hope<span style={{ color: brand }}>nity</span>
      </h2>

      <p className="text-sm text-[#6B6B80] order-2 md:order-1">
        © 2026 Hopenity. All rights reserved.
      </p>

      <div className="flex gap-6 text-sm text-[#6B6B80] order-1 md:order-2 flex-wrap justify-center">
        <a href="/privacy-policy/" className="hover:text-[#FF4E8C] transition">
          Privacy
        </a>
        <a href="/privacy-policy/#overview" className="hover:text-[#FF4E8C] transition">
          Terms
        </a>
        <a href="/request-delete-account/" className="hover:text-[#FF4E8C] transition">
          Delete Account
        </a>
        <a href="/privacy-policy/#contact" className="hover:text-[#FF4E8C] transition">
          Support
        </a>
      </div>
    </footer>
  );
}
