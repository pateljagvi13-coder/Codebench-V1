// =====================================
// CodeBench // Knowledge Check System
// =====================================

console.log("CodeBench Knowledge Check loading 🧠");


// =====================================
// QUIZ STATE
// =====================================

const quizState = {};


// =====================================
// SUBMIT ANSWER
// =====================================

function submitAnswer(buttonElement, isCorrect) {

    if (!buttonElement) {
        return;
    }


    const container =
        buttonElement.parentElement;

    if (!container) {
        return;
    }


    const buttons =
        container.querySelectorAll(".quiz-btn");


    // ---------------------------------
    // Reset previous answer states
    // ---------------------------------

    buttons.forEach(button => {

        button.classList.remove(
            "correct",
            "incorrect"
        );

        button.style.backgroundColor = "";
        button.style.borderColor = "";

    });


    // ---------------------------------
    // Correct Answer
    // ---------------------------------

    if (isCorrect) {

        buttonElement.classList.add(
            "correct"
        );

        buttonElement.style.backgroundColor =
            "rgba(168, 187, 166, 0.25)";

        buttonElement.style.borderColor =
            "#a8bba6";


        console.log(
            "Knowledge Check passed! 🎉"
        );


        // ---------------------------------
        // Remember completion
        // ---------------------------------

        const sectionId =
            window.currentSectionId || 1;


        quizState[sectionId] =
            true;


        localStorage.setItem(
            `codeBenchQuiz_${sectionId}`,
            "passed"
        );


        completeSection(sectionId);


    } else {

        // ---------------------------------
        // Incorrect Answer
        // ---------------------------------

        buttonElement.classList.add(
            "incorrect"
        );

        buttonElement.style.backgroundColor =
            "rgba(227, 163, 183, 0.22)";

        buttonElement.style.borderColor =
            "#e3a3b7";


        console.log(
            "Not quite. Keep learning! 📚"
        );

    }

}


// =====================================
// COMPLETE SECTION
// =====================================

function completeSection(sectionId) {

    const section =
        getSection(sectionId);

    if (!section) {
        console.error(
            "Section not found:",
            sectionId
        );

        return;
    }


    // ---------------------------------
    // Get completed sections
    // ---------------------------------

    const completed =
        JSON.parse(
            localStorage.getItem(
                "codeBenchCompletedSections"
            ) || "[]"
        );


    // ---------------------------------
    // Prevent duplicate XP
    // ---------------------------------

    if (
        completed.includes(sectionId)
    ) {

        console.log(
            "Section already completed ✅"
        );

        return;

    }


    // ---------------------------------
    // Save completion
    // ---------------------------------

    completed.push(sectionId);


    localStorage.setItem(
        "codeBenchCompletedSections",
        JSON.stringify(completed)
    );


    // ---------------------------------
    // Award XP
    // ---------------------------------

    let currentXP =
        Number(
            localStorage.getItem(
                "user_xp"
            ) || 0
        );


    currentXP += section.xp;


    localStorage.setItem(
        "user_xp",
        currentXP
    );


    // ---------------------------------
    // Update XP display
    // ---------------------------------

    updateXPDisplay(
        currentXP
    );


    // ---------------------------------
    // Show completion
    // ---------------------------------

    showCompletionMessage(
        section
    );

}


// =====================================
// UPDATE XP DISPLAY
// =====================================

function updateXPDisplay(xp) {

    const displays =
        document.querySelectorAll(
            "#navXP"
        );


    displays.forEach(
        display => {

            display.textContent =
                xp;

        }
    );

}


// =====================================
// COMPLETION MESSAGE
// =====================================

function showCompletionMessage(section) {

    alert(
        `🎉 Section Complete!\n\n` +
        `${section.title}\n\n` +
        `+${section.xp} XP`
    );

}


// =====================================
// LOAD EXISTING XP
// =====================================

function initializeXP() {

    const xp =
        Number(
            localStorage.getItem(
                "user_xp"
            ) || 0
        );


    updateXPDisplay(
        xp
    );

}


// =====================================
// START
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    initializeXP
);


// =====================================
// GLOBAL FUNCTIONS
// =====================================

window.submitAnswer =
    submitAnswer;