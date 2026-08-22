import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const signupButton = document.getElementById("signupBtn");
const googleButton = document.getElementById("googleSignupBtn");

function saveUser(user, name) {
  const displayName = name || user.displayName || user.email?.split("@")[0] || "Builder";
  localStorage.setItem("currentUser", displayName);
  localStorage.setItem("username", displayName);
  localStorage.setItem("userID", user.uid);
  localStorage.setItem("codebenchUser", JSON.stringify({
    name: displayName, email: user.email || "", photo: user.photoURL || null, uid: user.uid
  }));
}

function showError(error) {
  alert(error.code === "auth/email-already-in-use"
    ? "An account already exists for this email. Sign in instead."
    : error.message || "Account creation failed.");
}

signupButton?.addEventListener("click", async () => {
  const username = document.getElementById("username")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value;
  if (!username || !email || !password) {
    alert("Please complete all fields.");
    return;
  }
  signupButton.disabled = true;
  signupButton.textContent = "Creating Account...";
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: username });
    saveUser(credential.user, username);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Signup failed:", error);
    showError(error);
    signupButton.disabled = false;
    signupButton.textContent = "Create Account";
  }
});

googleButton?.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    saveUser(result.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Google signup failed:", error);
    showError(error);
  }
});