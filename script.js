const form = document.getElementById('formulario');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
const errorMessage = document.querySelector('.error-Message');
const successMessage = document.querySelector('.success-Message');

form.addEventListener('submit', function(event){
    event.preventDefault();



    //convertendo os valores para apenas números inteiros
    const numA = parseInt(campoA.value);
    const numB = parseInt(campoB.value);

    if(numA < numB) {
        successMessage.innerHTML = `O numero ${numA} é menor que o numero ${numB}!`;
        successMessage.style.display = 'block'
        errorMessage.style.display = 'none'
        
    }else {
        errorMessage.innerHTML =`O numero do campo A deve ser menor que o número do campo B!`
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
        campoA.value = ''
        campoB.value = ''
    }
})
