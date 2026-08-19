// =====================================
// CodeBench - Main JavaScript
// =====================================

console.log("CodeBench is loading... 🤖");


// =====================================
// App Initialization
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("CodeBench is ready 🚀");

    initializeApp();
});


// =====================================
// Main App Setup
// =====================================

function initializeApp() {
    setupButtons();
    loadProgress();
}


// =====================================
// Button Controls
// =====================================

function setupButtons() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {
            console.log(
                `Button clicked: ${button.innerText}`
            );
        });

    });

}


// =====================================
// Learning Progress System
// =====================================

let userProgress = {
    codingLevel: "Beginner",
    lessonsCompleted: 0,
    currentLesson: "Introduction to Coding"
};


function saveProgress() {

    localStorage.setItem(
        "codeBenchProgress",
        JSON.stringify(userProgress)
    );

    console.log("Progress saved ✅");
}


function loadProgress() {

    const savedProgress = localStorage.getItem(
        "codeBenchProgress"
    );

    if (savedProgress) {

        userProgress = JSON.parse(savedProgress);

        console.log(
            "Progress loaded:",
            userProgress
        );

    } else {

        console.log(
            "No saved progress found. Starting fresh!"
        );

    }

}


// =====================================
// AI Tutor Placeholder
// =====================================

function askTutor(question) {

    console.log(
        "Student asked:",
        question
    );


    // Gemini API connection will go here later 🤖

    return "Let's solve this together!";
}


// =====================================
// Lesson System
// =====================================

function completeLesson() {

    userProgress.lessonsCompleted++;

    saveProgress();

    console.log(
        "Lesson completed! 🎉"
    );

}


// =====================================
// User Question System
// =====================================

function submitQuestion() {

    const questionBox = document.getElementById("userQuestion");
    const responseBox = document.getElementById("tutorResponse");

    const question = questionBox.value.trim();

    if (question === "") {
        responseBox.innerText = "Please enter a question first!";
        return;
    }


    console.log("Student question:", question);


    // Temporary AI response
    responseBox.innerText =
        "Great question! Your AI tutor will answer this soon 🤖";


    questionBox.value = "";
}

// existing CodeBench code here


// =====================================
// CodeBench Prototype Login
// =====================================

function loginUser() {

    const usernameInput =
        document.getElementById("usernameInput");

    const username =
        usernameInput.value.trim();


    if (username === "") {

        alert("Please enter your Operator ID!");
        return;

    }


    let profiles =
        JSON.parse(localStorage.getItem("profiles")) || {};


    if (!profiles[username]) {

        profiles[username] = {

            name: username,
            xp: 0,
            level: 1,
            completedLessons: [],
            unlockedParts: []

        };

    }


    localStorage.setItem(
        "profiles",
        JSON.stringify(profiles)
    );


    localStorage.setItem(
        "currentUser",
        username
    );


    window.location.href =
        "dashboard.html";

}



// Load username on pages
document.addEventListener("DOMContentLoaded", () => {

    const currentUser = localStorage.getItem("currentUser");

    const usernameDisplay = document.getElementById("navUsername");

    if (usernameDisplay && currentUser) {
        usernameDisplay.textContent = currentUser;
    }

});



// =====================================
// Future Gemini Connection
// =====================================

// Later:
//
// User question
//        ↓
// CodeBench backend
//        ↓
// Gemini API
//        ↓
// AI Tutor response