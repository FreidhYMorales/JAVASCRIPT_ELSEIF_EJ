function ageName(){
    const age = parseFloat(document.getElementById('age_value').value);

    if(age >= 65){
        document.getElementById('age_nam').innerHTML = 'Adulto Mayor';
    }else if(age <= 64 & age >= 20){
        document.getElementById('age_nam').innerText = 'Adulto';
    }else if(age <= 19 & age >= 13){
        document.getElementById('age_nam').innerText = 'Adolecente';
    } else{
        document.getElementById('age_nam').innerText = 'Niño o Niña';
    }
}