//Grupos e Seleções
const timesContainer = document.getElementById("timesContainer");
const TabelaGrupoFases = document.getElementById("TabelaGrupoFases");
const todasSelecoes = [];
const selecoesSorteadas = [];
let grupos = [];

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
  selecoesSorteadasNome = selecoesSorteadasNome.sort(() => Math.random() - 0.5);
  //console.log(selecoesSorteadasNome);
  randomizeGroups(selecoesSorteadasNome);
  // document.getElementById("btnRandomize").disabled = true;
}

function randomizeGroups(x) {
  for (i = 0; i < 4; i++) {
    grupoA.push(x[i]);
  }
  for (i = 4; i < 8; i++) {
    grupoB.push(x[i]);
  }
  for (i = 8; i < 12; i++) {
    grupoC.push(x[i]);
  }
  for (i = 12; i < 16; i++) {
    grupoD.push(x[i]);
  }
  for (i = 16; i < 20; i++) {
    grupoE.push(x[i]);
  }
  for (i = 20; i < 24; i++) {
    grupoF.push(x[i]);
  }
  for (i = 24; i < 28; i++) {
    grupoG.push(x[i]);
  }
  for (i = 28; i < 32; i++) {
    grupoH.push(x[i]);
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
 }

  
function simulaCampeonato() {
  TabelaGrupoFases.innerHTML += `<th> Grupo A </th>`
  for ( var i = 0; i < 3; i++) {
    var primeiroTime = grupoA[0]
    var segundoTime = grupoA[i+1]
    TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime} x ${segundoTime} </td>
    <td> ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</td>`
    
  }
  for ( var i = 0; i < 2; i++) {
    var primeiroTime = grupoA[1]
    var segundoTime = grupoA[i + 2]
    TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime} x ${segundoTime} </td>
    <td> ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</td>`
    
  }
  for ( var i = 0; i < 1; i++) {
    var primeiroTime = grupoA[2]
    var segundoTime = grupoA[3]
    TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime} x ${segundoTime} </td>
    <td>${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</td>`
    
  }
}