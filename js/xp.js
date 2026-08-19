window.addEventListener("DOMContentLoaded", () => {
    const xpElement = document.getElementById("navXP");

    if (!xpElement) return;

    const xp = parseInt(localStorage.getItem("user_xp")) || 0;

    xpElement.innerText = xp.toLocaleString();
});