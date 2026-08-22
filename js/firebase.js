// =====================================
// CodeBench // Firebase Configuration
// =====================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider
} from
    "https://www.gstatic.com/firebasejs/11.0.0/firebase-app-check.js";

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


// =====================================
// FIREBASE APP CHECK
// =====================================

const appCheck =
    initializeAppCheck(app, {

        provider:
            new ReCaptchaEnterpriseProvider(
                "6LfqYJMtAAAAAJkBcZDicUdzVzJyy5ROKaJUi9_4"
            ),

        isTokenAutoRefreshEnabled: true

    });


// =====================================
// EXPORT
// =====================================

export { app, appCheck };