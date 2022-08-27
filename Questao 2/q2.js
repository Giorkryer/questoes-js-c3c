function gerarResult() {
    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const num3 = document.querySelector("#num3");
    
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let c = parseFloat(num3.value);

    try {
        const [x1,x2] = calcularBhaskara(a, b, c);
        document.getElementById("result").innerHTML=`${x1}, ${x2}`;
    }catch (error) {
        document.getElementById("result").innerHTML=error.message;
    }
}

function calcularBhaskara(a, b, c){
    let delta = Math.pow(b, 2) - 4 * a * c;
    if(delta < 0){
        throw new Error("Delta é negativo");

    }
    let x1 = (-b + Math.sqrt(delta))/2*a

    let x2 = (-b - Math.sqrt(delta))/2*a

    return [x1, x2];
}







