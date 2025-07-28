function calculo(num){
    return num % 2;
}

function paroimp(){
    let num1 = calculo(parseFloat(document.getElementById('number').value));

    if(num1 === 1){
        document.getElementById('preimp').innerText = "Es Impar"
    }else{
        document.getElementById('preimp').innerText = "Es Par"
    }
}