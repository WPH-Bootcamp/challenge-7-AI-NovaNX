export default function WhatWeDo() {
  return (
    <section id="services" className="scroll-mt-16">
      {/* Mobile (default) */}
      <div className="container w-[393px] flex flex-col md:hidden">
        <div className="w-[361px] h-[115px] flex flex-col mx-4 mt-10">
          <h2 className="font-['Quicksand'] font-semibold text-center text-[28px]/[38px] tracking-[-0.02em]">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Card 1 */}
        <div className="w-[361px] h-[130px] mx-4 mt-7 flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative">
          <div className="w-16 h-16 flex absolute bottom-[87px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon.svg" alt="web" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Web Development
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Build fast, scalable, and SEO-friendly websites.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[361px] h-[158px] mx-4 mt-10 flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-1.svg" alt="mobile" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Mobile App Development
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Native & cross-platform apps tailored to user needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-2.svg" alt="uiux" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                UI/UX Design
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Delight users with intuitive and beautiful interfaces
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-3.svg" alt="cloud" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Cloud Solutions
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Secure and flexible cloud infrastructure for your growth.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-4.svg" alt="software" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Software Development
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Custom solutions built around your business logic.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-5.svg" alt="infra" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                IT Infrastructure
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Scale your backend with reliable tech foundations.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-6.svg" alt="security" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                Cybersecurity Services
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Stay protected with enterprise-grade security.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-7.svg" alt="qa" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                QA Solutions
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Ensure performance with rigorous testing frameworks.
            </p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-[361px] h-[158px] flex border border-[#181D27] bg-[#0A0D12] rounded-[16px] relative mt-10 mx-4">
          <div className="w-16 h-16 flex absolute bottom-[115px] left-5">
            <span className="m-auto">
              <img src="/Assets/Icon-8.svg" alt="consulting" />
            </span>
          </div>
          <div className="w-[333.33px] h-[62px] flex flex-col mx-5 mt-12">
            <div className="flex flex-row">
              <h2 className="font-['Quicksand'] font-bold text-left text-[16px]/[30px] tracking-[-0.02em]">
                IT Consulting & Support
              </h2>
            </div>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-left text-[14px]/[28px] tracking-[0em]">
              Make smarter tech decisions with expert guidance.
            </p>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet (md and up) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-['Quicksand'] font-semibold text-[32px]/[42px] lg:text-[36px]/[44px] tracking-[-0.02em]">
              Smart IT Solutions That Grow With You
            </h2>
            <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[16px]/[28px]">
              Tailored tech to boost efficiency, security, and results.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "/Assets/Icon.svg",
                title: "Web Development",
                desc: "Build fast, scalable, and SEO-friendly websites.",
              },
              {
                icon: "/Assets/Icon-1.svg",
                title: "Mobile App Development",
                desc: "Native & cross-platform apps tailored to user needs.",
              },
              {
                icon: "/Assets/Icon-2.svg",
                title: "UI/UX Design",
                desc: "Delight users with intuitive and beautiful interfaces",
              },
              {
                icon: "/Assets/Icon-3.svg",
                title: "Cloud Solutions",
                desc: "Secure and flexible cloud infrastructure for your growth.",
              },
              {
                icon: "/Assets/Icon-4.svg",
                title: "Software Development",
                desc: "Custom solutions built around your business logic.",
              },
              {
                icon: "/Assets/Icon-5.svg",
                title: "IT Infrastructure",
                desc: "Scale your backend with reliable tech foundations.",
              },
              {
                icon: "/Assets/Icon-6.svg",
                title: "Cybersecurity Services",
                desc: "Stay protected with enterprise-grade security.",
              },
              {
                icon: "/Assets/Icon-7.svg",
                title: "QA Solutions",
                desc: "Ensure performance with rigorous testing frameworks.",
              },
              {
                icon: "/Assets/Icon-8.svg",
                title: "IT Consulting & Support",
                desc: "Make smarter tech decisions with expert guidance.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-[#181D27] bg-[#0A0D12] rounded-2xl p-6 relative"
              >
                <img
                  src={c.icon}
                  alt={c.title}
                  className="w-10 h-10 absolute top-6 left-6"
                />
                <div className="mt-12">
                  <h3 className="font-['Quicksand'] font-bold text-[18px]/[30px] tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-['Quicksand'] text-(--text-muted) text-[14px]/[28px]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
