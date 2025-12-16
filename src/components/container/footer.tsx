import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Mobile Footer */}
      <div className="container w-[393px] h-[544px] mx-auto flex flex-col mt-auto md:hidden">
        <div className="w-[361px] h-[496px] flex flex-col mx-auto mt-6 bg-[#0A0D12] border border-[#181D27] rounded-[24px]">
          <div className="w-[150px] h-[32px] grid grid-cols-[auto_auto] grid-rows-[32px] gap-[8.48px] ml-4 mt-5">
            <img src="/Assets/Header/logo-symbol.svg" alt="Company Logo" />
            <p className="font-outfit font-semibold text-[21.33px]/[32px] tracking-[0em]">
              AI-NovaNX
            </p>
          </div>
          <div className="w-auto h-[76px] flex">
            <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[28px]/[38px] tracking-[-0.02em] mx-4 mt-6">
              LET'S DISCUSS YOUR IDEAS
            </p>
          </div>
          <div className="w-[321px] h-0 bg-[#252B37] border border-[#252B37] mx-auto mt-10" />

          <div className="flex flex-col w-[81px] h-[212px] mx-4 mt-6 justify-evenly font-quicksand text-[#FDFDFD] font-medium text-left text-[14px]/[28px] tracking-[0em]">
            <a href="#about">About</a>
            <a href="#services">Service</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="w-[208px] h-10 grid grid-cols-[repeat(4,40px)] gap-4 ml-4 mt-7">
            <div className="w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center">
              <img
                src="/Assets/Vector.svg"
                alt="Facebook"
                className="h-4 w-auto block in-[.theme-light]:hidden"
              />
              <img
                src="/Assets/Light-Mode/Vector.svg"
                alt="Facebook (Light)"
                className="h-4 w-auto hidden in-[.theme-light]:block"
              />
            </div>
            <div className="w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center">
              <img
                src="/Assets/Vector-1.svg"
                alt="Instagram"
                className="h-4 w-auto block in-[.theme-light]:hidden"
              />
              <img
                src="/Assets/Light-Mode/Vector1.svg"
                alt="Instagram (Light)"
                className="h-4 w-auto hidden in-[.theme-light]:block"
              />
            </div>
            <div className="w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center">
              <img
                src="/Assets/Vector-2.svg"
                alt="LinkedIn"
                className="h-4 w-auto block in-[.theme-light]:hidden"
              />
              <img
                src="/Assets/Light-Mode/Vector2.svg"
                alt="LinkedIn (Light)"
                className="h-4 w-auto hidden in-[.theme-light]:block"
              />
            </div>
            <div className="w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center">
              <img
                src="/Assets/Vector-3.svg"
                alt="Tiktok"
                className="h-4 w-auto block in-[.theme-light]:hidden"
              />
              <img
                src="/Assets/Light-Mode/Vector3.svg"
                alt="Tiktok (Light)"
                className="h-4 w-auto hidden in-[.theme-light]:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:flex">
        <div className="mx-auto w-[1160px] h-[328px] rounded-[32px] border border-[#181D27] bg-[#0A0D12] px-10 py-10 text-[#FDFDFD] flex-col content">
          <div className="w-[1080px] h-[88px] flex justify-between items-start">
            <div className="flex order-2">
              <img
                src="/Assets/Header/logo-symbol.svg"
                alt="Company Logo"
                className="h-10 w-auto"
              />
              <p className="font-outfit font-semibold text-[24px]/[36px] tracking-[0em]">
                AI-NovaNX
              </p>
            </div>

            <div className="w-[281px] h-auto">
              <p className="font-['Quicksand'] font-bold text-[36px]/[44px] tracking-[-0.02em] uppercase order-1">
                LET'S DISCUSS YOUR IDEAS
              </p>
            </div>
          </div>
          <div className="w-[1080px] h-[1px] bg-[#252B37] mt-15" />
          <div className="w-[1080px] h-10 flex flex-row justify-between items-center mt-15">
            <nav className="flex flex-row w-[447px] h-9 justify-around text-[16px]/[30px] tracking-[0em] font-['Quicksand'] font-medium">
              <a
                href="#about"
                className="transition-colors hover:text-[#FF623E]"
              >
                About
              </a>
              <a
                href="#services"
                className="transition-colors hover:text-[#FF623E]"
              >
                Service
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-[#FF623E]"
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="transition-colors hover:text-[#FF623E]"
              >
                Testimonials
              </a>
              <a href="#faq" className="transition-colors hover:text-[#FF623E]">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]">
                <img
                  src="/Assets/Vector.svg"
                  alt="Facebook"
                  className="h-5 w-auto block in-[.theme-light]:hidden"
                />
                <img
                  src="/Assets/Light-Mode/Vector.svg"
                  alt="Facebook (Light)"
                  className="h-10 w-auto hidden in-[.theme-light]:block"
                />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]">
                <img
                  src="/Assets/Vector-1.svg"
                  alt="Instagram"
                  className="h-5 w-auto block in-[.theme-light]:hidden"
                />
                <img
                  src="/Assets/Light-Mode/Vector1.svg"
                  alt="Instagram (Light)"
                  className="h-10 w-auto hidden in-[.theme-light]:block"
                />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]">
                <img
                  src="/Assets/Vector-2.svg"
                  alt="LinkedIn"
                  className="h-5 w-auto block in-[.theme-light]:hidden"
                />
                <img
                  src="/Assets/Light-Mode/Vector2.svg"
                  alt="LinkedIn (Light)"
                  className="h-10 w-auto hidden in-[.theme-light]:block"
                />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252B37]">
                <img
                  src="/Assets/Vector-3.svg"
                  alt="Tiktok"
                  className="h-5 w-auto block in-[.theme-light]:hidden"
                />
                <img
                  src="/Assets/Light-Mode/Vector3.svg"
                  alt="Tiktok (Light)"
                  className="h-10 w-auto hidden in-[.theme-light]:block"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
