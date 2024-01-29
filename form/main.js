const form = document.getElementById('form-deposito');

let numeroA = document.getElementById('numA')
let numeroB = document.getElementById('numB')

function validação() {
    return parseInt(numeroB.value) > parseInt(numeroA.value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemPositiva = `Tudo certo, o número B: <b>${numeroB.value}</b> é maior que o número A: <b>${numeroA.value}</b>`;
    const mensagemNegativa = `O número B precisa ser <b>maior</b> que o número A`

    if (validação()) {
        const containerMensagemPositiva = document.querySelector('.sucess-message')
        document.querySelector('.sucess-message').innerHTML = mensagemPositiva
        containerMensagemPositiva.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        const containerMensagemNegativa = document.querySelector('.error-message')
        document.querySelector('.error-message').innerHTML = mensagemNegativa
        containerMensagemNegativa.style.display = 'block'
    }
});

console.log(form);