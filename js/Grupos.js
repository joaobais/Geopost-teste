//Grupos e Seleções
const timesContainer = document.getElementById("timesContainer");
const TabelaGrupoFases = document.getElementById("TabelaGrupoFases");
const todasSelecoes = [];
const selecoesSorteadas = [];
let grupos = [];
selecoesSorteadasNome = httpGetAsync();

const grupoA = [];
const grupoB = [];
const grupoC = [];
const grupoD = [];
const grupoE = [];
const grupoF = [];
const grupoG = [];
const grupoH = [];

// Randomizando os times/selecoes

function randomizeTeams() {
  //console.log(selecoesSorteadasNome.Result[0].Name)
  var i = 0;
  selecoesSorteadasNome.Result.forEach((element) => {
    selecoesSorteadasNome.Result[i].Pontos = 0;
    selecoesSorteadasNome.Result[i].SaldoDeGols = 0;
    selecoesSorteadasNome.Result[i].Empates = 0;
    selecoesSorteadasNome.Result[i].Vitorias = 0;
    i++;
  });
  selecoesSorteadasNome.Result = selecoesSorteadasNome.Result.sort(
    () => Math.random() - 0.5
  );
  console.log(selecoesSorteadasNome.Result)
  randomizeGroups(selecoesSorteadasNome.Result);
  
  //document.getElementById("btnRandomize").disabled = true;
}
function randomizeGroups(listaDeSelecoes) {
  for (i = 0; i < 4; i++) {
    grupoA.push(listaDeSelecoes[i].Name);
  }
  for (i = 4; i < 8; i++) {
    grupoB.push(listaDeSelecoes[i].Name);
  }
  for (i = 8; i < 12; i++) {
    grupoC.push(listaDeSelecoes[i].Name);
  }
  for (i = 12; i < 16; i++) {
    grupoD.push(listaDeSelecoes[i].Name);
  }
  for (i = 16; i < 20; i++) {
    grupoE.push(listaDeSelecoes[i].Name);
  }
  for (i = 20; i < 24; i++) {
    grupoF.push(listaDeSelecoes[i].Name);
  }
  for (i = 24; i < 28; i++) {
    grupoG.push(listaDeSelecoes[i].Name);
  }
  for (i = 28; i < 32; i++) {
    grupoH.push(listaDeSelecoes[i].Name);
  }

  grupos.push(
    {
      nome: "Grupo A",
      times: grupoA,
    },
    {
      nome: "Grupo B",
      times: grupoB,
    },
    {
      nome: "Grupo C",
      times: grupoC,
    },
    {
      nome: "Grupo D",
      times: grupoD,
    },
    {
      nome: "Grupo E",
      times: grupoE,
    },
    {
      nome: "Grupo F",
      times: grupoF,
    },
    {
      nome: "Grupo G",
      times: grupoG,
    },
    {
      nome: "Grupo H",
      times: grupoH,
    }
  );
  timesContainer.innerHTML = "";
  timesContainer.innerHTML = `<table>
  <tr>
    <th>Seleções</th>
    <th>Grupos</th>
  </tr>
  ${grupos
    .map(function (grupo) {
      return `<tr>
    <td>${grupo.nome}</td>
    <td>${grupo.times.join()}</td>
  </tr>`;
    })
    .join("")}
  </table>`;
  //console.log(grupos);
  simulaCampeonato();
}

function simulaCampeonato() {
  var vitoriaPrimeiro = 0;
  var vitoriaSegunda = 0;
  var empate = 0;

  grupos.forEach((element) => {
    TabelaGrupoFases.innerHTML += `<th>${element.nome} </th>`;

    for (var i = 0; i < 3; i++) {
      var primeiroTime = element.times[0];
      var segundoTime = element.times[i + 1];
      var primeiroResultado = Math.floor(Math.random() * 10);
      var segundoResultado = Math.floor(Math.random() * 10);
      var saldoGolsPrimeiro = 0;
      var saldoGolsSegundo = 0;
      if (primeiroResultado > segundoResultado) {
        element.SaldoDeGols += 2301203 
        segundoTime.SaldoDeGols += saldoGolsSegundo;
        console.log(element)
        
      } else if (primeiroResultado == segundoResultado) {
        primeiroTime.SaldoDeGols += saldoGolsPrimeiro;
        segundoTime.SaldoDeGols += saldoGolsSegundo;
        console.log(primeiroResultado, segundoResultado);
      } else {
        console.log(primeiroResultado, segundoResultado);
      }

      TabelaGrupoFases.innerHTML += `</tr>
      <td> ${primeiroTime} x ${segundoTime} </td>
      <td> ${primeiroResultado}x${segundoResultado}</td>`;
    }
    for (var i = 0; i < 2; i++) {
      var primeiroTime = element.times[1];
      var segundoTime = element.times[i + 2];
      TabelaGrupoFases.innerHTML += `</tr>
      <td> ${primeiroTime} x ${segundoTime} </td>
      <td> ${Math.floor(Math.random() * 10)}x${Math.floor(
        Math.random() * 10
      )}</td>`;
    }
    for (var i = 0; i < 1; i++) {
      var primeiroTime = element.times[2];
      var segundoTime = element.times[3];
      TabelaGrupoFases.innerHTML += `</tr>
      <td> ${primeiroTime} x ${segundoTime} </td>
      <td>${Math.floor(Math.random() * 10)}x${Math.floor(
        Math.random() * 10
      )}</td>`;
    }
  });
}
