import React from "react";

const OurWork: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16"
      aria-labelledby="our-work-title"
    >
      {/* Mobile */}
      <div className="container w-[393px] h-[1568px] flex flex-col md:hidden">
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-10">
          <h2
            id="our-work-title"
            className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] md:text-[40px]/[56px] tracking-[-0.02em]"
          >
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] md:text-[18px]/[32px] tracking-[0em]">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className="w-[361px] h-[427px] flex flex-col mt-6 mx-4">
          <img src="/Assets/image 214.svg" alt="Portofolio-1" />
          <p className="font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] md:text-[16px]/[30px] tracking-[0em]">
            Landing Page
          </p>
          <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] md:text-[20px]/[34px] tracking-[-0.02em] md:tracking-[0em]">
            Portofolio 1
          </p>
        </div>

        <div className="w-[361px] h-[427px] flex flex-col mt-6 mx-4">
          <img src="/Assets/image 214-1.svg" alt="Portofolio-2" />
          <p className="font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] md:text-[16px]/[30px] tracking-[0em]">
            Landing Page
          </p>
          <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] md:text-[20px]/[34px] tracking-[-0.02em] md:tracking-[0em]">
            Portofolio 2
          </p>
        </div>

        <div className="w-[361px] h-[427px] flex flex-col mt-6 mx-4">
          <img src="/Assets/image 214-2.svg" alt="Portofolio-3" />
          <p className="font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] md:text-[16px]/[30px] tracking-[0em]">
            Landing Page
          </p>
          <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] md:text-[20px]/[34px] tracking-[-0.02em] md:tracking-[0em]">
            Portofolio 3
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl py-16">
          <div className="text-center w-[1160px] h-[99px] mx-auto">
            <h2 className="font-['Quicksand'] font-bold text-[40px]/[56px] lg:text-[40px]/[56px] tracking-[-0.02em]">
              From Vision to Launch! Projects We’re Proud Of
            </h2>
            <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[18px]/[32px]">
              Take a closer look at our recent work powering startups,
              enterprises, and everything in between.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col">
              <img
                src="/Assets/image 214.svg"
                alt="Portfolio 1"
                className="w-full h-auto rounded-2xl border border-[#181D27] bg-[#0A0D12]"
              />
              <p className="mt-3 font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Landing Page
              </p>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Portofolio 1
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="/Assets/image 214-1.svg"
                alt="Portfolio 2"
                className="w-full h-auto rounded-2xl border border-[#181D27] bg-[#0A0D12]"
              />
              <p className="mt-3 font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Landing Page
              </p>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Portofolio 2
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="/Assets/image 214-2.svg"
                alt="Portfolio 3"
                className="w-full h-auto rounded-2xl border border-[#181D27] bg-[#0A0D12]"
              />
              <p className="mt-3 font-['Quicksand'] text-[#FF623E] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Landing Page
              </p>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Portofolio 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
