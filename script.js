document.addEventListener("DOMContentLoaded", function () {
    let butoane = document.querySelectorAll(".produs button");
    let selectPrajitura = document.getElementById("prăjitură");

    butoane.forEach((buton) => {
        buton.addEventListener("click", function () {
            let numePrajitura = this.previousElementSibling.textContent;
            selectPrajitura.value = numePrajitura.toLowerCase().replace(/\s/g, "-");
            window.scrollTo({ top: document.querySelector("form").offsetTop, behavior: "smooth" });
        });
    });
});
