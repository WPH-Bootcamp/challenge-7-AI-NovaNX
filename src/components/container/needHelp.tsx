import React from "react";
import Button from "../ui/Button/Button";

const NeedHelp: React.FC = () => {
  return (
    <section
      id="faq"
      className="scroll-mt-16"
      aria-labelledby="need-help-title"
    >
      <div className="container w-[393px] flex flex-col md:hidden">
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-10 items-center justify-center">
          <h2
            id="need-help-title"
            className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] tracking-[-0.02em]"
          >
            Need Help? Start Here.
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
            Everything you need to know — all in one place.
          </p>
        </div>

        <div
          className="mt-6 mx-4 divide-y divide-[#252B37] border-t border-b border-[#252B37]"
          role="list"
          aria-label="FAQ mobile"
        >
          {[
            {
              q: "What services do you offer?",
              a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
            },
            {
              q: "How do I know if this is right for my business?",
              a: "Book a free consult — we’ll assess your goals and recommend the right approach.",
            },
            {
              q: "How much does a project cost?",
              a: "Every project is different. Let’s talk about your needs to get a tailored estimate.",
            },
            {
              q: "How long does it take?",
              a: "Depends on scope — but we always prioritize quality and deadlines.",
            },
            {
              q: "Can I start with a small project first?",
              a: "Absolutely. We often begin with MVPs or pilot projects.",
            },
          ].map((item, i) => (
            <details className="group" role="listitem" key={i} open={i === 0}>
              <summary className="cursor-pointer py-4 list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-Quicksand font-bold text-[18px]/[32px] tracking-[0em]">
                    {item.q}
                  </h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E]">
                    <img
                      src="/Assets/Add Icon2.svg"
                      alt="collapse"
                      className="h-6 w-6 hidden group-open:block in-[.theme-light]:hidden"
                    />
                    <img
                      src="/Assets/Add Icon.svg"
                      alt="expand"
                      className="h-6 w-6 block group-open:hidden in-[.theme-light]:hidden"
                    />
                    <img
                      src="/Assets/Assets-desktop/light-icon plus and  minus/Add Icon.svg"
                      alt="collapse"
                      className="h-6 w-6 hidden in-[.theme-light]:group-open:block"
                    />
                    <img
                      src="/Assets/Assets-desktop/light-icon plus and  minus/Add Icon-1.svg"
                      alt="expand"
                      className="h-6 w-6 hidden in-[.theme-light]:block in-[.theme-light]:group-open:hidden"
                    />
                  </span>
                </div>
              </summary>
              <div className="pb-4 pr-1 -mt-1">
                <p className="text-[#A4A7AE] text-[14px]/[28px]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      {/* Mobile consultation card */}
      <div className="md:hidden px-4 mt-6">
        <div className="w-[361px] h-[361.21px] flex flex-col mx-auto mt-0 bg-[#CC4E32] rounded-2xl">
          <h2 className="font-['Quicksand'] text-[#FFFFFF] font-bold text-left text-[28px]/[38px] tracking-[-0.02em] mx-5 mt-5">
            Let’s talk it through
          </h2>
          <p className="font-['Quicksand'] font-semibold text-left text-[14px]/[28px] tracking-[0em] text-[#FFFFFF] mx-5 mt-1">
            book a free consultation with our team.
          </p>
          <img
            src="/Assets/Consultation Image.svg"
            alt="Need Help Image"
            className="mt-4 mx-auto"
          />
          <Button
            type="button"
            variant="white"
            size="md"
            className="w-[321px] mx-auto mt-4 force-black-bg in-[.theme-light]:!text-white in-[.theme-light]:!border-[#181D27]"
            onClick={() => {
              window.location.hash = "lets-talk";
            }}
          >
            Free Consultation
          </Button>
        </div>
      </div>

      <div className="hidden md:grid">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <div className="max-w-2xl">
                <h2 className="font-['Quicksand'] font-bold text-[40px]/[56px] lg:text-[40px]/[50px] tracking-[-0.02em]">
                  Need Help? Start Here.
                </h2>
                <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[18px]/[32px]">
                  Everything you need to know — all in one place.
                </p>
              </div>
              <div
                className="mt-10 divide-y divide-[#252B37] border-t border-b border-[#252B37]"
                role="list"
                aria-label="Frequently Asked Questions"
              >
                {[
                  {
                    q: "What services do you offer?",
                    a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
                  },
                  {
                    q: "How do I know if this is right for my business?",
                    a: "Book a free consult — we’ll assess your goals and recommend the right approach.",
                  },
                  {
                    q: "How much does a project cost?",
                    a: "Every project is different. Let’s talk about your needs to get a tailored estimate.",
                  },
                  {
                    q: "How long does it take?",
                    a: "Depends on scope — but we always prioritize quality and deadlines.",
                  },
                  {
                    q: "Can I start with a small project first?",
                    a: "Absolutely. We often begin with MVPs or pilot projects.",
                  },
                ].map((item, i) => (
                  <details className="group" key={i} open={i === 0}>
                    <summary className="cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden focus:outline-none">
                      <div className="flex items-center justify-between gap-6">
                        <h3 className="font-['Quicksand'] font-bold text-[24px]/[36px] tracking-[0em]">
                          {item.q}
                        </h3>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF623E]">
                          <img
                            src="/Assets/Add Icon2.svg"
                            alt="collapse"
                            className="h-6 w-6 hidden group-open:block in-[.theme-light]:hidden"
                          />
                          <img
                            src="/Assets/Add Icon.svg"
                            alt="expand"
                            className="h-6 w-6 block group-open:hidden in-[.theme-light]:hidden"
                          />
                          <img
                            src="/Assets/Assets-desktop/light-icon plus and  minus/Add Icon.svg"
                            alt="collapse"
                            className="h-6 w-6 hidden in-[.theme-light]:group-open:block"
                          />
                          <img
                            src="/Assets/Assets-desktop/light-icon plus and  minus/Add Icon-1.svg"
                            alt="expand"
                            className="h-6 w-6 hidden in-[.theme-light]:block in-[.theme-light]:group-open:hidden"
                          />
                        </span>
                      </div>
                    </summary>
                    <div className="pb-5 pr-4 -mt-2">
                      <p className="text-(--text-muted) text-[20px]/[34px] font-['Quicksand']">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-[#CC4E32] p-8 flex flex-col w-[329px] h-[453.38px] mt-4">
                <h3 className="font-['Quicksand'] text-[#FFFFFF] font-bold text-[36px]/[44px] tracking-[-0.02em]">
                  Let’s talk it through
                </h3>
                <p className="font-['Quicksand'] font-semibold text-[18px]/[32px] tracking-[0em] mt-2 text-white">
                  Book a free consultation with our team.
                </p>
                <img
                  src="/Assets/Assets-desktop/Consultation Image.svg"
                  alt="Consultation"
                  className="mt-6 w-full h-auto"
                />
                <Button
                  type="button"
                  variant="white"
                  size="lg"
                  className="mt-auto w-[281px] special-consultation-btn in-[.theme-light]:!bg-black in-[.theme-light]:!text-white in-[.theme-light]:!border-[#DEDCDC]"
                  onClick={() => {
                    window.location.hash = "lets-talk";
                  }}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
