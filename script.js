let respostaAPI = [
    {"id": 1, "descricao": "Varrer a sala"},
    {"id": 2, "descricao": "Revisar a aula de BD"},
    {"id": 3, "descricao": "Lavar a louça"},
    {"id": 4, "descricao": "Lavar a roupa"},
    {"id": 5, "descricao": "Arrumar a cama"},
];

const tacklist = document.getElementById("lista");

function init() {
    carregarlista();
}

function carregarLista() {
    // 1. Chamar a API com a lista de tarefas atual.

    let idx = -1;
    const listcontainer = document.getElementById("lista");
    listcontainer.innerHTML = '';

    // 2. Iterar a respostaAPI
    while( respostaAPI.length > 0 && ++idx < respostaAPI.length){
        // 2.1 Mesclar HTML com respostaAPI para exibir em tela
        listcontainer.innerHTML += `<li> <input type="checkbox" id="check" Tarefa 1>
        <label for="check">${respostaAPI[idx]. descricao}</label>
        <div class="imagens">
            <img src="./To-Do-Img/images/Editar.png" alt="">
            <img src="./To-Do-Img/images/Lixeira.png" alt="">
        </div></li>`
    }
}

function salvartarefa() {
    // 1. Chamar a API REST POST para salvar a tarefa
    const inputbox = document.getElementById("input-box");
    // 2. Limpar o campo
    inputbox.value = '';
    // 3. Recarregar a Lista
    carregarlista();
}

function getProximoid() {
    return 1;
}