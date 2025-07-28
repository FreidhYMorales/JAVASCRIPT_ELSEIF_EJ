function bono(){
    const amount = parseFloat(document.getElementById('input_box1').value);

    if(amount <= 100 & amount >= 90){
        document.getElementById('tot').innerText = "Bono del 20% del Salario";
    }else if(amount <= 89 & amount >= 70){
        document.getElementById('tot').innerText = 'Bono del 10% del Salario';
    }else if(amount < 70){
        document.getElementById('tot').innerText = 'Sin Bono';
    }
}