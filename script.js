document.querySelectorAll(".js-cta").forEach((link) => {
  link.addEventListener("click", () => {
    const location = link.dataset.cta || "unknown";

    if (typeof window.gtag === "function") {
      window.gtag("event", "line_cta_click", {
        event_category: "cta",
        event_label: location,
      });
    }

    console.info(`LINE CTA clicked: ${location}`);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
