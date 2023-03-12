let divTarefa = document.getElementById('container_exibir')
let id = 0

function tarefaNova(){
    let text = document.getElementById('cTarefa').value
    id++
    novaTar = document.createElement('p')

    divTarefa.innerHTML += `<p>${text}<p>`
}
function concluirTar(){
    let bgColor = document.querySelector('p')
    bgColor.style.background = 'red'
}