  function sorteia
  /*for (i = 0; i < selecoesSorteadasNome.length; i++) {
    let selecaoSorteada = Math.floor(
      Math.random() * selecoesSorteadasNome.length
    );

    while (verificaNumerosIguais(selecaoSorteada)) {
      selecaoSorteada = Math.floor(
        Math.random() * selecoesSorteadasNome.length
      );
      //console.log("Try Again")
    }
    let selecao = selecoesSorteadasNome[selecaoSorteada];
    selecoesSorteadas.push(selecaoSorteada);
  }*/

  function verificaNumerosIguais(y) {
    var item = y;
    if (selecoesSorteadas.indexOf(item) > -1) {
      //console.log("Encontrou");
      return true;
    }
}
