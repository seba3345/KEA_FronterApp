window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("aflervinger loaded");

    showAflevering();
}

function showAflevering() {
    console.log("vis aflevering")
    document.querySelector("#aflerverings_screen").classList.remove("hide");
    document.querySelector("#aflevering").addEventListener("click", showTema);


}

function showTema() {
    console.log("vis tema")
    document.querySelector("#aflerverings_screen").classList.add("hide");
    document.querySelector("#tema").classList.remove("hide");
    document.querySelector("#tema_knap").addEventListener("click", showOpgave);


}

function showOpgave() {
    console.log("vis opgaver");
    document.querySelector("#tema").classList.add("hide");
    document.querySelector("#opgave").classList.remove("hide");
    document.querySelector("#opgave_knap").addEventListener("click", showInfo);

}

function showInfo() {
    console.log("show info");
    document.querySelector(".luk").classList.add("hide");
    document.querySelector("#hvid_luk").classList.remove("hide");

    document.querySelector("#opgave").classList.add("hide");
    document.querySelector("#aflerering_info").classList.remove("hide");
    document.querySelector("#opret_link").addEventListener("click", opretLink);
}

function opretLink() {
    console.log("opret link");
    document.querySelector(".luk").classList.remove("hide");
    document.querySelector("#hvid_luk").classList.add("hide");
    document.querySelector("#aflerering_info").classList.add("hide");
    document.querySelector("#link").classList.remove("hide");
}
