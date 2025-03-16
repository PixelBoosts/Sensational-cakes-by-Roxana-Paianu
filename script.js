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

document.getElementById("search-button").addEventListener("click", function () {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let produse = document.querySelectorAll(".produs");
    
    produse.forEach(function (produs) {
        let numeProdus = produs.querySelector(".produs-nume").textContent.toLowerCase();
        if (numeProdus.includes(searchQuery)) {
            produs.style.display = "block";
        } else {
            produs.style.display = "none";
        }
    });
});

let stele = document.querySelectorAll(".star");
stele.forEach(function(steara, index) {
    steara.addEventListener("click", function() {
        stele.forEach(function(star, i) {
            if(i <= index) {
                star.style.color = "#e68900"; // Marcare stele selectate
            } else {
                star.style.color = "#ff9800"; // Restaurează stelele neselctate
            }
        });
    });
});
