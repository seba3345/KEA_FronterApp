window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showSamtale();

}

function showSamtale() {
    console.log("Show samtale");
    document.querySelector("#samtaleknap").addEventListener("click", hideSamtale);

}

function hideSamtale() {
    console.log("hide chatbaggrund");
    document.querySelector("#chatbaggrund").classList.add("hide");
    document.querySelector("#samtaleknap").classList.add("hide");
    document.querySelector("#chatbaggrund").classList.add("fade_out");
    document.querySelector("#samtaleknap").removeEventListener("click", hideSamtale);

    samtale();

}

function samtale() {
    console.log("samtale");
    document.querySelector("#chatbaggrund").classList.remove("fade_out");
    document.querySelector("#chatbaggrund").classList.add("hide");
    document.querySelector("#chat2baggrund").classList.remove("hide");
    document.querySelector(".luk_chat").addEventListener("click", hideChat);

}

function hideChat() {
    console.log("samtale");
    document.querySelector("#chat2baggrund").classList.add("hide");
    document.querySelector("#chatbaggrund").classList.remove("hide");
    document.querySelector("#samtaleknap").classList.remove("hide");

    showSamtale();
}
