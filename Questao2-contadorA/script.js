//função
function verificar(string){
    let aux = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "A"){
            aux++
        }
    }

    (aux > 0)? document.querySelector('.result').innerHTML = `Na sua frase apareceu ${aux} vezes a letra "a"` : document.querySelector('.result').innerHTML = `Na sua frase não apareceu a letra "a" nenhuma vez`
}
//evento
document.querySelector('.button').addEventListener('click',()=>{
    verificar(document.querySelector('#input').value)
})
