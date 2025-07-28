function calc(cant, dsc){
    return cant - (cant * dsc);
}

function discount(){
    let amount = parseFloat(document.getElementById('cantidad').value);
    
    if(amount > 100){
        document.getElementById('total').innerText = `Q ${calc(amount, 0.1).toFixed(2)}`;
    }else if(amount > 50 & amount <= 100){
        document.getElementById('total').innerText = `Q ${calc(amount, 0.05).toFixed(2)}`;
    }else{
        document.getElementById('total').innerText = 'No Aplica Descuento';
    }
}