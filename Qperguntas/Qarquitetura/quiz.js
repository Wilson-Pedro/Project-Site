var a1 = document.getElementById('A1')
var a2 = document.getElementById('A2')
var a3 = document.getElementById('A3')
var a4 = document.getElementById('A4')
var pergunta = document.getElementById('pergunta')
var numQuest = document.getElementById('numeroQuestao')
var container = document.querySelector('.container')
var start = document.getElementById('Start')
var contagemAcertos = document.getElementById('pontosAcertos')
var voltar = document.getElementById('voltar')
var cont = 0
var acertos = 0
var nQuestao = 0
var q = [5]


// QUESTÕES
q[0] = {
    perguntaQuestao: 'O que é arquitetura de software?."',

    alternativa1: "São as ferramentas usadas pelo programador para desenvolver novos softwares e programas.",

    alternativa2: " É um sistema que abrange a forma como suas partes são organizadas, incluindo questões como o comportamento dessa estrutura e quais componentes são responsáveis por realizar um conjunto específico de funções",

    alternativa3: "É uma sequência de instruções escritas para serem interpretadas por um computador",

    alternativa4: "Nenhumas das alternativas",

    correta: " É um sistema que abrange a forma como suas partes são organizadas, incluindo questões como o comportamento dessa estrutura e quais componentes são responsáveis por realizar um conjunto específico de funções",
}

q[1] = {
    perguntaQuestao: 'Qual desta altenativas não é um beneficio de arquitetura de software ?',

    alternativa1: "Flexibilidade e Usabilidade",

    alternativa2: "Segurança das aplicações",

    alternativa3: "Alinhamento de expectativas entre os diferentes setores da empresa",

    alternativa4: "Redução de riscos ao negócio",

    correta: "Flexibilidade e Usabilidade",
}

q[2] = {
    perguntaQuestao:'"É o modelo preferido dos desenvolvedores e arquitetos de software, por permitir escalabilidade e independência dos módulos, que podem usar diferentes linguagens" Qual tipo de arquitetura de software  se encaixar nesta frase ?',

    alternativa1: "Model-view-controller (MVC)",

    alternativa2:"Layers",

    alternativa3: "Pipes-and-filters ",

    alternativa4:"Microservices" ,

    correta:"Microservices",
}

q[3] = {

    perguntaQuestao: '"Os módulos e componentes do software são organizados em camadas de funcionalidades, que podem ser desconstruídas em diferentes serviços" Que tipo de modelo é este?',

    alternativa1: "Publish-Subscribe",

    alternativa2: "Service-Oriented Architecture",

    alternativa3:"Layers" ,

    alternativa4: "Pipes-and-filters",

    correta: "Layers",

}

q[4] = {

    perguntaQuestao: 'Uma das opções abaixo não é um tipo de arquitetura de software.',

    alternativa1:"Microsoft",

    alternativa2: "Service-Oriented Architecture",

    alternativa3: "Pipes-and-filters",

    alternativa4:" Publish-Subscribe  " ,

    correta: "Microsoft",

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
    disabled_btn()
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4

    return
}



//FUNÇÃO PARA DESABILITAR OS BOTES APÓS O QUIZ
function disabled_btn(){
    if (cont == 5){
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        voltar.style.display = 'block'
        contagemAcertos.textContent = 'Acertos:' + acertos + '/5'
    }
    
    return
}