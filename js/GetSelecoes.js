//let selecoesSorteadasNome = [];
let SelecoesNome = [];
class Selecao {
  Token;
  Name;
  Vitorias;
  Empates;
  Pontos;
  SaldoDeGols;

  vencer() {
    this.Vitorias++;
  }

  saldarGols(valor) {
    this.SaldoDeGols += valor;
  }

  pontuar() {
    this.Pontos = this.Empates * pontosEmpate + this.Vitorias * pontosVitoria;
  }
}
function httpGetAsync() {
  var jobendpoint = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
  var http = new XMLHttpRequest();
  http.open("GET", jobendpoint, false);
  http.setRequestHeader("Accept", "application/json");
  http.setRequestHeader("Content-type", "application/json");
  http.setRequestHeader("git-user", "joaobais");
  http.send();
  var joblist = http.responseText;
  http.onreadystatechange = function () {
    //Call a function when the state changes.
    if (http.readyState === XMLHttpRequest.DONE && http.status == 200) {
      //joblist = http.responseType["json"];
      joblist = http.responseText;
    }
  };
  joblist = JSON.parse(joblist);
  /*for (i = 0; i < 32; i++) {
    SelecoesNome.push(joblist.Result[i].Name)
  }

  for (i = 0; i < 32; i++) {
    SelecoesNome[i] = new Selecao (
      SelecoesNome[i].Token = joblist.Result[i].Token,
      joblist.Result[i].Name = joblist.Result[i].Name,
      SelecoesNome[i].Vitorias = 0,
      SelecoesNome[i].Empates= 0,
      SelecoesNome[i].Pontos=0,
      SelecoesNome[i].SaldoDeGols=0
    )
  }*/

  return joblist;
}
