import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const nameElement = document.getElementById("userName");

        if (nameElement) {
            nameElement.textContent = user.displayName;
        }
    } else {
        window.location.href = "login.html";
    }
});