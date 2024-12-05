
const receita = {
    ingredientes: [
        "Addie LaRue, em um momento de desespero no século XVIII, faz um pacto para escapar de um destino comum: viver livremente sem se prender a ninguém. Porém, essa liberdade tem um preço cruel — ela é esquecida por todos que encontra. Ao longo de três séculos, Addie vagueia pelo mundo, invisível para a história, até que, em 2014, conhece alguém que inexplicavelmente se lembra dela, desafiando as regras de sua maldição e mudando sua vida para sempre."
    ],
    modoPreparo: [
        "Por que gostei tanto de A Vida Invisível de Addie LaRue?",
        "O livro me conquistou pela profundidade emocional e pelos temas atemporais que explora. Addie é uma personagem fascinante, cuja luta contra o esquecimento reflete a busca humana por significado, conexão e legado. A narrativa de V.E. Schwab é poética, transportando o leitor entre momentos históricos e emocionais com uma sensibilidade única.",
        "A relação de Addie com Luc, a entidade que lhe concedeu a maldição, é carregada de nuances — uma mistura de rivalidade, atração e desespero. O vínculo que ela desenvolve com Henry, o primeiro a se lembrar dela em 300 anos, traz um toque de esperança e melancolia, questionando o que é realmente eterno: a memória ou o amor.",
        "Além disso, o livro tem um ritmo quase musical, intercalando os desafios de Addie com momentos em que ela descobre maneiras de deixar sua marca no mundo, mesmo que sutilmente. É uma história sobre persistir, mesmo quando tudo parece perdido, e sobre encontrar beleza nos fragmentos da existência.",
        "Gostei porque me fez refletir sobre a fragilidade da vida, a importância das pequenas conexões e o que significa ser realmente lembrado. É uma leitura que fica com você, como um sussurro que não se apaga."
    ]

};

const ingredientesList = document.getElementById("ingredientes");
receita.ingredientes.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientesList.appendChild(li);
});

const modoPreparoList = document.getElementById("modo-preparo");
receita.modoPreparo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modoPreparoList.appendChild(li);
});
