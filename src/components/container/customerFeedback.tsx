import React from "react";

const CustomerFeedback: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-16"
      aria-labelledby="customer-feedback-title"
    >
      {/* Mobile */}
      <div
        className="container w-[393px] h-[583px] flex flex-col md:hidden"
        data-testimonials
      >
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-10">
          <h2
            id="customer-feedback-title"
            className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] tracking-[-0.02em]"
          >
            What Partners Say About Working With Us
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <div className="w-[361px] h-[339px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mx-4 mt-6">
          <div className="w-16 h-16 flex absolute -top-8 left-5">
            <span className="m-auto">
              <img src="/Assets/tdesign_quote-filled.svg" alt="quote" />
            </span>
          </div>
          <div className="w-[332px] h-[246px] flex flex-col mx-4 mt-10">
            <div className="flex flex-row mx-[156px] gap-1">
              <img src="/Assets/line-md_star-filled.svg" alt="" />
              <img src="/Assets/line-md_star-filled.svg" alt="" />
              <img src="/Assets/line-md_star-filled.svg" alt="" />
              <img src="/Assets/line-md_star-filled.svg" alt="" />
              <img src="/Assets/line-md_star-filled.svg" alt="" />
            </div>
            <div>
              <p
                data-quote-target
                className="font-['Quicksand'] text-[#FDFDFD] font-medium text-center text-[14px]/[28px] tracking-[0em]"
              >
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
              </p>
            </div>
            <div className="mt-0">
              <p
                data-name-target
                className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-center text-[14px]/[28px] tracking-[0em]"
              >
                Sarah Tan
              </p>
              <p
                data-role-target
                className="font-['Quicksand'] text-[#FF623E] font-semibold text-center text-[14px]/[28px] tracking-[0em]"
              >
                Product Manager at Finovate
              </p>
            </div>
          </div>
          <div className="w-15 h-15 flex absolute mx-[166.5px] -bottom-[30px]">
            <span className="m-auto">
              <img src="/Assets/Ellipse 1.svg" alt="web" />
            </span>
          </div>
        </div>
        {/* safelist dynamic classes used by JS to avoid purge */}
        <span className="hidden opacity-0 translate-x-full"></span>

        <div className="w-9 h-2 flex mx-auto mt-12" data-dots>
          <button
            type="button"
            aria-label="Slide 1"
            aria-pressed="true"
            data-dot
            data-dot-index="0"
            data-active="true"
            className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] cursor-pointer"
          ></button>
          <button
            type="button"
            aria-label="Slide 2"
            aria-pressed="false"
            data-dot
            data-dot-index="1"
            data-active="false"
            className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] mx-1.5 cursor-pointer"
          ></button>
          <button
            type="button"
            aria-label="Slide 3"
            aria-pressed="false"
            data-dot
            data-dot-index="2"
            data-active="false"
            className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] cursor-pointer"
          ></button>
        </div>
      </div>

      {/* Desktop/Tablet */}
      <div className="hidden md:block">
        <div className="container w-[1440px] h-[723px] mx-auto px-6 lg:px-10 max-w-7xl py-16">
          <div className="text-center w-[1160px] h-[99px] mx-auto">
            <h2 className="font-['Quicksand'] font-bold text-[40px]/[56px] lg:text-[40px]/[50px] tracking-[-0.02em]">
              What Partners Say About Working With Us
            </h2>
            <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[18px]/[32px]">
              Trusted voices. Real experiences. Proven results.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto" data-testimonials>
            <div className="border border-[#181D27] bg-[#0A0D12] rounded-2xl p-8 relative">
              <div className="w-20 h-20 flex absolute -top-10 left-8">
                <span className="m-auto">
                  <img
                    src="/Assets/Assets-desktop/tdesign_quote-filled.svg"
                    alt="quote"
                  />
                </span>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                <img
                  src="/Assets/Assets-desktop/desktop-line-md_star-filled.svg"
                  alt=""
                />
                <img
                  src="/Assets/Assets-desktop/desktop-line-md_star-filled.svg"
                  alt=""
                />
                <img
                  src="/Assets/Assets-desktop/desktop-line-md_star-filled.svg"
                  alt=""
                />
                <img
                  src="/Assets/Assets-desktop/desktop-line-md_star-filled.svg"
                  alt=""
                />
                <img
                  src="/Assets/Assets-desktop/desktop-line-md_star-filled.svg"
                  alt=""
                />
              </div>
              <p
                data-quote-target
                className="font-['Quicksand'] text-[#FDFDFD] font-medium text-center text-[18px]/[32px] tracking-[0em]"
              >
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
              </p>
              <div className="mt-3">
                <p
                  data-name-target
                  className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-center text-[18px]/[32px] tracking-[0em]"
                >
                  Sarah Tan
                </p>
                <p
                  data-role-target
                  className="font-['Quicksand'] text-[#FF623E] font-semibold text-center text-[18px]/[32px] tracking-[0em]"
                >
                  Product Manager at Finovate
                </p>
              </div>
              <div className="w-15 h-15 flex absolute left-1/2 -translate-x-1/2 -bottom-[30px]">
                <span className="m-auto">
                  <img src="/Assets/Assets-desktop/Ellipse 1.svg" alt="web" />
                </span>
              </div>
            </div>
            <div className="w-9 h-2 flex mx-auto mt-12" data-dots>
              <button
                type="button"
                aria-label="Slide 1"
                aria-pressed="true"
                data-dot
                data-dot-index="0"
                data-active="true"
                className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] cursor-pointer"
              ></button>
              <button
                type="button"
                aria-label="Slide 2"
                aria-pressed="false"
                data-dot
                data-dot-index="1"
                data-active="false"
                className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] mx-1.5 cursor-pointer"
              ></button>
              <button
                type="button"
                aria-label="Slide 3"
                aria-pressed="false"
                data-dot
                data-dot-index="2"
                data-active="false"
                className="w-2 h-2 rounded-full bg-[#181D27] data-[active=true]:bg-[#FF6C37] cursor-pointer"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
