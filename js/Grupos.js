//Grupos e Seleções
const timesContainer = document.getElementById("timesContainer");
const TabelaGrupoFases = document.getElementById("TabelaGrupoFases");
const TabelaClassificatoria = document.getElementById("TabelaClassificatoria");
const TabelaFiller = document.getElementsByClassName("TabelaFiller");
const TabelaFaseDeGrupos =
  document.getElementsByClassName("TabelaFaseDeGrupos");

let colocados = []

let todasSelecoes = [];
const selecoesSorteadas = [];
let grupos = [];
let GruposTeste = [
  "Grupo A",
  "Grupo B",
  "Grupo C",
  "Grupo D",
  "Grupo E",
  "Grupo F",
  "Grupo G",
  "Grupo H",
];
selecoesSorteadasNome = httpGetAsync();
todasSelecoes = httpGetAsync();
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
    selecoesSorteadasNome.Result[i].Grupo;
    selecoesSorteadasNome.Result[i].ContarVitoria = function () {
      return this.Vitorias++;
    };
    selecoesSorteadasNome.Result[i].ContarEmpate = function () {
      return this.Empates++;
    };
    selecoesSorteadasNome.Result[i].ContarSaldoDeGols = function (valor) {
      return (this.SaldoDeGols += valor);
    };
    selecoesSorteadasNome.Result[i].ContarPontos = function () {
      pontosTotal = this.Empates * pontosEmpate + this.Vitorias * pontosVitoria;
      return (this.Pontos += pontosTotal);
    };
    i++;
  });
  selecoesSorteadasNome.Result = selecoesSorteadasNome.Result.sort(
    () => Math.random() - 0.5
  );

  //console.log(selecoesSorteadasNome);
  randomizeGroups(selecoesSorteadasNome.Result);

  //document.getElementById("btnRandomize").disabled = true;
}
function randomizeGroups(listaDeSelecoes) {
  for (i = 0; i < 4; i++) {
    grupoA.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `A`
  }
  for (i = 4; i < 8; i++) {
    grupoB.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `B`
  }
  for (i = 8; i < 12; i++) {
    grupoC.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `C`
  }
  for (i = 12; i < 16; i++) {
    grupoD.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `D`
  }
  for (i = 16; i < 20; i++) {
    grupoE.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `E`
  }
  for (i = 20; i < 24; i++) {
    grupoF.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `F`
  }
  for (i = 24; i < 28; i++) {
    grupoG.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `G`
  }
  for (i = 28; i < 32; i++) {
    grupoH.push(listaDeSelecoes[i].Name);
    selecoesSorteadasNome.Result[i].Grupo = `H`
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
  simulaCampeonato(selecoesSorteadasNome.Result);
}

function simulaCampeonato(lista) {
  //console.log(lista)
  var indice = 0;
  grupos.forEach((element) => {
    TabelaGrupoFases.innerHTML += `<tbody ><tr ><th class="TabelaDeGrupos">${element.nome} </th></tr>
    <tr class="TabelaFaseDeGrupos"></tr></tbody>`;

    //for (var j = 0; j< 4; j += 3) {
    for (var i = 0; i < 3; i++) {
      var primeiroTime = lista[0 + indice];
      var segundoTime = lista[i + 1 + indice];
      var primeiroResultado = Math.floor(Math.random() * 10);
      var segundoResultado = Math.floor(Math.random() * 10);

      if (primeiroResultado > segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarVitoria();
      } else if (primeiroResultado === segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarEmpate();
        segundoTime.ContarEmpate();
      } else if (primeiroResultado < segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        segundoTime.ContarVitoria();
      }
      TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime.Name} x ${segundoTime.Name} </td>
    <td> ${primeiroResultado} x ${segundoResultado}</td>`;
    }

    //lista.shift()
    //lista.shift()

    for (var i = 0; i < 2; i++) {
      var primeiroTime = lista[1 + indice];
      var segundoTime = lista[i + 2 + indice];
      var primeiroResultado = Math.floor(Math.random() * 10);
      var segundoResultado = Math.floor(Math.random() * 10);
      if (primeiroResultado > segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarVitoria();
      } else if (primeiroResultado === segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarEmpate();
        segundoTime.ContarEmpate();
      } else if (primeiroResultado < segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        segundoTime.ContarVitoria();
      }
      TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime.Name} x ${segundoTime.Name} </td>
    <td> ${primeiroResultado} x ${segundoResultado}</td>`;
    }
    //lista.shift();

    for (var i = 0; i < 1; i++) {
      var primeiroTime = lista[2 + indice];
      var segundoTime = lista[3 + indice];
      var primeiroResultado = Math.floor(Math.random() * 10);
      var segundoResultado = Math.floor(Math.random() * 10);
      if (primeiroResultado > segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarVitoria();
      } else if (primeiroResultado === segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        primeiroTime.ContarEmpate();
        segundoTime.ContarEmpate();
      } else if (primeiroResultado < segundoResultado) {
        primeiroTime.ContarSaldoDeGols(primeiroResultado);
        segundoTime.ContarSaldoDeGols(segundoResultado);
        segundoTime.ContarVitoria();
      }
      //console.log(lista)
      TabelaGrupoFases.innerHTML += `</tr>
    <td> ${primeiroTime.Name} x ${segundoTime.Name} </td>
    <td> ${primeiroResultado} x ${segundoResultado}</td>`;
    }

    indice += 4;
    //lista.shift();
  });
}

/*function criaTabela() {
  TabelaFaseDeGrupos.innerHTML = `<tr>
  <td>oi</td>
  </tr>`
 */
  function defineTabela(){
    console.log(selecoesSorteadasNome.Result)
    colocados = selecoesSorteadasNome.Result
    /*for (var i = 0; i < 4; i++) {
       
       
       
       //[i].Pontos.sort(function(a, b){
        //return b - a;
    }/*);
      
    }*/
    //console.log(colocados)
  }

function tabelaClassificatoria() {
  var i = 0;
  selecoesSorteadasNome.Result.forEach((element) => {
    selecoesSorteadasNome.Result[i].ContarPontos();
    i++;
  });
  //aqui precisa de um loop de 4 em 4, que ordena os pontos de maior para menor, tira as 4 equipes e repeat

  for (var i = 0; i < 4; i++){

  }
  var primeiroColado = selecoesSorteadasNome.Result[0];
  var segundoColado = selecoesSorteadasNome.Result[1];
  var terceiroColado = selecoesSorteadasNome.Result[2];
  var quartoColado = selecoesSorteadasNome.Result[3];
  


  grupos.forEach((element) => {
    selecoesSorteadasNome.Result.forEach((time) => {
      console.log(time)
        if (this.time.Grupo === time.Grupo){

    }
    });
   
    TabelaClassificatoria.innerHTML += `<tbody className="TabelaFiller"<tr><th>${element.nome}</th><th>Pontos</th><th>Saldo de Gols</th></tr></tbody>`;
    TabelaClassificatoria.innerHTML += `
                                <tr>
                                  <td>${primeiroColado.Name}</td><td>${primeiroColado.Pontos}</td><td>${primeiroColado.SaldoDeGols}<td>
                                </tr>
                                <tr>
                                  <td>${segundoColado.Name}</td><td>${segundoColado.Pontos}</td><td>${segundoColado.SaldoDeGols}<td>
                                </tr>
                                <tr>
                                  <td>${terceiroColado.Name}</td><td>${terceiroColado.Pontos}</td><td>${terceiroColado.SaldoDeGols}<td>
                                </tr>
                                <tr>
                                  <td>${quartoColado.Name}</td><td>${quartoColado.Pontos}</td><td>${quartoColado.SaldoDeGols}<td>
                                </tr>`;
  });
console.log(primeiroColado.SaldoDeGols)
  

  //console.log(selecoesSorteadasNome.Result);
}
