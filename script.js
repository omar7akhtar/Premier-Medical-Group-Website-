const revealTargets = [
  "main > section",
  ".hero-copy",
  ".hero-hours-panel",
  ".hero-info-panel",
  ".overview-photo-panel",
  ".value-row",
  ".physician-card",
  ".care-card",
  ".contact-summary",
  ".faq-item"
];

const nodes = [...document.querySelectorAll(revealTargets.join(","))];

nodes.forEach((node, index) => {
  node.classList.add("reveal");
  if (node.matches(".value-row, .care-card, .faq-item")) {
    node.dataset.reveal = "soft";
  }
  node.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  }
);

nodes.forEach((node) => observer.observe(node));
