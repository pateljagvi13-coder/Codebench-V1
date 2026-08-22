// CodeBench dashboard: persisted progress, accessible controls, and mission navigation.
(() => {
  "use strict";

  const KEYS = { sidebar: "sidebar_collapsed_pref", progress: "codeBenchProgress" };
  const $ = (id) => document.getElementById(id);
  const readProgress = () => {
    try {
      return { sector1: "65%", sector2: "40%", xp: 0, ...JSON.parse(localStorage.getItem(KEYS.progress) || "{}") };
    } catch {
      return { sector1: "65%", sector2: "40%", xp: 0 };
    }
  };

  function renderDashboard() {
    const progress = readProgress();
    const sector1 = progress.sector1 || `${Math.min(100, (progress.lessonsCompleted || 0) * 10)}%`;
    const sector2 = progress.sector2 || "40%";
    const setProgress = (barId, textId, value) => {
      const bar = $(barId);
      const text = $(textId);
      if (bar) {
        bar.style.width = value;
        bar.setAttribute("aria-valuenow", String(parseInt(value, 10) || 0));
      }
      if (text) text.textContent = value;
    };
    setProgress("sector1Progress", "sector1Text", sector1);
    setProgress("sector2Progress", "sector2Text", sector2);
    if ($("navXP")) $("navXP").textContent = String(progress.xp || 0);
    if ($("userName")) $("userName").textContent = localStorage.getItem("currentUser") || "Builder";
  }

  function resetProfile() {
    if (!confirm("Reset all mission progress and XP? This cannot be undone.")) return;
    localStorage.removeItem(KEYS.progress);
    localStorage.removeItem("s1_prog");
    localStorage.removeItem("s2_prog");
    localStorage.removeItem("user_xp");
    renderDashboard();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const layout = $("rootLayout");
    if (localStorage.getItem(KEYS.sidebar) === "true") layout?.classList.add("collapsed-layout");
    $("sidebarToggle")?.addEventListener("click", () => {
      const collapsed = layout?.classList.toggle("collapsed-layout") || false;
      localStorage.setItem(KEYS.sidebar, String(collapsed));
    });
    $("resetNeuralLink")?.addEventListener("click", resetProfile);
    $("deploySector1")?.addEventListener("click", () => { window.location.href = "lesson.html?mission=1"; });
    $("deploySector2")?.addEventListener("click", () => { window.location.href = "lesson.html?mission=2"; });
    renderDashboard();
  });

  document.addEventListener("codebench:progress", renderDashboard);
})();