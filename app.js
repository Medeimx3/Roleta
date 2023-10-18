const reiEspadas_div = document.getElementById(`ke`);
const reiCopas_div = document.getElementById(`kc`);
const reiPaus_div = document.getElementById(`kp`);
const reiOuros_div = document.getElementById(`ko`);
const jogador1_span = document.getElementById(`jogador1`);
const jogador2_span = document.getElementById(`jogador2`);
const jogador3_span = document.getElementById(`jogador3`);
const jogador4_span = document.getElementById(`jogador4`);
const instruncoes_span = document.getElementById(`instruncao`);
const resultado_span = document.getElementById(`resultados`);
const morteEscolhida = escolhaMorte();
let decisoesE = "";
let decisoesC = "";
let decisoesP = "";
let decisoesO = "";
let nJogador = 0;


function escolha(escolha) {
  nJogador++
  if (nJogador == 1 && escolha == `ke`) {
    jogador1_span.innerHTML = `JOGADOR 1 ESCOLHEU: REI DE ESPADAS`;
    instruncoes_span.innerHTML = `O jogador 1 fez sua escolha, sua vez jogador 2!`;
    decisoesE = "ke1";
  }
  else if (nJogador == 1 && escolha == `kc`) {
    jogador1_span.innerHTML = `JOGADOR 1 ESCOLHEU: REI DE COPAS`;
    instruncoes_span.innerHTML = `O jogador 1 fez sua escolha, sua vez jogador 2!`;
    decisoesC = `kc1`;
  }
  else if (nJogador == 1 && escolha == `kp`) {
    jogador1_span.innerHTML = `JOGADOR 1 ESCOLHEU: REI DE PAUS`;
    instruncoes_span.innerHTML = `O jogador 1 fez sua escolha, sua vez jogador 2!!`;
    decisoesP = `kp1`;
  }
  else if (nJogador == 1 && escolha == `ko`) {
    jogador1_span.innerHTML = `JOGADOR 1 ESCOLHEU: REI DE OUROS`;
    instruncoes_span.innerHTML = `O jogador 1 fez sua escolha, sua vez jogador 2!`;
    decisoesO = `ko1`;
  }
  else if (nJogador == 2 && escolha == `ke`) {
    jogador2_span.innerHTML = `JOGADOR 2 ESCOLHEU: REI DE ESPADAS`;
    instruncoes_span.innerHTML = `Jogador 3 faça sua escolha agora!`;
    decisoesE = `ke2`;
  }
  else if (nJogador == 2 && escolha == `kc`) {
    jogador2_span.innerHTML = `JOGADOR 2 ESCOLHEU: REI DE COPAS`;
    instruncoes_span.innerHTML = `Jogador 3 faça sua escolha agora!`;
    decisoesC = `kc2`;
  }
  else if (nJogador == 2 && escolha == `kp`) {
    jogador2_span.innerHTML = `JOGADOR 2 ESCOLHEU: REI DE PAUS`;
    instruncoes_span.innerHTML = `Jogador 3 faça sua escolha agora!`;
    decisoesP = `kp2`;
  }
  else if (nJogador == 2 && escolha == `ko`) {
    jogador2_span.innerHTML = `JOGADOR 2 ESCOLHEU: REI DE OUROS`;
    instruncoes_span.innerHTML = `Jogador 3 faça sua escolha agora!`;
    decisoesO = `ko2`;
  }
  else if (nJogador == 3 && escolha == `ke`) {
    jogador3_span.innerHTML = `JOGADOR 3 ESCOLHEU: REI DE ESPADAS`;
    instruncoes_span.innerHTML = `Jogador 4 escolha um rei!`;
    decisoesE = `ke3`;
  }
  else if (nJogador == 3 && escolha == `kc`) {
    jogador3_span.innerHTML = `JOGADOR 3 ESCOLHEU: REI DE COPAS`;
    instruncoes_span.innerHTML = `Jogador 4 escolha um rei!`;
    decisoesC = `kc3`;
  }
  else if (nJogador == 3 && escolha == `kp`) {
    jogador3_span.innerHTML = `JOGADOR 3 ESCOLHEU: REI DE PAUS`;
    instruncoes_span.innerHTML = `Jogador 4 escolha um rei!`;
    decisoesP = `kp3`;
  }
  else if (nJogador == 3 && escolha == `ko`) {
    jogador3_span.innerHTML = `JOGADOR 3 ESCOLHEU: REI DE OUROS`;
    instruncoes_span.innerHTML = `Jogador 4 escolha um rei!`;
    decisoesO = `ko3`;
  }
  else if (nJogador == 4 && escolha == `ke`) {
    jogador4_span.innerHTML = `JOGADOR 4 ESCOLHEU: REI DE ESPADAS`;
    instruncoes_span.innerHTML = `Todos jogadores já escolheram seus reis!`;
    resultado_span.innerHTML = `Clique agora em disparar!`;
    decisoesE = `ke4`;
  }
  else if (nJogador == 4 && escolha == `kc`) {
    jogador4_span.innerHTML = `JOGADOR 4 ESCOLHEU: REI DE COPAS`;
    instruncoes_span.innerHTML = `Todos jogadores já escolheram seus reis!`;
    resultado_span.innerHTML = `Clique agora em disparar!`;
    decisoesC = `kc4`;
  }
  else if (nJogador == 4 && escolha == `kp`) {
    jogador4_span.innerHTML = `JOGADOR 4 ESCOLHEU: REI DE PAUS`;
    instruncoes_span.innerHTML = `Todos jogadores já escolheram seus reis!`;
    resultado_span.innerHTML = `Clique agora em disparar!`;
    decisoesP = `kp4`;
  }
  else if (nJogador == 4 && escolha == `ko`) {
    jogador4_span.innerHTML = `JOGADOR 4 ESCOLHEU: REI DE OUROS`;
    instruncoes_span.innerHTML = `Todos jogadores já escolheram seus reis!`;
    resultado_span.innerHTML = `Clique agora em disparar!`;
    decisoesO = `ko4`;
  }
}

function escolhaMorte() {
  const opcoes = [`ke`, `kc`, `kp`, `ko`];
  const randomNumber = (Math.floor(Math.random() * 4));
  return opcoes[randomNumber];
}

function game() {
  console.log(morteEscolhida);
  if (morteEscolhida == `ke`) {
    switch (morteEscolhida + decisoesE) {
      case `keke1`:
        keMorte1(morteEscolhida);
        break;
      case `keke2`:
        keMorte2(morteEscolhida);
        break;
      case `keke3`:
        keMorte3(morteEscolhida);
        break;
      case `keke4`:
        keMorte4(morteEscolhida);
        break;
    }
  }
  else if (morteEscolhida == `kc`) {
    switch (morteEscolhida + decisoesC) {
      case `kckc1`:
        kcMorte1(morteEscolhida);
        break;
      case `kckc2`:
        kcMorte2(morteEscolhida);
        break;
      case `kckc3`:
        kcMorte3(morteEscolhida);
        break;
      case `kckc4`:
        kcMorte4(morteEscolhida);
        break;
    }
  }
  else if (morteEscolhida == `kp`) {
    switch (morteEscolhida + decisoesP) {
      case `kpkp1`:
        kpMorte1(morteEscolhida);
        break;
      case `kpkp2`:
        kpMorte2(morteEscolhida);
        break;
      case `kpkp3`:
        kpMorte3(morteEscolhida);
        break;
      case `kpkp4`:
        kpMorte4(morteEscolhida);
        break;
    }
  }
  else if (morteEscolhida == `ko`) {
    switch (morteEscolhida + decisoesO) {
      case "koko1":
        koMorte1(morteEscolhida);
        break;
      case "koko2":
        koMorte2(morteEscolhida);
        break;
      case `koko3`:
        koMorte3(morteEscolhida);
        break;
      case `koko4`:
        koMorte4(morteEscolhida);
        break;
    }
  }
}

function keMorte1() {
  document.getElementById(`ke`).classList.add(`alertaVermelho`);
  document.getElementById(`resultados`).classList.add(`textomorte`);
  resultado_span.innerHTML = `O rei de espadas do jogador 1 morreu!`;
}

function keMorte2() {
  document.getElementById(`ke`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de espadas do jogador 2 morreu!`;
}

function keMorte3() {
  document.getElementById(`ke`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de espadas do jogador 3 morreu!`;
}

function keMorte4() {
  document.getElementById(`ke`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de espadas do jogador 4 morreu!`;
}

function kcMorte1() {
  document.getElementById(`kc`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de copas do jogador 1 morreu!`;
}

function kcMorte2() {
  document.getElementById(`kc`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de copas do jogador 2 morreu!`;
}

function kcMorte3() {
  document.getElementById(`kc`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de copas do jogador 3 morreu!`;
}

function kcMorte4() {
  document.getElementById(`kc`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de copas do jogador 4 morreu!`;
}

function kpMorte1() {
  document.getElementById(`kp`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de paus do jogador 1 morreu!`;
}

function kpMorte2() {
  document.getElementById(`kp`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de paus do jogador 2 morreu!`;
}

function kpMorte3() {
  document.getElementById(`kp`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de paus do jogador 3 morreu!`;
}

function kpMorte4() {
  document.getElementById(`kp`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de paus do jogador 4 morreu!`;
}

function koMorte1() {
  document.getElementById(`ko`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de ouros do jogador 1 morreu!`;
}

function koMorte2() {
  document.getElementById(`ko`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de ouros do jogador 2 morreu!`;
}

function koMorte3() {
  document.getElementById(`ko`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de ouros do jogador 3 morreu!`;
}

function koMorte4() {
  document.getElementById(`ko`).classList.add(`alertaVermelho`);
  resultado_span.innerHTML = `O rei de ouros do jogador 4 morreu!`;
}

function main() {
  reiEspadas_div.addEventListener('click', () => escolha(`ke`));
  reiCopas_div.addEventListener('click', () => escolha(`kc`));
  reiPaus_div.addEventListener('click', () => escolha(`kp`));
  reiOuros_div.addEventListener('click', () => escolha(`ko`));
}

function recarregar() {
  window.location.reload();
}

main();
