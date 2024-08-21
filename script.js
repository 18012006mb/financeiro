const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-reultado");

const perguntas = [
    {
        enunciado: "Como lidar com problemas na situação financeira?",
        alternativas: [
            {
                texto: "Orcamento detalhado.",
                afirmação: "Faça um levantamento detalhado sobre seus gastos"
            },
            {
                texto: "Priorização de gastos",
                afirmação: "Priorize as despesas como, moradia,alimentação e sáude"
            }
        ]
    },
    {
        enunciado: "Como o orçamento detalhado pode ajudar?",
        alternativas: [
            {
                texto:  "Indentificando despesas Excessivas",
                afirmação: "Pode indentificar áreas onde está gastando mais que deveria."
            },
            {
                texto: "Como a priorização de gastos pode ajudar?",
                afirmação: "Ajuda a equilibrar o orçamento,cortando despesas desnecessárias."
            }
        ]

    },
    {
        enunciado: "Após fazer um orcamento detalhado como ele ajudara na minha situação financeira?",
        alternativas: [
            {
                texto: "Ajuda a controlar despesas, economizar dinheiro.",
                afirmação: "Planejar metas financeiras e reduir dividas."
            },
            {
                texto: "Não, não haverá um maior diálogo inter-religioso nas escolas brasileiras.",
                afirmação: "Não haverá um maior diálogo inter-religioso nas escolas brasileiras."
            }
        ]
    },
    {
        enunciado: "O ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos?",
        alternativas: [
            {
                texto: "Sim, o ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos.",
                afirmação: "O ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos."
            },
            {
                texto: "Não, o ensino religioso não contribuirá para a formação de cidadãos mais tolerantes e respeitosos.",
                afirmação: "O ensino religioso não contribuirá para a formação de cidadãos mais tolerantes e respeitosos."
            }
        ]
    },
    {
        enunciado: "As políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar?",
        alternativas: [
            {
                texto: "Sim, as políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar.",
                afirmação: "As políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar."
            },
            {
                texto: "Não, as políticas públicas não incentivarão a inclusão do ensino religioso no currículo escolar.",
                afirmação: "As políticas públicas não incentivarão a inclusão do ensino religioso no currículo escolar."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
      if (atual >= pergunta.lenght) {
        mostraResultado();
        return;
      }
      perguntaAtual = perguntas[atual]
      caixaPerguntas.textContent = perguntaAtual.enunciado;
      caixaAlternativas.textContent = "";
      mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação
    historiaFinal += afirmacoes = " ";
    atual++;
    mostraPergunta();
}

function motraResultado() {
    caixaPerguntas.textContent = ".....";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();