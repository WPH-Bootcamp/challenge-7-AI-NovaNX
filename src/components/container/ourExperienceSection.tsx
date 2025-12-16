export default function OurExperienceSection() {
  return (
    <section>
      {/* Mobile (default) */}
      <div className="container w-[393px] h-[688px] flex flex-col md:hidden">
        <div className="w-[361px] h-[143px] flex flex-col mx-4 mt-20">
          <h2 className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] tracking-[-0.02em]">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>
        <div className="w-[361px] h-[361px] mx-4 mt-6 grid grid-cols-2 grid-rows-2 gap-4">
          <div className="w-[172.5px] h-[172.5px] bg-[#0A0D12] border-[#181D27] border rounded-full flex flex-col items-center justify-center">
            <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em] mx-4 mb-1.5">
              50+
            </h3>
            <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] tracking-[0em] text-center mx-4">
              Projects Delivered
            </p>
          </div>
          <div className="w-[172.5px] h-[172.5px] bg-[#0A0D12] border-[#181D27] border rounded-full flex flex-col items-center justify-center">
            <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em] mx-4 mb-1.5">
              5+
            </h3>
            <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] tracking-[0em] text-center mx-4">
              Years of Experience
            </p>
          </div>
          <div className="w-[172.5px] h-[172.5px] bg-[#0A0D12] border-[#181D27] border rounded-full flex flex-col items-center justify-center">
            <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em] mx-4 mb-1.5">
              10+
            </h3>
            <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] tracking-[0em] text-center mx-4">
              Industry Awards Won
            </p>
          </div>
          <div className="w-[172.5px] h-[172.5px] bg-[#0A0D12] border-[#181D27] border rounded-full flex flex-col items-center justify-center">
            <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em] mx-4 mb-1.5">
              100+
            </h3>
            <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] tracking-[0em] text-center mx-4">
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet (md and up) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl py-16">
          <div className="w-[1160px] h-[99px] mx-auto text-center">
            <h2 className="font-['Quicksand'] font-bold text-[40px]/[56px] lg:text-[40px]/[50px] tracking-[-0.02em]">
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className="mt-2 font-['Quicksand'] text-(--text-muted) font-medium text-[18px]/[32px]">
              From strategy to execution, we deliver solutions that grow your
              business.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-6 lg:gap-8">
            <div className="rounded-full border border-[#181D27] bg-[#0A0D12] aspect-square flex flex-col items-center justify-center">
              <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em]">
                50+
              </h3>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] text-center">
                Projects Delivered
              </p>
            </div>
            <div className="rounded-full border border-[#181D27] bg-[#0A0D12] aspect-square flex flex-col items-center justify-center">
              <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em]">
                5+
              </h3>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] text-center">
                Years of Experience
              </p>
            </div>
            <div className="rounded-full border border-[#181D27] bg-[#0A0D12] aspect-square flex flex-col items-center justify-center">
              <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em]">
                10+
              </h3>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] text-center">
                Industry Awards Won
              </p>
            </div>
            <div className="rounded-full border border-[#181D27] bg-[#0A0D12] aspect-square flex flex-col items-center justify-center">
              <h3 className="font-['Quicksand'] font-bold text-[#FF623E] text-[36px]/[44px] tracking-[-0.02em]">
                100+%
              </h3>
              <p className="font-['Quicksand'] text-[#FDFDFD] font-semibold text-[14px]/[28px] text-center">
                Client Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
