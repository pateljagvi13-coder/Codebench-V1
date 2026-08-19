import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword
} 
from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";


import { app } from "./firebase.js";


const auth = getAuth(app);


const provider = new GoogleAuthProvider();





function saveUser(user) {


    localStorage.setItem(
        "codebenchUser",
        JSON.stringify({

            name:
                user.displayName || "Builder",

            email:
                user.email,

            photo:
                user.photoURL || null

        })
    );


}







export async function loginWithGoogle(){


    try {


        const result =
            await signInWithPopup(auth, provider);



        saveUser(result.user);



        window.location.href =
            "dashboard.html";



    } catch(error){


        console.error(
            "Google login failed:",
            error
        );


    }


}







export async function loginUser(){


    const email =
        document.getElementById("emailInput").value;



    const password =
        document.getElementById("passwordInput").value;





    try {


        const result =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );



        saveUser(result.user);



        window.location.href =
            "dashboard.html";



    } catch(error){


        console.error(
            "Login failed:",
            error
        );


        alert(
            "Login failed. Check your email and password."
        );


    }


}







const googleButton =
    document.getElementById("googleLogin");



if(googleButton){


    googleButton.addEventListener(
        "click",
        loginWithGoogle
    );


}