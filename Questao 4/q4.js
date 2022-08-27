function gerarResult() {
    const num1 = document.querySelector("#num1");
    let valorRecebido = parseInt(num1.value);

    for (let i = 1; i <= valorRecebido; i++) {
        let inner = "";

        if(i%5 == 0){
            inner += "Luidy";
        }
        if(i%9 == 0){
            inner += "Moura";
        }
        document.getElementById("result").innerHTML+=`${inner.length==0 ? i : inner }, `;
    }
}








