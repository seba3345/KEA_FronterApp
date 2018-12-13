window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("loaded");
    showForside();
    //    showTema();
}

function showForside() {
    console.log("forside vises");
    document.querySelector("#burgermenu").addEventListener("click", showMenu);
    document.querySelector("#afleveringer").addEventListener("click", showMenu);
}

function showMenu() {
    console.log("show menu");
    document.querySelector("#burgermenu").removeEventListener("click", showMenu);
    document.querySelector("#burgermenu_screen").classList.remove("hide");
    document.querySelector("#hvid_burger").classList.remove("hide");
    document.querySelector("#hvid_burger_luk").classList.remove("hide");
    document.querySelector("#hvid_burger_luk").addEventListener("click", hideMenu);
}

function hideMenu() {
    console.log("hide menu");
    document.querySelector("#hvid_burger_luk").removeEventListener("click", showMenu);
    document.querySelector("#burgermenu_screen").classList.add("hide");
    document.querySelector("#hvid_burger").classList.add("hide");
    document.querySelector("#hvid_burger_luk").classList.add("hide");
    document.querySelector("#burgermenu").addEventListener("click", showMenu);

}

//function showTema() {
//    console.log("vis tema")
//    document.querySelector("#tema_knap").classList.remove("hide");
//    document.querySelector("#tema_knap").addEventListener("click", showMenu);
//}
