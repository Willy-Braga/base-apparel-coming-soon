//Pegar o input
const inputs = document.querySelector('input');

//Pegar o botão
const botao = document.querySelector('button');

//pegar divs
const error1 = document.querySelector('.exclamation-error')
const error2 = document.querySelector('.message-error')


//Criar o click do botao
//Criar a função do botão
botao.addEventListener('click', (e) => {
    e.preventDefault()

        //Verificação se o input está vazio ou preenchido
        if (inputs.value === "") {
            inputs.classList.add('input-error');
            error1.classList.add('error');
            error2.classList.add('error');
        } else if (inputs.value !== "") {
            inputs.classList.remove('input-error');
            error1.classList.remove('error');
            error2.classList.remove('error');
        }

});