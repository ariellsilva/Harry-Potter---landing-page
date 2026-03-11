const personagens = {
  harry:{
    nome:"Harry Potter",
    descricao: "Harry Potter é um jovem bruxo conhecido por sobreviver ao ataque de um dos maiores bruxos das trevas quando ainda era bebê. Ao entrar em Hogwarts, descobre seu verdadeiro lugar no mundo da magia e enfrenta diversos desafios ao longo de sua jornada.",
    img:"img/harry gif.gif"
  },
  hermione:{
    nome:"Hermione Granger",
    descricao:"Hermione Granger é uma das bruxas mais inteligentes de sua geração. Filha de trouxas, ela se destaca em Hogwarts por sua dedicação aos estudos, raciocínio rápido e enorme conhecimento sobre magia. Além disso, sua lealdade e coragem fazem dela uma peça fundamental nas aventuras ao lado de Harry e Ron.",
    img:"img/hermione gif.gif"
  },
  rony:{
    nome:"Rony Weasley",
    descricao:"Ron Weasley é o melhor amigo de Harry Potter e membro de uma tradicional família bruxa. Apesar de às vezes se sentir inseguro, Ron demonstra grande coragem e lealdade quando seus amigos precisam. Seu bom humor e sua amizade verdadeira fazem dele uma parte essencial do trio.",
    img:"img/ron gif.gif"
  },
  valdemort:{
    nome:"Lord Voldemort",
    descricao:"Lord Voldemort é um dos bruxos das trevas mais temidos da história. Obcecado por poder e imortalidade, ele busca dominar o mundo mágico e eliminar aqueles que considera inferiores. Sua ligação com Harry Potter marca toda a história e dá início a uma grande batalha entre o bem e o mal.",
    img:"img/voldemort.gif"
  },
  dumbledor:{
    nome:"Alvo Dumbledore",
    descricao:"Albus Dumbledore é o diretor de Hogwarts e um dos bruxos mais poderosos e respeitados do mundo mágico. Conhecido por sua sabedoria, gentileza e grande conhecimento sobre magia, ele guia Harry em momentos importantes e desempenha um papel crucial na luta contra Voldemort.",
    img:"img/dumbledore.gif"
  }
};

function trocar(personagem){

    document.getElementById("nome").innerText = 
    personagens[personagem].nome;

    document.getElementById("descricaoTexto").innerText = 
    personagens[personagem].descricao;

    document.getElementById("imagemPrincipal").src = 
    personagens[personagem].img;
}

const modal = document.querySelector("#modal")
const button = document.querySelector("button")

function saberMais(){
  modal.showModal()
}
function fechar(){
  modal.close()
}



///Harry casas

const modal1 = document.querySelector("#modal1")

function informar(){
  modal1.showModal()
}

function minimizar(){
  modal1.close()
}


const modal2 = document.querySelector("#modal2")

function saber(){
 modal2.showModal()
}

function fechando(){
  modal2.close()
}


const modal3 = document.querySelector("#modal3")

function checar(){
  modal3.showModal()
}

function sair(){
  modal3.close()
}


const modal4 = document.querySelector("#modal4")

function saberSobre(){
  modal4.showModal()
}

function pular(){
  modal4.close()
}