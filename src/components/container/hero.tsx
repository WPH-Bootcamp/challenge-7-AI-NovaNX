export default function Hero() {
  return (
    <section id="about" className="scroll-mt-16">
      {/* Mobile layout (default) */}
      <div className="md:hidden">
        <div className="w-[393px] h-[88px] mt-[61px] grid grid-cols-[16px_361px_16px] grid-rows-[88px]">
          <div className="col-start-2">
            <h1 className="font-['Quicksand'] font-bold text-[36px]/[44px] tracking-[-0.02em]">
              Your Tech Partner for
              <br />
              <span className="text-[#FF6C37]">Smarter Growth</span>
            </h1>
          </div>
        </div>
        <div className="w-[393px] h-[60px] mt-2 grid grid-cols-[16px_361px_16px] grid-rows-[60px]">
          <div className="col-start-2 self-center">
            <p className="font-semibold text-[16px]/[30px] tracking-[0em]">
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>
          </div>
        </div>
        <div className="w-[393px] h-[60px] mt-10 grid grid-cols-[16px_361px_16px] grid-rows-[60px]">
          <a
            href="#lets-talk"
            className="w-[361px] h-11 bg-[#FF623E] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] rounded-full font-['Quicksand'] font-bold text-[14px]/[28px] tracking-[0em] col-start-2 inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
            aria-label="Jump to Let’s Talk section"
          >
            Let’s Talk
          </a>
        </div>
        <div className="w-[393px] h-[391px] mt-[43px] flex-col justify-center items-center">
          {/* Dark mode hero image */}
          <img
            src="/Assets/Image Hero.svg"
            alt="Hero Image Dark"
            className="block in-[.theme-light]:hidden"
          />
          {/* Light mode hero image */}
          <img
            src="/Assets/Hero-light.svg"
            alt="Hero Image Light"
            className="hidden in-[.theme-light]:block"
          />
        </div>
        <div className="w-[393px] h-[30px] mt-11">
          <p className="font-semibold text-center text-[16px]/[30px] tracking-[-0.02em]">
            Trusted by Global Innovators & Leading Brands
          </p>
        </div>
        <div className="w-[393px] h-[114px] bg-[#000000] grayscale flex flex-col items-center justify-center">
          {/* Logos row: dark vs light theme swap */}
          <img
            src="/Assets/Logos Row.svg"
            alt="Partner Logos Dark"
            className="block in-[.theme-light]:hidden"
          />
          <img
            src="/Assets/Logo Row Light.svg"
            alt="Partner Logos Light"
            className="hidden in-[.theme-light]:block"
          />
        </div>
      </div>

      {/* Hero section ukuran md mulai */}
      <div className="container hidden md:grid md:mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className=" w-[1440px] h-[747px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <h1 className="font-['Quicksand'] font-bold tracking-[-0.02em] text-[56px]/[68px] lg:text-[56px]/[64px]">
              Your Tech Partner for
              <span className="block text-[#FF6C37]">Smarter Growth</span>
            </h1>
            <p className="mt-5 text-[20px]/[34px] tracking-[0em] lg:text-[18px]/[30px] font-quicksand font-semibold text-(--text)">
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>
            <div className="mt-8">
              <a
                href="#lets-talk"
                className="flex items-center justify-center w-[200px] h-[48px] px-7 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0px_#FFFFFF40] font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E] in-[.theme-light]:text-white"
              >
                Let’s Talk
              </a>
            </div>
          </div>
          {/* Image column */}
          <div className="w-full">
            <img
              src="/Assets/Assets-desktop/Image Hero.svg"
              alt="Hero Image Dark"
              className="block in-[.theme-light]:hidden w-full h-auto "
            />
            <img
              src="/Assets/Assets-desktop/Hero-light.svg"
              alt="Hero Image Light"
              className="hidden in-[.theme-light]:block w-full h-auto"
            />
          </div>
        </div>
        {/* Logos row */}
        <div className="mt-12 lg:mt-16 bg-[--bg]">
          <p className="font-['Quicksand'] font-bold text-[24px]/[36px] tracking-[0em] text-center">
            Trusted by Global Innovators & Leading Brands
          </p>
          <div className="mt-6 bg-(--bg) grayscale flex items-center justify-center md:justify-start">
            <img
              src="/Assets/Assets-desktop/Dark-Logo-Rows.svg"
              alt="Partner Logos Dark"
              className="block in-[.theme-light]:hidden w-full h-auto"
            />
            <img
              src="/Assets/Assets-desktop/Light-Logo-Rows.svg"
              alt="Partner Logos Light"
              className="hidden in-[.theme-light]:block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
