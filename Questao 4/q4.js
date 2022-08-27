function gerarResult() {
    const num1 = document.querySelector("#num1");
    let valorRecebido = parseInt(num1.value);
    let elHTML = document.getElementById("result")

    elHTML.innerHTML = ""

    if (Number.isInteger(valorRecebido)) {
        for (let i = 1; i <= valorRecebido; i++) {
            let inner = "";

            if (i % 5 == 0) {
                inner += "Luidy";
            }
            if (i % 9 == 0) {
                inner += "Moura";
            }
            elHTML.innerHTML += `${inner.length == 0 ? i : inner}, `;
        }
    } else {
        elHTML.innerHTML = "Entrada inválida."
    }
}








