import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <>
      {/* header section start */}
      <header className="site-header z-50 backdrop-blur-2xl backdrop-saturate-150 bg-(--base-black-50,#00000080) transition-colors duration-300 sticky top-0 left-0 w-full sm:sticky sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:w-[393px] md:max-w-[1440px] md:fixed md:top-0 md:w-full md:left-1/2 md:-translate-x-1/2">
        {/* Tampilan default (Mobile first) */}
        <div className="w-[393px] h-16 grid grid-cols-[42.3px_1fr_auto_auto] grid-rows-1 items-center mx-auto gap-2 px-4 md:hidden">
          <div className="w-[26.3px] h-[28.85px]">
            <img src="/Assets/Header/logo-symbol.svg" alt="Logo" />
          </div>
          <div className="font-outfit font-semibold text-[21.33px]/[32px] tracking-[0%]">
            AI-NovaNX
          </div>
          <ThemeToggle
            id="mobile-theme-toggle"
            size="sm"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252B37]/70 bg-transparent transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:border-[#DEDCDC] in-[.theme-light]:hover:bg-black/5"
          />
          <a href="#menu" className="justify-self-end" aria-label="Open menu">
            <img
              src="/Assets/Header/menu-01.svg"
              alt=""
              className="theme-icon"
            />
          </a>
        </div>

        {/* Desktop/Tablet layout (md and up) */}
        <div className="hidden md:grid mx-auto h-[84px] w-[1440px] grid-cols-[auto_auto_1fr_197px] items-center justify self-center px-[140px]">
          <div className="w-[29.59px] h-[32.46px]">
            <img src="/Assets/Header/logo-symbol.svg" alt="Logo" />
          </div>
          <div className="ml-4 font-outfit font-semibold text-[24px]/[36px] tracking-[0]">
            AI-NovaNX
          </div>
          <nav className="nav-container flex items-center justify-self-center gap-6 text-[16px]/[30px]">
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#about"
            >
              About
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#services"
            >
              Service
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="font-['Quicksand'] font-semibold tracking-[0]"
              href="#faq"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center justify-end gap-3">
            <a
              href="#lets-talk"
              className="flex  w-[197px] h-11 items-center justify-center rounded-full bg-[#FF623E] px-6 font-['Quicksand'] font-bold text-[14px]/[28px] tracking-[0] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
              aria-label="Jump to Let’s Talk section"
            >
              Let’s Talk
            </a>
            <ThemeToggle
              id="header-theme-toggle"
              size="md"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]/70 bg-transparent transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:border-[#DEDCDC] in-[.theme-light]:hover:bg-black/5"
            />
          </div>
        </div>
      </header>
      {/* Spacer hanya muncul saat sm fixed untuk mendorong konten ke bawah */}
      <div id="header-spacer" className="block h-16 md:h-[84px]"></div>
      {/* header section end */}
    </>
  );
}
