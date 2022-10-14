let pontosVitoria = 3
let pontosEmpate = 1

function calculaPontos(vitorias, empates) {
    var pontosTotal = pontosEmpate * empates + pontosVitoria * vitorias
    return pontosTotal
}