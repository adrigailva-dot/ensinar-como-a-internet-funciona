const quiz = [
  { q: "1. O que é a internet?", a: ["Um aplicativo instalado no celular", "Uma rede mundial que conecta muitas redes", "Um equipamento que fica dentro de casa"], correct: 1, why: "A internet conecta muitas redes para permitir a troca de informações." },
  { q: "2. Qual é a diferença entre Wi-Fi e internet?", a: ["São exatamente a mesma coisa", "Wi-Fi conecta o aparelho ao roteador; internet conecta redes e serviços", "Wi-Fi funciona somente em computadores"], correct: 1, why: "O Wi-Fi é uma conexão local sem fio. A internet conecta redes e serviços." },
  { q: "3. O que acontece quando enviamos uma mensagem?", a: ["Ela passa por redes e equipamentos até chegar ao destino", "Ela fica somente no celular", "Ela não precisa de conexão"], correct: 0, why: "A mensagem percorre redes e equipamentos até chegar ao destinatário." },
  { q: "4. Por que os dados podem ser divididos em pacotes?", a: ["Para facilitar o transporte das informações pela rede", "Para diminuir o tamanho da tela", "Para impedir que a mensagem chegue ao destino"], correct: 0, why: "A divisão em pacotes permite transportar partes menores da informação e organizá-las no destino." },
  { q: "5. O que a fibra óptica transporta?", a: ["Energia elétrica", "Informações por meio de sinais de luz", "Som para caixas de áudio"], correct: 1, why: "A fibra conduz sinais luminosos que representam informações." },
  { q: "6. Qual é a função de um roteador em casa?", a: ["Guardar todos os vídeos", "Distribuir a conexão de rede para os aparelhos", "Substituir os cabos da cidade"], correct: 1, why: "O roteador conecta os dispositivos à rede local e distribui a conexão." },
  { q: "7. Qual é a função de um servidor na internet?", a: ["Fornecer energia aos computadores", "Armazenar, processar e disponibilizar informações e serviços", "Melhorar diretamente o sinal Wi-Fi"], correct: 1, why: "Servidores hospedam serviços, armazenam dados e processam solicitações." },
  { q: "8. O que é o backbone da internet?", a: ["A rede principal de alta capacidade que interliga grandes redes", "Um aplicativo para acessar sites", "O roteador que distribui Wi-Fi em casa"], correct: 0, why: "O backbone interliga redes e regiões, transportando grandes volumes de dados." }
];
const container = document.getElementById("questions");
quiz.forEach((item, index) => {
  const section = document.createElement("section"); section.className = "question";
  const title = document.createElement("h3"); title.textContent = item.q; section.appendChild(title);
  item.a.forEach((answer, optionIndex) => {
    const label = document.createElement("label"); label.className = "option";
    const input = document.createElement("input"); input.type = "radio"; input.name = `q${index}`; input.value = optionIndex; input.required = true;
    label.appendChild(input); label.append(` ${String.fromCharCode(65 + optionIndex)}) ${answer}`); section.appendChild(label);
  });
  container.appendChild(section);
});
document.getElementById("quizForm").addEventListener("submit", event => {
  event.preventDefault(); let score = 0; const details = [];
  quiz.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && Number(selected.value) === item.correct) score++;
    details.push(`${index + 1}. ${selected && Number(selected.value) === item.correct ? "Correto" : "Resposta correta: " + item.a[item.correct]} — ${item.why}`);
  });
  const result = document.getElementById("result");
  result.textContent = `Você acertou ${score} de ${quiz.length} perguntas. ${score === quiz.length ? "Excelente!" : "Revise os conteúdos e tente novamente."} ` + details.join(" | ");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
