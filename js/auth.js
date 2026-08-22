import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

function saveUser(user) {
  const profile = {
    name: user.displayName || user.email?.split("@")[0] || "Builder",
    email: user.email || "",
    photo: user.photoURL || null,
    uid: user.uid
  };
  localStorage.setItem("codebenchUser", JSON.stringify(profile));
  localStorage.setItem("currentUser", profile.name);
  localStorage.setItem("userID", profile.uid);
  localStorage.setItem("username", profile.name);
}

function showError(error) {
  const known = {
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/user-not-found": "No account exists for this email.",
    "auth/wrong-password": "The email or password is incorrect.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again."
  };
  alert(known[error.code] || "Sign in failed. Please try again.");
}

async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    saveUser(result.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Google login failed:", error);
    showError(error);
  }
}

async function loginUser() {
  const email = document.getElementById("emailInput")?.value.trim();
  const password = document.getElementById("passwordInput")?.value;
  if (!email || !password) {
    alert("Enter your email and password.");
    return;
  }
  const button = document.querySelector("button[onclick*='loginUser']");
  if (button) {
    button.disabled = true;
    button.textContent = "Signing In...";
  }
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    saveUser(result.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error);
    showError(error);
    if (button) {
      button.disabled = false;
      button.textContent = "Sign In";
    }
  }
}

// login.html uses an inline click handler, so explicitly expose this function.
window.loginUser = loginUser;
window.loginWithGoogle = loginWithGoogle;

document.getElementById("googleLogin")?.addEventListener("click", loginWithGoogle);