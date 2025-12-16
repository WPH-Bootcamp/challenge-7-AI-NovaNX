import React from "react";

const BuiltforYourIndustry: React.FC = () => {
  return (
    <section aria-labelledby="industry-title">
      {/* Mobile (md:hidden) */}
      <div className="container w-[393px] h-[655px] flex flex-col md:hidden">
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-15 mb-0">
          <h2
            id="industry-title"
            className="font-['Quicksand'] font-bold text-left text-[32px]/[42px] tracking-[-0.02em]"
          >
            Built for Your Industry
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        <button
          type="button"
          className="group flex mx-4 -mt-6 items-center cursor-pointer transition-colors duration-200 focus:outline-none"
        >
          <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
          <h3 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
            Fintech
          </h3>
        </button>

        <button
          type="button"
          className="group flex mx-4 mt-3 items-center cursor-pointer transition-colors duration-200 focus:outline-none"
        >
          <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
          <h3 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
            E-Commerce
          </h3>
        </button>

        <button
          type="button"
          className="group flex mx-4 mt-3 items-center cursor-pointer transition-colors duration-200 focus:outline-none"
        >
          <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
          <h3 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
            Healthcare
          </h3>
        </button>

        <div className="flex flex-col w-[361px] h-[304px] mx-4 mt-6">
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
            We build secure, scalable, and compliant fintech solutions — from
            digital wallets to core banking systems — tailored to modern
            financial needs.
          </p>
          <img
            src="/Assets/Industry Image Container.svg"
            alt="Industry Image"
            className="mt-4"
          />
        </div>
      </div>

      {/* Desktop/Tablet (md:block) */}
      <div className="hidden md:block md:justify-center">
        <div className="mx-auto mt-15 w-[1160px] h-[99px]">
          <h2 className="font-['Quicksand'] font-bold text-left text-[40px]/[56px] tracking-[-0.02em]">
            Built for Your Industry
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[18px]/[32px] tracking-[0em]">
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>
        <div className="w-[1160px] h-[435px] flex flex-row mx-auto mt-10">
          <div className="w-[256px] flex flex-col gap-3">
            <a
              href="#fintech"
              data-industry-link
              className="group flex items-center cursor-pointer transition-colors duration-200 focus:outline-none"
            >
              <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
              <h3 className="font-['Quicksand'] font-bold text-left text-[20px]/[34px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
                Fintech
              </h3>
            </a>

            <a
              href="#ecommerce"
              data-industry-link
              className="group flex items-center cursor-pointer transition-colors duration-200 focus:outline-none"
            >
              <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
              <h3 className="font-['Quicksand'] font-bold text-left text-[20px]/[34px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
                E-Commerce
              </h3>
            </a>

            <a
              href="#healthcare"
              data-industry-link
              className="group flex items-center cursor-pointer transition-colors duration-200 focus:outline-none"
            >
              <div className="w-1 h-6 bg-[#535862] rounded-full mr-2 group-hover:bg-[#FF623E] group-focus:bg-[#FF623E]"></div>
              <h3 className="font-['Quicksand'] font-bold text-left text-[20px]/[34px] tracking-[-0.02em] text-[#535862] group-hover:text-[#FDFDFD] group-focus:text-[#FDFDFD]">
                Healthcare
              </h3>
            </a>
          </div>

          <div id="industry-drawer" className="hidden flex-1">
            <div
              id="fintech"
              data-industry="fintech"
              className="w-[840px] h-[435px] mx-4 mt-0 hidden"
            >
              <p className="font-['Quicksand'] mt-0! text-[#A4A7AE] font-medium text-left text-[18px]/[32px] tracking-[0em]">
                We build secure, scalable, and compliant fintech solutions —
                from digital wallets to core banking systems — tailored to
                modern financial needs.
              </p>
              <img
                src="/Assets/Assets-desktop/Build-for-Your-Industry/Finance.svg"
                alt="Industry Image"
                className="mt-4"
              />
            </div>

            <div
              id="ecommerce"
              data-industry="ecommerce"
              className="w-[840px] h-[435px] mx-4 mt-0 hidden"
            >
              <p className="font-['Quicksand'] mt-0! text-[#A4A7AE] font-medium text-left text-[18px]/[32px] tracking-[0em]">
                Boost your online sales with fast, reliable platforms designed
                for seamless shopping experiences, inventory management, and
                payment integration.
              </p>
              <img
                src="/Assets/Assets-desktop/Build-for-Your-Industry/Industry Image Container-1.svg"
                alt="Industry Image"
                className="mt-4"
              />
            </div>

            <div
              id="healthcare"
              data-industry="healthcare"
              className="w-[840px] h-[435px] mx-4 mt-0 hidden"
            >
              <p className="font-['Quicksand'] mt-0! text-[#A4A7AE] font-medium text-left text-[18px]/[32px] tracking-[0em]">
                Empowering healthcare providers with digital solutions that
                improve patient care, ensure data privacy, and streamline
                operational workflows.
              </p>
              <img
                src="/Assets/Assets-desktop/Build-for-Your-Industry/Industry Image Container.svg"
                alt="Industry Image"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltforYourIndustry;
