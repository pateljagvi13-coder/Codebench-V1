console.log("sidebar.js loaded");


document.addEventListener("DOMContentLoaded", () => {


    const sidebar = document.getElementById("sidebar");

    const sidebarToggle = document.getElementById("sidebarToggle");



    if (!sidebar || !sidebarToggle) {

        console.warn("Sidebar elements missing");

        return;

    }



    sidebarToggle.addEventListener("click", () => {


        sidebar.classList.toggle("collapsed");


    });



});