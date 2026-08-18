//variáveis gerais
const btnNovoProduto = document.querySelector('.btn-novo-produto');
const telaProdutoFundo = document.querySelector('.tela-produto-fundo');
const btnSair = document.querySelector('.sair');
const btnCancelar = document.querySelector('.btn-cancelar');
const btnSalvar = document.querySelector('.btn-salvar');
const nome = document.querySelector('#nome');
const qtd = document.querySelector('#qtd');
const categoria = document.querySelector('#categoria');
const validade = document.querySelector('#validade');
const tbodyTabelaPrincipal = document.querySelector('.tabela-principal tbody');
const tbodyCards = document.querySelectorAll('.container-cards tbody');
let linhaEditando = null;

//abre a tela de novos produtos
btnNovoProduto.addEventListener('click', function() {
    telaProdutoFundo.style.display = "flex";
});

//fecha a tela de novos produtos
btnSair.addEventListener('click', function() {
    telaProdutoFundo.style.display = "none";
});

//possibilita colocar novos produtos
btnSalvar.addEventListener('click', function() {
    telaProdutoFundo.style.display = "none";

    //pega o valor digitado e guarda no HTML criado
    const nomeDigitado = nome.value;
    const qtdDigitado = qtd.value;
    const categoriaDigitado = categoria.value;
    const validadeDigitado = validade.value;

    //cria novas linhas na tabela e associa o valor digitado a elas
    const tdNome = document.createElement('td');
    tdNome.textContent = nomeDigitado;
    const tdQtd = document.createElement('td');
    tdQtd.textContent = qtdDigitado;
    const tdValidade = document.createElement('td');
    const dataFormato = validadeDigitado;

    const partes = dataFormato.split("-");
    const partesData = partes[2] + "/" + partes[1] + "/" + partes[0];
    tdValidade.textContent = partesData;

    // coloca as variaveis de datas do tipo Date
    const dataValidade = new Date(validadeDigitado);
    const dataAtual = new Date();

    const spanStatus = document.createElement('span');
    spanStatus.className = "status";
    
    // faz o calculo para observar quanto tempo a dataAtual está da dataValidade
    const diferencaMs = dataValidade - dataAtual;
    const diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);

    let textoStatus = "";
    if(dataAtual >= dataValidade) {
        textoStatus = "URGENTE";    

    } else if (diferencaDias <= 7){
        textoStatus = "PERTO DE VENCER";

    } else {
        textoStatus = "VÁLIDO";
    }

    spanStatus.textContent = textoStatus;

    if(linhaEditando != null) {
        
        //edita na tabela
        const celulas = linhaEditando.querySelectorAll('td');
        celulas[0].textContent = nomeDigitado;
        celulas[1].textContent = qtdDigitado;
        celulas[2].textContent = partesData;
        celulas[3].querySelector('.status').textContent = textoStatus;

        //edita nos cards
        const cardCorrespondente = linhaEditando.linhaCardRelacionada;
        const celulasCard = cardCorrespondente.querySelectorAll('td');
        celulasCard[0].textContent = nomeDigitado;
        celulasCard[1].textContent = partesData;

        linhaEditando = null;

    } else {

    const tdData = document.createElement('td');    
    tdData.appendChild(spanStatus);

    // cria novas acoes na tabela
    const spanEditar = document.createElement('span');
    spanEditar.textContent = "✏️  ";
    spanEditar.className = "editar";
    spanEditar.title = "Editar";

    const spanExcluir = document.createElement('span');
    spanExcluir.textContent = "🗑️";
    spanExcluir.className = "excluir";
    spanExcluir.title = "Excluir";

    spanEditar.addEventListener('click', function() {
        linhaEditando = linhaNova;
        telaProdutoFundo.style.display = "flex";

        const celulas = linhaNova.querySelectorAll('td');
        nome.value = celulas[0].textContent;
        qtd.value = celulas[1].textContent;
        const editParts = celulas[2].textContent.split("/");
        const partesEdicao = editParts[2] + "-" + editParts[1] + "-" + editParts[0];
        validade.value = partesEdicao;
    });

    spanExcluir.addEventListener('click', function() {
        linhaNova.remove();
        linhaCards.remove();
    });

    const tdAcoes = document.createElement('td');
    tdAcoes.appendChild(spanEditar);
    tdAcoes.appendChild(spanExcluir);

    //coloca cada td da tabela em um tr
    const linhaNova = document.createElement('tr');
    linhaNova.appendChild(tdNome);
    linhaNova.appendChild(tdQtd);
    linhaNova.appendChild(tdValidade);
    linhaNova.appendChild(tdData);
    linhaNova.appendChild(tdAcoes);

    linhaNova.dataset.categoria = categoriaDigitado;

    tbodyTabelaPrincipal.appendChild(linhaNova);

    //separa a div dos cards geral com cada um dos cards em especifico
    const tbodyVencidos = tbodyCards[0];
    const tbodyPerto = tbodyCards[1];
    const tbodyValido = tbodyCards[2];
    
    const linhaCards = document.createElement('tr');

    //cria novas linhas na tabela cards e associa o valor digitado a elas
    const tdNomeCards = document.createElement('td');
    tdNomeCards.textContent = nomeDigitado;

    const tdValidadeCards = document.createElement('td');
    tdValidadeCards.textContent = partesData;

    linhaCards.appendChild(tdNomeCards);
    linhaCards.appendChild(tdValidadeCards);

    if(textoStatus == "URGENTE") {
        tbodyVencidos.appendChild(linhaCards);
    } else if (textoStatus == "PERTO DE VENCER") {
        tbodyPerto.appendChild(linhaCards);
    } else {
        tbodyValido.appendChild(linhaCards);
    }

    linhaNova.linhaCardRelacionada = linhaCards;

    }
    nome.value = "";
    qtd.value = "";
    categoria.value = "";
    validade.value = "";
});

//fecha a tela de novos produtos
btnCancelar.addEventListener('click', function() {
    telaProdutoFundo.style.display = "none";
});

const linhasTabela = document.querySelectorAll('.tabela-principal tbody tr');
const busca = document.querySelector('input[type="search"]');

//faz a filtragem dos produtos de acordo com o que o usuário digitar
busca.addEventListener('input', function() {
    linhasTabela.forEach(function(linha) {
        const nomeProduto = linha.querySelector('td').textContent;
        const textoDigitado = busca.value;
        const bateComABusca = nomeProduto.toLowerCase().includes(textoDigitado.toLowerCase());

        if (bateComABusca){
            linha.style.display = "table-row";
        } else {
            linha.style.display = "none";
        }
    });
});

//faz a filtragem da categoria dos produtos
const filtro = document.querySelector('#filtro');

filtro.addEventListener('change', function(event) {
    linhasTabela.forEach(function(linha) {
        const filtroSelecionado = event.target.value;
        const selectFiltro = linha.dataset.categoria;

        if((selectFiltro == filtroSelecionado) || (filtroSelecionado == "todos")) {
            linha.style.display = "table-row";
        } else {
            linha.style.display = "none";
        }
    });
});

