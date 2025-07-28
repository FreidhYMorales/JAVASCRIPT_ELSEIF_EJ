function pnc(){
    let num = parseFloat(document.getElementById('number').value);

    if(num > 0){
        document.getElementById('result').innerText = "El numero es positivo!";
    }else if(num < 0){
        document.getElementById('result').innerText = "El numero es negativo!";
    }else{
        document.getElementById('result').innerText = "El numero es cero!";
    }
}