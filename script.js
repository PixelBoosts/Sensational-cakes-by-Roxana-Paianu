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

document.addEventListener("DOMContentLoaded", function () {
    let formular = document.querySelector("form");
    
    formular.addEventListener("submit", function (e) {
        let nume = document.getElementById("nume").value;
        let email = document.getElementById("email").value;
        
        if (nume.trim() === "" || email.trim() === "") {
            e.preventDefault();  // Previi trimiterea formularului
            alert("Te rugăm să completezi toate câmpurile!");
        } else {
            alert("Comanda ta a fost trimisă cu succes!");
        }
    });
});
