function gerarResult(){
    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const num3 = document.querySelector("#num3");


    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);
    let numero3 = parseFloat(num3.value);
    let triangulo = "";
    
    if(numero1+numero2>numero3 && numero2+numero3>numero1 && numero1+numero3>numero2){
        
        if (numero1 == numero2 && numero2 == numero3) {
                triangulo="Equilátero";
            }
            else if (numero1==numero2 || numero2==numero3 || numero3==num1) {
                triangulo="Isósceles";
            }
            else {
                triangulo="Escaleno";
            }

            document.getElementById("result").innerHTML=triangulo;
    }else{
        document.getElementById("result").innerHTML="Triangulo não é possível ";
    }

}

