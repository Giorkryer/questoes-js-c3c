function gerarResult(nota) {
    
    let num = document.querySelector("#num");
    nota = parseFloat(num.value);
    let notaCorrigida = parseFloat(num.value);

    notaCorrigida = arredondar(nota);

    if (notaCorrigida < 40) {
        document.getElementById("result").innerHTML=(`Aluno foi reprovado com nota ${notaCorrigida}`) 
    } else if(notaCorrigida > 100){
        document.getElementById("result").innerHTML=(`Nota inválida`)
    }
    else{
        document.getElementById("result").innerHTML=(`Aluno foi aprovado com nota ${notaCorrigida}`)
    }  
}


function arredondar (nota) {
    if (nota < 38) {
        return nota;
    } else if (nota % 5 > 3 ) {
        return Math.ceil(nota / 5) * 5;
    } else{
        return nota;
    }
}




