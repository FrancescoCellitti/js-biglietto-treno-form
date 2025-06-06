
let prezzo = km * 0.21

if (età < 18) {
    prezzo *= 0.8
} else if (età >= 65){
    prezzo *= 0.6
}

const prezzoFinale = prezzo.toFixed(2)
console.log(prezzoFinale)