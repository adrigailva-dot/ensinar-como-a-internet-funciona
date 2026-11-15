const quiz = [
  { q: "1. O que é a internet?", a: ["Um aplicativo do celular", "Um conjunto de redes conectadas", "Um tipo de cabo"], correct: 1 },
  { q: "2. Qual é a diferença entre Wi-Fi e internet?", a: ["São a mesma coisa", "Wi-Fi conecta o aparelho ao roteador; internet conecta redes e serviços", "Wi-Fi funciona só em computadores"], correct: 1 },
  { q: "3. O que acontece quando enviamos uma mensagem?", a: ["Ela passa por redes e equipamentos até chegar ao destino", "Ela fica somente no celular", "Ela não precisa de conexão"], correct: 0 },
  { q: "4. Como os dados podem ser enviados?", a: ["Somente por imagens", "Divididos em pequenas partes chamadas pacotes", "Somente por satélite"], correct: 1 },
  { q: "5. Para que serve a fibra óptica?", a: ["Transportar informações por sinais de luz", "Aumentar a bateria", "Melhorar o volume do celular"], correct: 0 },
  { q: "6. Qual é a função do roteador em casa?", a: ["Guardar todos os vídeos", "Distribuir a conexão para os aparelhos", "Substituir todos os cabos da cidade"], correct: 1 }
];

const container = document.getElementById("questions");
quiz.forEach((item, index) => {
  const section = document.createElement("section");
  section.className = "question";
  const title = document.createElement("h3");
  title.textContent = item.q;
  section.appendChild(title);
  item.a.forEach((answer, optionIndex) => {
    const label = document.createElement("label");
    label.className = "option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = optionIndex;
    input.required = true;
    label.appendChild(input);
    label.append(` ${String.fromCharCode(65 + optionIndex)}) ${answer}`);
    section.appendChild(label);
  });
  container.appendChild(section);
});

document.getElementById("quizForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  quiz.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && Number(selected.value) === item.correct) score++;
  });
  const result = document.getElementById("result");
  result.textContent = `Você acertou ${score} de ${quiz.length} perguntas. ${score === quiz.length ? "Excelente!" : "Continue aprendendo e tente novamente!"}`;
});
