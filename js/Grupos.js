// selecoes vao vir pela API
const timesContainer = document.getElementById("timesContainer");
const todasSelecoes = [
  1, 22, 333, 66, 777, 8888, 999, "Qatar", "Franca", 121212, "Brasil", 4444, 55555,
];
const selecoesSorteadas = [];
const selecoesSorteadasNome = [];
const grupoA = [];
const grupoB = [];
const grupoC = [];
const grupoD = [];
const grupoE = [];
const grupoF = [];
const grupoG = [];
const grupoH = [];

// Randomizando os times/selecoes

function verificaNumerosIguais(y) {
  var item = y;
  if (selecoesSorteadas.indexOf(item) > -1) {
    //console.log("Encontrou");
    return true;
  }
}

function randomizeTeams() {
  for (i = 0; i < todasSelecoes.length; i++) {
    let selecaoSorteada = Math.floor(Math.random() * todasSelecoes.length);

    while (verificaNumerosIguais(selecaoSorteada)) {
      selecaoSorteada = Math.floor(Math.random() * todasSelecoes.length);
      //console.log("Try Again")
    }
    let selecao = todasSelecoes[selecaoSorteada];
    selecoesSorteadasNome.push(selecao) 
    selecoesSorteadas.push(selecaoSorteada);
  }
  console.log(selecoesSorteadasNome);
  randomizeGroups(selecoesSorteadasNome);

  document.getElementById("btnRandomize").disabled = true;
}

function randomizeGroups(x) {
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 4; i < 8; i++) {
    grupoB.push(x[i])
  }
  for (i = 8; i < 12; i++) {
    grupoC.push(x[i])
  }
 /* for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i])
  }*/
}
