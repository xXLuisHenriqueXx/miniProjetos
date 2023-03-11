function tarefaNova(){
    let text = document.getElementById('cTarefa').value
    let divTarefa = document.getElementById('container_exibir')

    divTarefa.innerHTML = `<p>${text}<p>`
}