// Description: Secondary JS file for the website
// Mainly used for the download cards

function Maps() {
    let x = document.getElementById("dnCards");
    x.style.display = "none";
    let y = document.getElementById("maps");
    y.style.display = "block";
}

function VScripts() {
    let x = document.getElementById("dnCards");
    x.style.display = "none";
    let y = document.getElementById("vscripts");
    y.style.display = "block";
}

function PyScripts() {
    let x = document.getElementById("dnCards");
    x.style.display = "none";
    let y = document.getElementById("pyscripts");
    y.style.display = "block";
}

function Music() {
    let x = document.getElementById("dnCards");
    x.style.display = "none";
    let y = document.getElementById("music");
    y.style.display = "block";
}

function Back() {
    let x = document.getElementById("dnCards");
    x.style.display = "";
    let y = document.getElementById("maps");
    y.style.display = "none";
    let z = document.getElementById("vscripts");
    z.style.display = "none";
    let a = document.getElementById("pyscripts");
    a.style.display = "none";
    let b = document.getElementById("music");
    b.style.display = "none";
}