function change(){
    const amount = parseFloat(document.getElementById('input_dolar').value);
    const chang = parseFloat(document.getElementById('input_change').value);

    const result = amount * chang;

    document.getElementById('tot').innerText = `Q ${result.toFixed(2)}`;
}