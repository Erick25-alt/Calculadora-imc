const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
       
    const bmi =(weight/(height*height)).toFixed(2);

    const value = document.getElementById('value');
    let description='';

    document.getElementById('infos').classList.remove('hidden');

    if(bmi<18.5)
    {
        description  = 'Abaixo de Peso';
    }

    document.getElementById('description').textContent = description;
    
});