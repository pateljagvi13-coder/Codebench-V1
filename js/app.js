/* CodeBench shared application behavior.
 * The browser-only fallback keeps the prototype useful without an API key.
 * A future server can replace askTutor() without changing the lesson UI.
 */
(() => {
  "use strict";

  const PROGRESS_KEY = "codeBenchProgress";
  const PROFILE_KEY = "profiles";
  const USER_KEY = "currentUser";

  const defaultProgress = {
    codingLevel: "Beginner",
    lessonsCompleted: 0,
    currentLesson: "Introduction to Coding",
    completedLessons: [],
    xp: 0
  };

  const read = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  };

  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  function getProgress() {
    return { ...defaultProgress, ...read(PROGRESS_KEY, {}) };
  }

  function saveProgress(progress) {
    write(PROGRESS_KEY, progress);
    document.dispatchEvent(new CustomEvent("codebench:progress", { detail: progress }));
  }

  function answerFor(question) {
    const q = question.toLowerCase();
    if (/loop|for loop|while/.test(q)) {
      return "Use a for loop when you know how many iterations you need. Use a while loop when the robot should continue until a condition changes—always include a safe exit condition.";
    }
    if (/class|object|oop|method/.test(q)) {
      return "A class groups state and behavior. In FRC code, a subsystem is a good example: it owns hardware state, while commands call its public methods to request an action.";
    }
    if (/command|subsystem|trigger/.test(q)) {
      return "Commands describe what the robot should do and subsystems own the hardware. Keeping those responsibilities separate makes driver controls predictable and lets the scheduler prevent conflicting actions.";
    }
    if (/pid|control|sensor|feedback/.test(q)) {
      return "PID control repeatedly compares a target with a sensor measurement. P responds to present error, I corrects accumulated error, and D dampens rapid changes—start with P, then add the others carefully.";
    }
    if (/debug|error|bug|not work/.test(q)) {
      return "Debug systematically: reproduce the issue, log the input and sensor values, isolate the subsystem, then test one change at a time. Never debug a moving robot without disabling or securing it first.";
    }
    return "Break the problem into three parts: what the robot should do, which subsystem owns the hardware, and what sensor or condition tells you it is done. What have you tried so far?";
  }

  window.askTutor = (question) => {
    const clean = String(question || "").trim();
    return clean ? answerFor(clean) : "Ask me about Java, commands, subsystems, sensors, or debugging.";
  };

  window.completeLesson = (lessonId = getProgress().currentLesson) => {
    const progress = getProgress();
    const completed = new Set(progress.completedLessons || []);
    if (!completed.has(lessonId)) {
      completed.add(lessonId);
      progress.lessonsCompleted = completed.size;
      progress.xp = (progress.xp || 0) + 100;
      progress.completedLessons = [...completed];
      saveProgress(progress);
    }
    return progress;
  };

  window.submitQuestion = () => {
    const input = document.getElementById("userQuestion");
    const output = document.getElementById("tutorResponse");
    if (!input || !output) return;
    const question = input.value.trim();
    if (!question) {
      output.textContent = "Please enter a question first.";
      input.focus();
      return;
    }
    output.textContent = window.askTutor(question);
    input.value = "";
  };

  window.loginUser = () => {
    const input = document.getElementById("usernameInput");
    const username = input?.value.trim();
    if (!username) {
      alert("Please enter your Operator ID.");
      input?.focus();
      return;
    }
    const profiles = read(PROFILE_KEY, {});
    profiles[username] = {
      name: username,
      ...(profiles[username] || {}),
      lastSeen: new Date().toISOString()
    };
    write(PROFILE_KEY, profiles);
    localStorage.setItem(USER_KEY, username);
    window.location.href = "dashboard.html";
  };

  document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem(USER_KEY);
    const display = document.getElementById("navUsername") || document.getElementById("userName");
    if (display && username) display.textContent = username;

    const form = document.querySelector("[data-tutor-form]");
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      window.submitQuestion();
    });
  });
})();