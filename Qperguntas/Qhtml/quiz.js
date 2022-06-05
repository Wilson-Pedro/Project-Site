var a1 = document.getElementById('A1')
var a2 = document.getElementById('A2')
var a3 = document.getElementById('A3')
var a4 = document.getElementById('A4')
var pergunta = document.getElementById('pergunta')
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
    perguntaQuestao: 'HTML é uma linguagem de:',
    alternativa1: 'Programação',
    alternativa2: 'Computação',
    alternativa3: 'Software',
    alternativa4: 'Marcação',
    correta: 'Marcação',
}

q[1] = {
    perguntaQuestao: 'Os códigos que definem a estruta de páginas são:',
    alternativa1: 'Tags',
    alternativa2: 'Python',
    alternativa3: 'Java',
    alternativa4: 'C#',
    correta: 'Tags',
}

q[2] = {
    perguntaQuestao: 'Qual tag define um rodapé?',
    alternativa1: '<div>',
    alternativa2: '<p>',
    alternativa3: '<footer>',
    alternativa4: '<form>',
    correta: '<footer>',
}

q[3] = {
    perguntaQuestao: 'Qual tag define uma imagem?',
    alternativa1: '<imagem>',
    alternativa2: '<image>',
    alternativa3: '<img>',
    alternativa4: '<a>',
    correta: '<img>',
}

q[4] = {
    perguntaQuestao: 'Quais dessas tags NÃO é uma tag HTML?',
    alternativa1: '<hover>',
    alternativa2: '<li>',
    alternativa3: '<input>',
    alternativa4: '<p>',
    correta: '<hover>',
}

q[5] = {
    perguntaQuestao: 'Quiz Finalizado',
    
}

// BOTÃO PARA INICICAR O QUIZ
function iniciar() {
    container.style.display = 'block'
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
    start.style.display = 'none'
    contagemAcertos.textContent = 'Acertos:' + acertos + '/5'

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
    contagemAcertos.textContent = 'Acertos:' + acertos + '/5'

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