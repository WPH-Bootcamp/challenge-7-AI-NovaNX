import { useEffect, useState } from "react";

export default function MenuOverlay() {
  const [open, setOpen] = useState<boolean>(
    typeof window !== "undefined" && window.location.hash === "#menu"
  );

  useEffect(() => {
    const onHash = () => {
      setOpen(window.location.hash === "#menu");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--bg)] text-[var(--text)] font-['Quicksand'] antialiased md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <header className="z-50 bg-transparent">
        <div className="w-[393px] h-16 grid grid-cols-[42.3px_145px_165.7px_40px] grid-rows-1 mx-auto">
          <a
            href="#"
            aria-label="Back to home"
            className="w-[26.3px] h-[28.85px] ml-4 mt-[17.57px]"
          >
            <img src="/Assets/Header/logo-symbol.svg" alt="" />
          </a>
          <div className="ml-4 self-center font-outfit font-semibold text-[21.33px]/[32px] tracking-[0%]">
            AI-NovaNX
          </div>
          <a
            href="#"
            className="self-center col-start-4"
            aria-label="Close menu"
          >
            <img
              src="/Assets/Header/x-close.svg"
              alt=""
              className="theme-icon"
            />
          </a>
        </div>
      </header>

      {/* Spacer to push content below header */}
      <div className="h-16" />

      <main>
        <section>
          <div className="w-[393px] min-h-[calc(100vh-4rem)] grid grid-cols-[16px_361px_16px] py-8 mx-auto">
            <div className="col-start-2">
              <h1 id="menu-title" className="sr-only">
                Menu
              </h1>
              <nav className="mt-6 space-y-4">
                <a
                  href="#about"
                  className="block font-['Quicksand'] text-[14px]/[28px] hover:text-[#FF623E]"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block font-['Quicksand'] text-[14px]/[28px] hover:text-[#FF623E]"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="block font-['Quicksand'] text-[14px]/[28px] hover:text-[#FF623E]"
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="block font-['Quicksand'] text-[14px]/[28px] hover:text-[#FF623E]"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="block font-['Quicksand'] text-[14px]/[28px] hover:text-[#FF623E]"
                >
                  FAQ
                </a>
              </nav>
              <div className="mt-10 space-y-4">
                <a
                  href="#lets-talk"
                  className="inline-flex items-center justify-center w-[361px] h-11 rounded-full bg-[#FF623E] font-bold font-['Quicksand'] text-[14px]/[28px] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
