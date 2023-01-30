// Description: Secondary JS file for the website
// Mainly used for the download cards

function Maps() {
    var x = document.getElementById("dnCards");
    x.style.display = "none";
    var y = document.getElementById("maps");
    y.style.display = "block";
}

function VScripts() {
    var x = document.getElementById("dnCards");
    x.style.display = "none";
    var y = document.getElementById("vscripts");
    y.style.display = "block";
}

function PyScripts() {
    var x = document.getElementById("dnCards");
    x.style.display = "none";
    var y = document.getElementById("pyscripts");
    y.style.display = "block";
}

function Music() {
    var x = document.getElementById("dnCards");
    x.style.display = "none";
    var y = document.getElementById("music");
    y.style.display = "block";
}

function Back() {
    var x = document.getElementById("dnCards");
    x.style.display = "";
    var y = document.getElementById("maps");
    y.style.display = "none";
    var z = document.getElementById("vscripts");
    z.style.display = "none";
    var a = document.getElementById("pyscripts");
    a.style.display = "none";
    var b = document.getElementById("music");
    b.style.display = "none";
}