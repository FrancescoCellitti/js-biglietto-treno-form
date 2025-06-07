let Nome = document.getElementById("NomeCompleto")
let km = document.getElementById("NumeroKm")
let età = document.querySelector("select")
let Genera = document.getElementById("Genera");
let Annulla = document.getElementById("Annulla")

let costo = document.getElementById("costo")
let NomeBiglietto = document.getElementById('Nome')
let Offerta = document.getElementById('Offerta')


Genera.addEventListener('click', (e) => {
    e.preventDefault();
    NomeBiglietto.textContent = Nome.value


    let prezzo = km.value * 0.21;
    /* costo.textContent(prezzo) */
    if (età.value == "1") {
        prezzo *= 0.8;

        Offerta.textContent = "Sconto 20%"
    } else if (età.value == "3") {
        prezzo *= 0.6;
        Offerta.textContent = "Sconto 40%"

    } else {
        Offerta.textContent = "biglietto standard"
    }
    costo.innerText = prezzo.toFixed(2) + " €";
})


Annulla.addEventListener('click', () => { location.reload() })



