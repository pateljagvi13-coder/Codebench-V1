// =====================================
// CodeBench Dashboard System
// =====================================

// ---------- Local Storage Keys ----------
const STORAGE = {
    sidebar: "sidebar_collapsed_pref",
    sector1: "s1_prog",
    sector2: "s2_prog",
    xp: "user_xp"
};


// ---------- Helper Functions ----------
const $ = (id) => document.getElementById(id);


function getStorageValue(key, defaultValue) {

    const value = localStorage.getItem(key);

    if (value === null) {

        localStorage.setItem(key, defaultValue);

        return defaultValue;
    }

    return value;
}


// =====================================
// Sidebar
// =====================================

function toggleSidebarSystem() {

    const rootLayout = $("rootLayout");

    if (!rootLayout) return;

    const collapsed =
        rootLayout.classList.toggle("collapsed-layout");

    localStorage.setItem(
        STORAGE.sidebar,
        collapsed
    );
}


// =====================================
// Dashboard Rendering
// =====================================

function renderDashboard() {

    const sector1 =
        getStorageValue(
            STORAGE.sector1,
            "65%"
        );

    const sector2 =
        getStorageValue(
            STORAGE.sector2,
            "40%"
        );

    const xp =
        getStorageValue(
            STORAGE.xp,
            "0"
        );


    const sector1Bar =
        $("sector1Progress");

    const sector2Bar =
        $("sector2Progress");

    const sector1Text =
        $("sector1Text");

    const sector2Text =
        $("sector2Text");

    const xpText =
        $("navXP");


    if (sector1Bar) {

        sector1Bar.style.width = sector1;

        sector1Bar.setAttribute(
            "aria-valuenow",
            parseInt(sector1)
        );
    }


    if (sector2Bar) {

        sector2Bar.style.width = sector2;

        sector2Bar.setAttribute(
            "aria-valuenow",
            parseInt(sector2)
        );
    }


    if (sector1Text) {

        sector1Text.textContent =
            sector1;
    }


    if (sector2Text) {

        sector2Text.textContent =
            sector2;
    }


    if (xpText) {

        xpText.textContent =
            xp;
    }
}


// =====================================
// Reset System
// =====================================

function resetNeuralLink() {

    const confirmed =
        confirm(
            "⚠️ Reset all mission progress and XP?\n\nThis cannot be undone."
        );


    if (!confirmed) return;


    localStorage.setItem(
        STORAGE.sector1,
        "0%"
    );

    localStorage.setItem(
        STORAGE.sector2,
        "0%"
    );

    localStorage.setItem(
        STORAGE.xp,
        "0"
    );


    renderDashboard();


    alert(
        "🔄 System reset complete."
    );
}


// =====================================
// Mission Navigation
// =====================================

function startMission1() {

    window.location.href =
        "lesson.html?mission=1";
}


function startMission2() {

    window.location.href =
        "lesson.html?mission=2";
}


// =====================================
// Initialize Dashboard
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        // Restore sidebar preference

        const rootLayout =
            $("rootLayout");


        if (
            rootLayout &&
            localStorage.getItem(
                STORAGE.sidebar
            ) === "true"
        ) {

            rootLayout.classList.add(
                "collapsed-layout"
            );
        }


        // Draw dashboard

        renderDashboard();


        // Sidebar

        const sidebarButton =
            $("sidebarToggle");


        if (sidebarButton) {

            sidebarButton.addEventListener(
                "click",
                toggleSidebarSystem
            );
        }


        // Reset

        const resetButton =
            $("resetNeuralLink");


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                resetNeuralLink
            );
        }


        // Mission 1

        const mission1Button =
            $("deploySector1");


        if (mission1Button) {

            mission1Button.addEventListener(
                "click",
                startMission1
            );
        }


        // Mission 2

        const mission2Button =
            $("deploySector2");


        if (mission2Button) {

            mission2Button.addEventListener(
                "click",
                startMission2
            );
        }

    }
);