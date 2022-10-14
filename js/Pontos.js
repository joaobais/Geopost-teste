const pontosVitoria = 3
const pontosEmpate = 1

function calculaPontos(vitorias, empates) {
    var pontosTotal = pontosEmpate * empates + pontosVitoria * vitorias
    return pontosTotal
}