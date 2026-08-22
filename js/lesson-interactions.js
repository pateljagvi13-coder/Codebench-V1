// Connects the lesson UI to the curriculum engine.
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("completeLessonBtn");
  if (!button) return;

  const params = new URLSearchParams(window.location.search);
  const levelId = Number(params.get("level")) || 1;
  const lessonId = Number(params.get("lesson")) || 1;
  const title = document.getElementById("completionTitle");
  const message = document.getElementById("completionMessage");

  // The curriculum engine unlocks the button after the lesson interaction.
  button.disabled = false;
  button.addEventListener("click", () => {
    if (typeof window.completeLesson !== "function") return;
    window.completeLesson(levelId, lessonId);
    button.disabled = true;
    button.textContent = "Lesson Complete ✓";
    if (title) title.textContent = "Lesson Complete";
    if (message) message.textContent = "Progress saved. Your next lesson is now available.";
  });
});