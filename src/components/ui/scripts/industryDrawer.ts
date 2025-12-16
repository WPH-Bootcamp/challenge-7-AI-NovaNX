export function setupIndustryDrawer(): void {
  const bind = () => {
    const drawer = document.getElementById("industry-drawer");
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-industry-link]")
    );
    if (!drawer || !links.length) return;

    const panels = Array.from(
      drawer.querySelectorAll<HTMLElement>("[data-industry]")
    );
    if (!panels.length) return;

    const showPanel = (id: string) => {
      drawer.classList.remove("hidden");
      panels.forEach((panel) => {
        const isMatch = panel.dataset.industry === id;
        panel.classList.toggle("hidden", !isMatch);
      });
      try {
        window.history.replaceState(null, "", `#${id}`);
      } catch {}
    };

    links.forEach((link) => {
      if ((link as HTMLElement).dataset.industryBound === "true") return;
      (link as HTMLElement).dataset.industryBound = "true";
      link.addEventListener("click", (event) => {
        const target = link.getAttribute("href")?.slice(1);
        if (!target) return;
        event.preventDefault();
        showPanel(target);
        try {
          drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } catch {}
        console.info("Industry drawer: link clicked", { target });
      });
    });

    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      const panelExists = panels.some(
        (panel) => panel.dataset.industry === initialHash
      );
      if (panelExists) showPanel(initialHash);
    }
  };

  bind();

  // Observe DOM mutations so newly rendered links/panels get bound (React/HMR)
  try {
    const observer = new MutationObserver(() => bind());
    observer.observe(document.body, { childList: true, subtree: true });
  } catch {}
}
