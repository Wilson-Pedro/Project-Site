var a1 = document.getElementById('A1')
var a2 = document.getElementById('A2')
var a3 = document.getElementById('A3')
var a4 = document.getElementById('A4')
var pergunta = document.getElementById('pergunta')
var numQuest = document.getElementById('numeroQuestao')
var container = document.querySelector('.container')
var start = document.getElementById('Start')
var contagemAcertos = document.getElementById('pontosAcertos')
const voltar = document.getElementById('voltar')
var cont = 0
var acertos = 0
var nQuestao = 0
var q = [5]


// QUESTÕES
q[0] = {
    perguntaQuestao: 'Qual tipo de software se aplica nesta frase?" É um software que trabalha com a execução ordenada de tarefas a fim de coletar dados e fazer a organização de informações, em outras palavras, o processamento de dados."',

    alternativa1: "Software de programação",

    alternativa2: "Software de sistema",

    alternativa3: "Software aplicativo",

    alternativa4: "Nenhumas das alternativas",

    correta: "Software de programação",
}

q[1] = {
    perguntaQuestao: 'O que é software ?',

    alternativa1: "São aqueles que não interferem diretamente no desenvolvimento do sistema propriamente dito",

    alternativa2: "É um processo que comprova documentalmente que o sistema cumpre com as funções das quais foi designado",

    alternativa3: "É uma sequência de instruções escritas para serem interpretadas por um computador",

    alternativa4: "Nenhuma das Alternativas",

    correta: "É uma sequência de instruções escritas para serem interpretadas por um computador",
}

q[2] = {
    perguntaQuestao: 'Quais são os atributos para um bom software ?',

    alternativa1: "Flexibilidade,Usabilidade,Teste e Manutenção",

    alternativa2:"Usabilidade,Teste,Eficiência e Manutenibilidade",

    alternativa3: "Manutenibilidade,Eficiência, Manutenção e Flexibilidade ",

    alternativa4:"Flexibilidade,Usabilidade, Eficiência e Manutenibilidade" ,

    correta:"Flexibilidade,Usabilidade, Eficiência e Manutenibilidade",
}

q[3] = {
    perguntaQuestao: 'Para que serve um Engenheiro de Software?',

    alternativa1: "Serve para criar documentação volumosa e desnecessária que certamente nos atrasará",

    alternativa2: "Serve para fornecer a funcionalidade e o desempenho requeridos para o usuário e deve ser manutenível, confiável e aceitável para o software",

    alternativa3:"Serve para buscar novos métodos para desenvolver e gerenciar sistemas e aplicativos da melhor forma para o software" ,

    alternativa4: "Nenhuma das alternativas está certa.",

    correta: "Serve para buscar novos métodos para desenvolver e gerenciar sistemas e aplicativos da melhor forma para o software",
}

q[4] = {
    perguntaQuestao: 'Sommervile apresenta três tipos de testes de usuário. Quais são eles ?',
    alternativa1: "Teste unitário,Teste de componente (ou integração) e Teste de sistema",

    alternativa2: "Teste alfa , Teste beta e Teste de aceitação",

    alternativa3: "Testes baseados em requisitos,Testes de cenário e Testes de desempenho",

    alternativa4:" Todas as alternativas então erradas " ,
    
    correta: "Teste alfa , Teste beta e Teste de aceitação",
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