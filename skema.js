window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showSkema();

}

function showSkema() {
    console.log("show Skema");
    //    document.querySelector("#skemabaggrund").classList.remove("hide");
    document.querySelector("#lektieknap").addEventListener("click", hideSkema);


}

function hideSkema() {
    console.log("hide skemabaggrund");
    document.querySelector("#skemabaggrund").classList.add("hide");
    document.querySelector("#lektieknap").classList.add("hide");
    document.querySelector("#skemabaggrund").classList.add("fade_out");
    document.querySelector("#lektieknap").removeEventListener("click", hideSkema);

    lektier();
}

function lektier() {
    console.log("lektier");
    document.querySelector("#skemabaggrund").classList.remove("fade_out");
    document.querySelector("#skemabaggrund").classList.add("hide");
    document.querySelector("#skema2baggrund").classList.remove("hide");
    document.querySelector("#luk2").addEventListener("click", hideLektie);

}

function hideLektie() {
    console.log("hidelektie");
    document.querySelector("#skemabaggrund").classList.remove("hide");
    document.querySelector("#skema2baggrund").classList.add("hide");
    document.querySelector("#lektieknap").classList.remove("hide");
    document.querySelector("#luk2").addEventListener("click", hideLektie);

    showSkema();
}
