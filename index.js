
let nome = "Pietro";
var xp = 0;

if (xp < 1001) {
    console.log(nome + " é ferro!")
} else if ((xp > 1001) && (xp < 2000)) {
    console.log(nome + " é bronze!")
} else if ((xp > 2001) && (xp < 5000)) {
    console.log(nome + " é prata!")
} else if ((xp > 5001) && (xp < 7000)) {
    console.log(nome + " é ouro!")
} else if ((xp > 7001) && (xp < 8000)) {
    console.log(nome + " é platina!")
} else if ((xp > 8001) && (xp < 9000)) {
    console.log(nome + " é ascendente!")
} else if ((xp > 9001) && (xp < 10000)) {
    console.log(nome + " é imortal!")
} else if ((xp >= 10001)) {
    console.log(nome + " é radiante!");
} else {
    console.log(nome + " não é rankeado!")
}

/*for (var xp = 0; xp < 1001; xp++) {
  console.log(nome + " o seu " + xp + " é ferro" );
}  teste com for*/

/*i=0;
do {
    i += 1;
    xp += i + " ";
  } while (i < 1000);

  console.log("Seu xp é " + i + " " + nome + " Portanto você é ferro!");

  teste com do while/*