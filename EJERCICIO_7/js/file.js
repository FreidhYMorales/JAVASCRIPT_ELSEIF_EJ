function imcCalc(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const imc = weight / (height**2);

    document.getElementById('result').innerText = ` ${imc.toFixed(2)}`;
}