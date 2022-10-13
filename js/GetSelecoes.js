let selecoesSorteadasNome = [];
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
  
  for (i = 0; i < 32; i++) { 
    selecoesSorteadasNome.push(joblist.Result[i].Name)
}
  return joblist;
}

httpGetAsync()