import { initializeApp } from
    "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from
    "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";


// ========================================
// FIREBASE CONFIG
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSyDGCV40J72RQia137UKusm_YkNMnpjHbbw",
    authDomain: "codebench-30a20.firebaseapp.com",
    projectId: "codebench-30a20",
    storageBucket: "codebench-30a20.firebasestorage.app",
    messagingSenderId: "1040199695557",
    appId: "1:1040199695557:web:6d3500bec7a542a3e0c4ac"
};


// ========================================
// INITIALIZE FIREBASE
// ========================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// ========================================
// EMAIL / PASSWORD SIGNUP
// ========================================

const signupButton = document.getElementById("signupBtn");

signupButton.addEventListener("click", async () => {

    const username =
        document.getElementById("username").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    // Check fields
    if (!username || !email || !password) {

        alert("Please complete all fields.");

        return;
    }


    // Disable button while creating account
    signupButton.disabled = true;
    signupButton.textContent = "Creating Account...";


    try {

        console.log("Starting account creation...");


        // Create Firebase account
        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


        const user = userCredential.user;


        console.log("Firebase account created:", user.uid);


        // Save user's display name to Firebase
        await updateProfile(user, {
            displayName: username
        });


        // Save basic information locally
        localStorage.setItem(
            "username",
            username
        );

        localStorage.setItem(
            "userID",
            user.uid
        );


        alert(
            "Operator initialized successfully!"
        );


        // Go to dashboard
        window.location.href = "dashboard.html";


    } catch (error) {

        console.error(
            "SIGNUP ERROR:",
            error
        );


        alert(
            "Account creation failed:\n\n" +
            error.message
        );


        // Restore button
        signupButton.disabled = false;
        signupButton.textContent = "Create Account";
    }

});


// ========================================
// GOOGLE SIGNUP
// ========================================
const googleButton = document.getElementById("googleSignupBtn");

googleButton.addEventListener("click", async () => {

    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: "select_account"
    });


    console.log("CURRENT FIREBASE USER:", auth.currentUser);

    try {

        const result = await signInWithPopup(auth, provider);

        console.log("GOOGLE LOGIN SUCCESS");
        console.log("USER:", result.user);
        console.log("EMAIL:", result.user.email);

        window.location.href = "dashboard.html";

    } catch (error) {

        console.error("GOOGLE SIGNUP ERROR:", error);

        alert(error.message);

    }
});