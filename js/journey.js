/* ==========================================
   CODEBENCH JOURNEY PAGE SCRIPT (js/journey.js)
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeScrollAnimations();
    initializeHeroAnimation();
    initializeTimelineProgress();
});

/* ==========================================
   1. SCROLL REVEAL ANIMATIONS
========================================== */
function initializeScrollAnimations() {
    const cards = document.querySelectorAll(".timeline-card");

    // Fallback if IntersectionObserver isn't supported
    if (!("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("show"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
}

/* ==========================================
   2. HERO FADE-OUT ON SCROLL
========================================== */
function initializeHeroAnimation() {
    const hero = document.querySelector(".journey-hero");
    if (!hero) return;

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                hero.style.opacity = Math.max(0, 1 - scrollY / 600);
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ==========================================
   3. TIMELINE LINE FILL PROGRESS
========================================== */
function initializeTimelineProgress() {
    const line = document.querySelector(".timeline-line");
    const timeline = document.querySelector(".timeline");
    if (!line || !timeline) return;

    let ticking = false;

    const updateProgress = () => {
        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const totalHeight = rect.height;
        const visibleHeight = Math.min(
            Math.max(windowHeight - rect.top, 0),
            totalHeight + windowHeight
        );

        const percentage = Math.min(
            100,
            Math.max(0, (visibleHeight / (totalHeight + windowHeight / 2)) * 100)
        );

        line.style.height = `${percentage}%`;
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });

    updateProgress();
}