class Selecao {
  Name;
  Vitorias = 0;
  Empates = 0;
  Pontos = 0;
  SaldoDeGols = 0;

  constructor(name){
    this.Name = name
  }

  vencer() {
    this.Vitorias++;
  }

  saldarGols(valor) {
    this.SaldoDeGols += valor;
  }

  pontuar() {
    this.Pontos = this.Empates * pontosEmpate + this.Vitorias * pontosVitoria;
  }}
var SelecoesGrupo = [`time1`, `time2`, `time3`, `time4`, `time5`, `time6`, `time7`, `time8`, `time9`, `time10`, `time11`, `time12`, `time13`, `time14`, `time15`, `time16`, `time17`, `time18`, `time19`, `time20`, `time21`, `time22`, `time23`, `time24`, `time25`, `time26`, `time27`, `time28`, `time29`, `time30`, `time31`, `time32`]
let SelecoesNome = [];
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
      joblist = http.responseType["json"];
      joblist = http.responseText;
    }
  };
  joblist = JSON.parse(joblist);

  
 
    SelecoesNome = joblist.Result
    
    /*for (i = 0; i < 32; i++) {
      `time${[i]}` = new Selecao(`${SelecoesNome[i].Token}`, `${SelecoesNome[i].Name}`)
     }*/
  
    
  /*for (i = 0; i < 3; i++) {
     new Selecao (
      Selecao.Token = SelecoesNome[i].Token,
      Selecao.Name = SelecoesNome[i].Name
    ) 
  }*/
  /*var i = 0
  SelecoesNome.forEach(element => {
    SelecoesGrupo[i] = new Selecao(SelecoesNome[i].Name)  
     i++  
  });*/
  return joblist
}


