//função
function fibonacci(num) {
    let a = 0, b = 1;

    if (num == 0 || num == 1) {
        document.querySelector('.result').innerHTML = `O número ${num} pertence a sequencia`
        console.log(num)
    };
    let proximo = a + b;




    while (proximo <= num) {
        if (proximo === num) {
            document.querySelector('.result').innerHTML = `O número ${num} pertence a sequencia`
            return
        }

        //atualiza os dados para seguir a sequencia 
        a = b;
        b = proximo;
        proximo = a + b
        console.log(proximo)
    }
document.querySelector('.result').innerHTML = `O número ${num} não pertence a sequencia`
}

//eventos

document.querySelector('.button').addEventListener('click', () => {
    fibonacci(Number(document.querySelector('#input').value));
})