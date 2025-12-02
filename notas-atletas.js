let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {

    let atleta = listaAtletas[i].nome;
    let notas = listaAtletas[i].notas;

    let notasOrdenadas = notas.slice().sort((a, b) => b - a);

    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Somar notas
    let soma = 0;
    notasComputadas.forEach(n => soma += n);

    let media = soma / notasComputadas.length;

    console.log(`Atleta: ${atleta}`);
    console.log("Notas Obtidas: " + notasOrdenadas.join(","));
    console.log("Média Válida: " + media);
    console.log("");
  }
}

calcularMediaAtletas(atletas);
