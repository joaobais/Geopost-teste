export class Selecao {
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