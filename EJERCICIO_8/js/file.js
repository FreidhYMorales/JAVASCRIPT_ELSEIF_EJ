function tot(){
    const amount = parseFloat(document.getElementById('product_amount').value);
    const price = parseFloat(document.getElementById('unit_price').value);

    let total = amount * (price + (price * 0.16));

    document.getElementById('total').innerText = `Q ${total.toFixed(2)}`;
}