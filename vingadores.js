const vingadores = [
  {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
  },
  {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark 85",
    velocidade: 90,
    forca: 80,
    resistencia: 85,
  },
  {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    velocidade: 80,
    forca: 100,
    resistencia: 95,
  },
  {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força bruta",
    velocidade: 70,
    forca: 100,
    resistencia: 90,
  },
  {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Artes marciais",
    velocidade: 90,
    forca: 65,
    resistencia: 70,
  },
  {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e flecha",
    velocidade: 85,
    forca: 70,
    resistencia: 75,
  },
  {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    velocidade: 75,
    forca: 100,
    resistencia: 100,
  },
];

for (let i = 0; i < vingadores.length; i++) {
  let personagem = vingadores[i];
  if (personagem.codinome !== "Titã Louco") {
    console.log("Comparando " + personagem.codinome + " com Thanos:");
    console.log(
      "Força de " +
        personagem.codinome +
        ": " +
        personagem.forca +
        " vs Força de Thanos: " +
        vingadores[6].forca
    );
    if (personagem.forca > vingadores[6].forca) {
      console.log(personagem.codinome + " vence em força!");
    } else {
      console.log("Thanos vence em força.");
    }

    console.log(
      "Velocidade de " +
        personagem.codinome +
        ": " +
        personagem.velocidade +
        " vs Velocidade de Thanos: " +
        vingadores[6].velocidade
    );
    if (personagem.velocidade > vingadores[6].velocidade) {
      console.log(personagem.codinome + " vence em velocidade!");
    } else {
      console.log("Thanos vence em velocidade.");
    }

    console.log(
      "Resistência de " +
        personagem.codinome +
        ": " +
        personagem.resistencia +
        " vs Resistência de Thanos: " +
        vingadores[6].resistencia
    );
    if (personagem.resistencia > vingadores[6].resistencia) {
      console.log(personagem.codinome + " vence em resistência!");
    } else {
      console.log("Thanos vence em resistência.");
    }
    console.log("---------------------------");
  }
}
