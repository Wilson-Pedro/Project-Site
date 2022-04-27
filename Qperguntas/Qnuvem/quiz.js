var a1 = document.getElementById('A1')
var a2 = document.getElementById('A2')
var a3 = document.getElementById('A3')
var a4 = document.getElementById('A4')
var pergunta = document.getElementById('pergunta')
var numQuest = document.getElementById('numeroQuestao')
var container = document.querySelector('.container')
const start = document.getElementById('Start')
var contagemAcertos = document.getElementById('pontosAcertos')
var voltar = document.getElementById('voltar')
var cont = 0
var acertos = 0
var nQuestao = 0
var q = [5]


// QUESTÕES
q[0] = {
    perguntaQuestao: 'Como a Compuatção em nuvem pode ser definida?',

    alternativa1: 'Consiste em dois ou mais computadores que estão conectados para compartilhar informações. ',

    alternativa2: 'É a possibilidade de oferecer recursos de uma forma sob demanda.',

    alternativa3: 'Responsável pela estrutura, cabeamento das redes e roteamento de pacotes.',

    alternativa4: 'É um sistema que tem como função controlar o fluxo de dados que trafegram pela internet.',

    correta: 'É a possibilidade de oferecer recursos de uma forma sob demanda.',
}

q[1] = {
    perguntaQuestao: 'Qual dessas alternativas NÃO apresenta uma características da computacão em nuvem?',
    alternativa1: 'Agilidade',
    alternativa2: 'Alta escalabilidade',
    alternativa3: 'Dados independentes',
    alternativa4: 'Alta disponibilidade',
    correta: 'Dados independentes',
}

q[2] = {
    perguntaQuestao: 'O termo “Infrastructure as a Service” está se refirindo a qual tipo de nuvem?',
    alternativa1: 'ISaS',
    alternativa2: 'IsaS',
    alternativa3: 'IaSS',
    alternativa4: 'IaaS',
    correta: 'IaaS',
}

q[3] = {
    perguntaQuestao: 'Quais os tipos de modelo de implementação em Nuvem?',

    alternativa1: 'Nuvem Pública, Nuvem Híbrida, Nuvem Computacional.',

    alternativa2: 'Nuvem Privada, Nuvem Computacional, Nuvem Pública.',

    alternativa3: 'Nuvem Pública, Nuvem Privada, Nuvem híbrida.',

    alternativa4: 'Nuvem Computacional, Nuvem Híbrida, Nuvem Privada.',

    correta: 'Nuvem Pública, Nuvem Privada, Nuvem híbrida.',
}

q[4] = {
    perguntaQuestao: 'Acessar um serviço na web que é gerenciado por terceiros e que utiliza uma interface criada pelo cliente, é caracteristica da: ',
    alternativa1: 'Nuvem Híbrida',
    alternativa2: 'SaaS',
    alternativa3: 'Nuvem Pública',
    alternativa4: 'Pay-Per-Use',
    correta: 'SaaS',
}

q[5] = {
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
    sumirBotao()
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4

}



//FUNÇÃO PARA DESABILITAR OS BOTES APÓS O QUIZ
function sumirBotao(){
    if (cont == 5){
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        voltar.style.display = 'block'
        contagemAcertos.textContent = 'Acertos:' + acertos + '/5'
    }
    
}