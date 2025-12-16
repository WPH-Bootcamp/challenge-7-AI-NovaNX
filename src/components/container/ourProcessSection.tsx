export default function OurProcessSection() {
  return (
    <section>
      {/* Mobile (default) */}
      <div className="container w-[393px] h-[853px] flex flex-col mt-[90px] items-center md:hidden">
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-10">
          <h2 className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] tracking-[-0.02em]">
            Our Process
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="w-[361px] h-[644px] mx-4 -mt-6 grid grid-cols-[40px_309px] grid-rows-[repeat(6,94px)] gap-3 items-center relative">
          <div className="pointer-events-none absolute left-5 top-[26px] w-px h-[560px] bg-[#252B37]"></div>

          <div className="w-10 h-10 bg-[#FF623E] rounded-full flex items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              1
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-2xl relative">
            <div className="w-[333.33px] h-7 flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Discovery & Consultation
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Understand Your Needs & Goals
              </p>
            </div>
          </div>

          <div className="w-10 h-10 bg-[#FF623E] rounded-full grid items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              2
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-2xl relative">
            <div className="w-[333.33px] h-7 flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Planning & Strategy
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Build a Clear, Scalable Roadmap
              </p>
            </div>
          </div>

          <div className="w-10 h-10 bg-[#FF623E] rounded-full grid items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              3
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-2xl relative">
            <div className="w-[333.33px] h-7 flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Design & Prototyping
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Craft UX That Converts
              </p>
            </div>
          </div>

          <div className="w-10 h-10 bg-[#FF623E] rounded-full grid items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              4
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-2xl relative">
            <div className="w-[333.33px] h-7 flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Development & Implementation
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Deliver With Speed & Precision
              </p>
            </div>
          </div>

          <div className="w-10 h-10 bg-[#FF623E] rounded-full grid items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              5
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-2xl relative">
            <div className="w-[333.33px] h-7 flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Testing & Optimization
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Ensure Quality at Every Step
              </p>
            </div>
          </div>

          <div className="w-[40px] h-[40px] bg-[#FF623E] rounded-full grid items-center justify-center z-2">
            <span className="font-['Quicksand'] font-bold text-[12px]/[24px] text-[#FFFFFF]">
              6
            </span>
          </div>
          <div className="w-[309px] h-[94px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative">
            <div className="w-[333.33px] h-[28px] flex flex-col mx-4 mt-4">
              <div className="flex flex-row">
                <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                  Launch & Growth
                  <div className="w-6 h-6 flex absolute top-4 right-4">
                    <span className="m-auto">
                      <img src="/Assets/chevron-up.svg" alt="chevron-up" />
                    </span>
                  </div>
                </h2>
              </div>
              <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
                Scale, Measure & Improve Continuously
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet (md and up) */}
      <div className="hidden md:flex">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="text-center max-w-[1440px] px-auto mx-auto">
            <h2 className="font-['Quicksand'] font-bold text-[34px]/[44px] lg:text-[40px]/[56px] tracking-[-0.02em]">
              Our Process
            </h2>
            <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[18px]/[32px] tracking-[0em]">
              Clear steps. Smart execution. Results you can count on.
            </p>
          </div>

          <div className="relative mt-12 mx-auto w-max">
            <div className="grid grid-cols-[532px_96px_532px] gap-y-4 grid-rows-[repeat(6,116px)] place-items-center ">
              <div className="w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Discovery & Consultation
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Understand Your Needs & Goals
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                1
              </div>

              <div className="col-start-3 col-end-4 row-start-2 row-end-3 w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Planning & Strategy
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Build a Clear, Scalable Roadmap
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                2
              </div>

              <div className="col-start-1 col-end-2 row-start-3 row-end-4 w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Design & Prototyping
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Craft UX That Converts
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-3 row-end-4 w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                3
              </div>

              <div className="col-start-3 col-end-4 row-start-4 row-end-5 w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Development & Implementation
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Deliver With Speed & Precision
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-4 row-end-5 w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                4
              </div>

              <div className="col-start-1 col-end-2 row-start-5 row-end-6 w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Testing & Optimization
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Ensure Quality at Every Step
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-5 row-end-6 w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                5
              </div>

              <div className="col-start-3 col-end-4 row-start-6 row-end-7 w-[532px] h-[116px] border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative">
                <h3 className="font-['Quicksand'] font-bold text-[#FDFDFD] text-[20px]/[34px] tracking-[0em]">
                  Launch & Growth
                </h3>
                <p className="mt-1 font-['Quicksand'] font-mediumtext-(--text-muted) text-[16px]/[30px] tracking-[0em]">
                  Scale, Measure & Improve Continuously
                </p>
                <img
                  src="/Assets/Assets-desktop/chevron-up.svg"
                  alt=""
                  className="absolute top-6 right-6"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-6 row-end-7 w-10 h-10 rounded-full bg-[#FF623E] flex items-center justify-center font-['Quicksand'] font-bold text-[16px]/[30px] tracking-[-0.02em] text-[#FFFFFF] mb-4 z-2">
                6
              </div>
            </div>

            <div className="pointer-events-none absolute top-15 bottom-0 left-1/2 h-[650px] w-px -translate-x-1/2 bg-[#252B37]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
