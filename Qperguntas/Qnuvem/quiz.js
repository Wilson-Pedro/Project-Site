const a1 = document.getElementById('A1')
const a2 = document.getElementById('A2')
const a3 = document.getElementById('A3')
const a4 = document.getElementById('A4')
const pergunta = document.getElementById('pergunta')
const numQuest = document.getElementById('numeroQuestao')
const container = document.querySelector('.container')
const start = document.getElementById('Start')
const contagemAcertos = document.getElementById('pontosAcertos')
const voltar = document.getElementById('voltar')
var cont = 0
var acertos = 0
var nQuestao = 0
const q = [5]


// QUESTÕES
q[0] = {
    perguntaQuestao: 'Clique em umas das opções para começar',
    alternativa1: 'começar',
    alternativa2: 'começar',
    alternativa3: 'começar',
    alternativa4: 'começar',
    correta: '',
}

q[1] = {
    perguntaQuestao: 'Como a Compuatção em nuvem pode ser definida?',

    alternativa1: 'Consiste em dois ou mais computadores que estão conectados para compartilhar informações. ',

    alternativa2: 'É a possibilidade de oferecer recursos de uma forma sob demanda.',

    alternativa3: 'Responsável pela estrutura, cabeamento das redes e roteamento de pacotes.',

    alternativa4: 'É um sistema que tem como função controlar o fluxo de dados que trafegram pela internet.',

    correta: 'É a possibilidade de oferecer recursos de uma forma sob demanda.',
}

q[2] = {
    perguntaQuestao: 'Qual dessas alternativas NÃO apresenta uma características daa computacão em nuvem?',
    alternativa1: 'Agilidade',
    alternativa2: 'Alta escalabilidade',
    alternativa3: 'Dados independentes',
    alternativa4: 'Alta disponibilidade',
    correta: 'Dados independentes',
}

q[3] = {
    perguntaQuestao: 'O termo “Infrastructure as a Service” está se refirindo a qual tipo de nuvem?',
    alternativa1: 'ISaS',
    alternativa2: 'IsaS',
    alternativa3: 'IaSS',
    alternativa4: 'IaaS',
    correta: 'IaaS',
}

q[4] = {
    perguntaQuestao: 'Quais os tipos de modelo de implementação em Nuvem?',

    alternativa1: 'Nuvem Pública, Nuvem Híbrida, Nuvem Computacional.',

    alternativa2: 'Nuvem Privada, Nuvem Computacional, Nuvem Pública.',

    alternativa3: 'Nuvem Pública, Nuvem Privada, Nuvem híbrida.',

    alternativa4: 'Nuvem Computacional, Nuvem Híbrida, Nuvem Privada.',

    correta: 'Nuvem Pública, Nuvem Privada, Nuvem híbrida.',
}

q[5] = {
    perguntaQuestao: 'Acessar um serviço na web que é gerenciado por terceiros e que utiliza uma interface criada pelo cliente, é caracteristica da: ',
    alternativa1: 'Nuvem Híbrida',
    alternativa2: 'SaaS',
    alternativa3: 'Nuvem Pública',
    alternativa4: 'Pay-Per-Use',
    correta: 'SaaS',
}

q[6] = {
    perguntaQuestao: 'Quiz Finalizado',
    
}

// BOTÃO PARA INICICAR O QUIZ
function iniciar() {
    acertos = 0
    container.style.display = 'block'
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
    start.style.display = 'none'

}

// FUNÇÕES DAS ALTERNATIVAS
function alternativa1() {
    if(q[nQuestao].alternativa1 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa2() {
    if(q[nQuestao].alternativa2 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa3() {
    if(q[nQuestao].alternativa3 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa4() {
    if(q[nQuestao].alternativa4 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

// FUNÇÃO PARA AVANÇAR PARA AS PRÓXIMAS QUESTÕES
function proximaQuestao(){
    cont += 1
    disabled_btn()
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
    contagemAcertos.textContent = 'Acertos:' + acertos + '/5'

    return
}



//FUNÇÃO PARA DESABILITAR OS BOTES APÓS O QUIZ
function disabled_btn(){
    if (cont == 6){
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        voltar.style.display = 'block'
    }
    
    return
}