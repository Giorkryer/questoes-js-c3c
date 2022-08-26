function gerarResult(nota) {

    let num = document.querySelector("#num");
   
    let notaCorrigida = parseFloat(num.value);

    notaCorrigida = arredondar(nota);

    if (notaCorrigida < 40) {
        return `Aluno foi reprovado com nota ${notaCorrigida}`;
    } else {
        return `Aluno foi aprovado com nota ${notaCorrigida}`;
    }
    
   
}

console.log(gerarResult(nota))



function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5))
    } else {
        return nota = nota - (nota % 5)
    }


}




