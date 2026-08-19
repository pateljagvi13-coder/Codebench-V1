// =====================================
// CodeBench // Firebase Configuration
// =====================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

const firebaseConfig = {

    apiKey: "AIzaSyDGCV40J72RQia137UKusm_YkNMnpjHbbw",

    authDomain:
        "codebench-30a20.firebaseapp.com",

    projectId:
        "codebench-30a20",

    storageBucket:
        "codebench-30a20.firebasestorage.app",

    messagingSenderId:
        "1040199695557",

    appId:
        "1:1040199695557:web:6d3500bec7a542a3e0c4ac"

};

const app =
    initializeApp(firebaseConfig);

export { app };