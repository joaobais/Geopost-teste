// selecoes vao vir pela API
const timesContainer = document.getElementById("timesContainer");
const grupoA = ["a", "b", "c", "a2", "b2", "c2"];
const grupoB = [];
const grupoC = [];
const grupoD = [];
const grupoE = [];
const grupoF = [];
const grupoG = [];
const grupoH = [];
const selecoesSorteadas = [];

// Randomizando os times/selecoes

/*function randomizeTeams() {
  for (i = 0; i < grupoA.length; i++) {
    let selecaoSorteada = Math.floor(Math.random() * grupoA.length);
    const selecao = grupoA[selecaoSorteada];

    while (selecoesSorteadas.includes(selecao)) {
      let selecaoSorteada = Math.floor(Math.random() * grupoA.length);
      const selecao = grupoA[selecaoSorteada];

      timesContainer.innerHTML += `${selecao} `;
      console.log(`repetiu`);
    }
    timesContainer.innerHTML += `${selecao}-`;
    selecoesSorteadas.push(selecaoSorteada);
    console.log(selecoesSorteadas);
  }
} */