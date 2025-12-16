import React, { useState } from "react";
import Button from "../ui/Button/Button";
import FeedbackOverlay from "../ui/FeedbackOverlay/FeedbackOverlay";
import FeedbackOverlayFailed from "../ui/FeedbackOverlay/FeedbackOverlayFailed";

const LetsTalk: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [alert, setAlert] = useState<string | null>(null);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [overlayFailedOpen, setOverlayFailedOpen] = useState<boolean>(false);

  const toggleService = (value: string) => {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setAlert("Please fill in name and email.");
      return;
    }
    // Check simulated failure rule: email contains "fail"
    if (email.toLowerCase().includes("fail")) {
      setAlert(null);
      setOverlayFailedOpen(true);
      return;
    }
    // On success, clear alert so the red warning box doesn't show
    setAlert(null);
    setOverlayOpen(true);
  };

  return (
    <>
      <section id="lets-talk" className="scroll-mt-16">
        {/* Mobile */}
        <div className="container w-[393px] flex flex-col gap-y-6 md:hidden">
          <div className="w-[361px] flex flex-col mx-4 mt-10">
            <h2 className="font-['Quicksand'] font-bold text-center text-[28px]/[38px] tracking-[-0.02em]">
              Ready to Start? Let’s Talk.
            </h2>
            <p className="font-['Quicksand'] text-[#A4A7AE] font-medium text-center text-[14px]/[28px] tracking-[0em]">
              Tell us what you need, and we’ll get back to you soon.
            </p>
          </div>

          <div className="w-[361px] flex flex-col mx-auto">
            <form
              className="mt-12 flex flex-col"
              onSubmit={onSubmit}
              noValidate
            >
              <div className="w-[361px] h-[82px] mx-auto">
                <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[14px]/[28px] tracking-[0em]">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-[361px] h-[48px] bg-[#000000] border border-[#252B37] rounded-xl px-6 py-4 font-['Quicksand'] font-medium text-[#717680] text-[14px]/[28px] tracking-[0em] focus:outline-none focus:border-[#FF623E] in-[.theme-light]:placeholder:text-[#717680]"
                />
              </div>

              <div className="w-[361px] h-[82px] mx-auto mt-3">
                <p className="font-['Quicksand'] text-[#FDFDFD] font-bold text-left text-[14px]/[28px] tracking-[0em]">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[361px] h-[48px] bg-[#000000] border border-[#252B37] rounded-xl px-6 py-4 font-['Quicksand'] font-medium text-[#717680] text-[14px]/[28px] tracking-[0em] focus:outline-none focus:border-[#FF623E] in-[.theme-light]:placeholder:text-[#717680]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message-desktop"
                  className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message-desktop"
                  name="message"
                  placeholder="Enter your message"
                  className="min-h-[134px] rounded-xl border border-[#252B37] bg-[#000000] px-6 py-4 font-['Quicksand'] text-[14px]/[28px] font-medium text-[#717680] placeholder:text-[#717680] focus:outline-none focus:border-[#FF623E] resize-none"
                ></textarea>
              </div>

              <div className="mx-4 mt-6 flex flex-col gap-3">
                <p className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]">
                  Services
                </p>
                {/* Services checkboxes */}
                {[
                  { value: "web-development", label: "Web Development" },
                  {
                    value: "mobile-app-development",
                    label: "Mobile App Development",
                  },
                  { value: "ui-ux-design", label: "UI/UX Design" },
                  { value: "cloud-solutions", label: "Cloud Solutions" },
                  {
                    value: "software-development",
                    label: "Software Development",
                  },
                  { value: "other", label: "Other" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={services.includes(opt.value)}
                      onChange={() => toggleService(opt.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-grid place-content-center w-5 h-5 rounded-sm border border-[#252B37] bg-[#000000] transition-colors peer-checked:bg-[#FF623E] peer-checked:border-[#FF623E] peer-checked:[&_img]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF623E]">
                      <img
                        src="/Assets/Assets-desktop/check.svg"
                        alt=""
                        className="w-3 h-3 opacity-0 transition-opacity pointer-events-none"
                      />
                    </span>
                    <span className="font-['Quicksand'] font-medium text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-[361px]"
                >
                  Send
                </Button>
                {alert && (
                  <div
                    className="max-w-md rounded-xl border border-red-500/40 bg-red-500/10 px-6 py-4 text-red-300"
                    role="alert"
                    aria-live="assertive"
                  >
                    {alert}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex">
          <div className="mx-auto flex h-[956px] w-[1440px] flex-col items-center justify-center">
            <div className="mx-auto grid h-[796px] w-[720px] grid-cols-1 place-items-center">
              <div>
                <div className="max-w-2xl">
                  <h2 className="font-['Quicksand'] font-bold text-[40px]/[56px] tracking-[-0.02em] text-center">
                    Ready to Start? Let’s Talk.
                  </h2>
                  <p className="mt-3 font-['Quicksand'] text-(--text-muted) text-center text-[18px]/[32px]">
                    Tell us what you need, and we’ll get back to you soon.
                  </p>
                </div>
                <form
                  className="mt-12 flex flex-col gap-6"
                  onSubmit={onSubmit}
                  noValidate
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-name-desktop"
                        className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name-desktop"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 rounded-xl border border-[#252B37] bg-[#000000] px-6 py-3 font-['Quicksand'] text-[16px]/[30px] font-medium text-[#717680] focus:outline-none focus:border-[#FF623E] in-[.theme-light]:placeholder:text-[#717680]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-email-desktop"
                        className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email-desktop"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 rounded-xl border border-[#252B37] bg-[#000000] px-6 py-3 font-['Quicksand'] text-[16px]/[30px] font-medium text-[#717680] focus:outline-none focus:border-[#FF623E] in-[.theme-light]:placeholder:text-[#717680]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-message-desktop"
                      className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message-desktop"
                      name="message"
                      placeholder="Enter your message"
                      className="min-h-[180px] rounded-xl border border-[#252B37] bg-[#000000] px-6 py-4 font-['Quicksand'] text-[16px]/[30px] font-medium text-[#717680] placeholder:text-[#717680] focus:outline-none focus:border-[#FF623E] resize-none"
                    ></textarea>
                  </div>
                  <div className="mt-10 flex flex-col gap-4">
                    <p className="font-['Quicksand'] font-bold text-[14px]/[28px] text-[#FDFDFD] tracking-[0em]">
                      Services
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        { value: "web-development", label: "Web Development" },
                        {
                          value: "mobile-app-development",
                          label: "Mobile App Development",
                        },
                        { value: "ui-ux-design", label: "UI/UX Design" },
                        { value: "cloud-solutions", label: "Cloud Solutions" },
                        {
                          value: "software-development",
                          label: "Software Development",
                        },
                        { value: "other", label: "Other" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={services.includes(opt.value)}
                            onChange={() => toggleService(opt.value)}
                          />
                          <span className="inline-grid place-content-center w-5 h-5 rounded-sm border border-[#252B37] bg-[#000000] transition-colors peer-checked:bg-[#FF623E] peer-checked:border-[#FF623E] peer-checked:[&_img]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF623E]">
                            <img
                              src="/Assets/Assets-desktop/check.svg"
                              alt=""
                              className="w-3 h-3 opacity-0 transition-opacity pointer-events-none"
                            />
                          </span>
                          <span className="font-['Quicksand'] font-medium text-[16px]/[30px] text-[#FDFDFD] tracking-[0em]">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-[720px]"
                    >
                      Send
                    </Button>
                    {alert && (
                      <div
                        id="form-alert-desktop"
                        className="max-w-md rounded-xl border border-red-500/40 bg-red-500/10 px-6 py-4 text-red-300"
                        role="alert"
                        aria-live="assertive"
                      >
                        {alert}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global overlay: render once so it works for mobile and desktop */}
      <FeedbackOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
      <FeedbackOverlayFailed
        open={overlayFailedOpen}
        onClose={() => setOverlayFailedOpen(false)}
      />
    </>
  );
};

export default LetsTalk;
