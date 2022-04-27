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
    perguntaQuestao: 'A segurança da informação envolve um conjunto de medidas que são necessárias para garantir:',

    alternativa1: 'segurança, estabilidade, confiabilidade',

    alternativa2: 'integridade, confiabilidade e disponibilidade',

    alternativa3: 'confiabilidade, segurança, disponibilidade',

    alternativa4: 'integridade, segurança, interabilidade',

    correta: 'integridade, confiabilidade e disponibilidade',
}

q[1] = {
    perguntaQuestao: '"Garantir que as informções não sejam acessados e utilizados por pessoas não autorizadas"',
    alternativa1: 'disponibilidade',
    alternativa2: 'integridade',
    alternativa3: 'confiabilidade',
    alternativa4: 'segurança',
    correta: 'confiabilidade',
}

q[2] = {
    perguntaQuestao: 'Garantir que as informações vão está disponíveis a qualquer momento é função da:',
    alternativa1: 'disponibilidade',
    alternativa2: 'integridade',
    alternativa3: 'segurança',
    alternativa4: 'interabilidade',
    correta: 'disponibilidade',
}

q[3] = {
    perguntaQuestao: '"Enganar pessoas para que compartilhem informações confidenciais" Essa frase se refere a:',
    alternativa1: 'Cavalo De Troia',
    alternativa2: 'Ransomware',
    alternativa3: 'Phishing',
    alternativa4: 'Sniffer',
    correta: 'Phishing',
}

q[4] = {
    perguntaQuestao: 'Qual o nome do software que analisa e monitora o tráfego dentro de uma determinada rede ?',
    alternativa1: 'Sniffer',
    alternativa2: 'Malware',
    alternativa3: 'Cavalo de Troia',
    alternativa4: 'Ransomware',
    correta: 'Sniffer',
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