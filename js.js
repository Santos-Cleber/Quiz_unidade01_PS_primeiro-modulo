// QUIZ - PROJETO DE SOFTWARE | UNIDADE 1 | ANHANGUERA

const questionsBlock1 = [
  {
    id: 1,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `A gestora WOTAK é responsável por um projeto de desenvolvimento de software em uma organização com mais de 500 colaboradores. Ela precisa identificar os principais Stakeholders.\n\nAnalise as afirmativas:\n\nI. Elaborar um questionário específico pode auxiliar a encontrar Stakeholders em meio aos colaboradores e parceiros de negócio.\nII. Todos os Stakeholders são necessariamente do time de operações da empresa.\nIII. A avaliação do resultado econômico da solução é realizada pelo investidor/patrocinador do projeto.\n\nAssinale a alternativa correta.`,
    options: [
      "As afirmativas I, II e III são verdadeiras.",
      "As afirmativas I e III são verdadeiras, sendo que a II é falsa.",
      "As afirmativas II e III são verdadeiras, sendo que a I é falsa.",
      "Apenas a afirmativa II é verdadeira.",
      "Todas as afirmativas são falsas.",
    ],
    correct: 1,
    explanation: `As afirmativas I e III são verdadeiras, sendo que a II é falsa.\n\nI. VERDADEIRA – Elaborar questionários é uma técnica eficaz para mapear Stakeholders em organizações grandes, onde nem todos os envolvidos são facilmente visíveis.\n\nII. FALSA – Stakeholders não são exclusivamente do time de operações. Incluem patrocinadores, usuários finais, equipe de TI, gestores, fornecedores e parceiros de negócio — qualquer pessoa que afeta ou é afetada pelo projeto.\n\nIII. VERDADEIRA – A avaliação do resultado econômico é responsabilidade do investidor/patrocinador. Segundo Kezner (2020), o gerente de projetos do futuro também se responsabilizará pelo retorno financeiro.`,
  },
  {
    id: 2,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `O Sr. Papazzi, novo proprietário de uma cantina italiana, precisa desenvolver um software para modernizar sua gestão.\n\nClassifique as afirmativas sobre as fases do ciclo de vida (V – verdadeira / F – falsa):\n\nI. Processo de Planejamento: delimitar os procedimentos operacionais e documentar todas as etapas do TAP.\nII. Processo de Execução: as rotinas serão desenvolvidas; é a fase que demanda mais tempo e exige atenção ao cronograma e custos.\nIII. Processo de Controle: os serviços e artefatos recebidos devem ser avaliados, identificando erros e necessidades de correção.\n\nAssinale a alternativa correta.`,
    options: [
      "I – V; II – V; III – V.",
      "I – F; II – V; III – V.",
      "I – V; II – V; III – F.",
      "I – V; II – F; III – V.",
      "I – F; II – F; III – V.",
    ],
    correct: 1,
    explanation: `I. FALSA – O Planejamento não documenta todas as etapas do TAP; o TAP pertence à fase de iniciação.\n
                  II. VERDADEIRA – A Execução é a fase mais longa do ciclo de vida, onde ocorre o desenvolvimento e exige atenção ao cronograma e custos.\n
                  III. VERDADEIRA – O Controle avalia artefatos entregues, identifica desvios e aciona correções.`,
  },
  {
    id: 3,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `O gestor TSUKATA conhece o Triângulo de Talentos do PMI e quer avaliar sua equipe.\n\nComplete as lacunas:\n\nI. Habilidades em __________ reúnem boas experiências em projetos anteriores, aplicando metodologias e técnicas comprovadas de gestão.\nII. Habilidades em __________ correspondem ao comportamento que proporciona boa relação entre pessoas e eficiência na execução das tarefas.\n\nAssinale a alternativa que preenche corretamente as lacunas.`,
    options: [
      "Liderança / Técnicas em Gestão de Projetos.",
      "Técnicas em Gestão de Projetos / Liderança.",
      "Gestão Estratégica / Liderança.",
      "Técnicas em Gestão de Processos / Gestão Estratégica.",
      "Liderança em projetos / Liderança em mudanças.",
    ],
    correct: 1,
    explanation: `A resposta correta é: Técnicas em Gestão de Projetos / Liderança.\n\nO Triângulo de Talentos do PMI tem 3 dimensões:\n\n1. TÉCNICAS EM GESTÃO DE PROJETOS – Reúne experiências de projetos anteriores. Envolve metodologias, ferramentas e processos comprovados de gerenciamento.\n\n2. LIDERANÇA – Comportamento que proporciona boa relação interpessoal e eficiência. Inclui motivação, resolução de conflitos, comunicação e engajamento do time.\n\n3. GESTÃO ESTRATÉGICA E NEGÓCIOS – Garante alinhamento do projeto com a estratégia organizacional e o retorno sobre investimento.\n\nSegundo Kezner (2020): "o gerente de projetos do futuro deverá ser responsável por concluir o projeto no prazo, no orçamento e pelo retorno financeiro."`,
  },
  {
    id: 4,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `O projeto HeartExame está desenvolvendo um software de controle de batimento cardíaco. O gestor está na fase de Planejamento.\n\nQual informação abaixo representa corretamente o ESCOPO DO PRODUTO?`,
    options: [
      "Criar os critérios de IHC para elaborar as telas do software.",
      "A medição do batimento cardíaco deve ser realizada em BPM (batimentos por minuto).",
      "O escopo do produto deve ser demonstrado numa EAP (Estrutura Analítica do Projeto).",
      "O teste do aplicativo será realizado pelos pacientes da clínica.",
      "A equipe de TI será alocada nas instalações da empresa HeartExame.",
    ],
    correct: 1,
    explanation: `A resposta correta é: A medição do batimento cardíaco deve ser realizada em BPM.\n\nESCOPO DO PRODUTO descreve as CARACTERÍSTICAS e FUNCIONALIDADES do software — O QUE ele faz.\nExemplos: "medir frequência cardíaca em BPM", "emitir alertas quando BPM estiver fora do padrão".\n\nESCOPO DO PROJETO descreve TODO O TRABALHO para construir o produto: atividades, recursos, cronograma, EAP.\n\nAnálise das outras alternativas:\n- Criar critérios de IHC = escopo do PROJETO (trabalho a realizar)\n- EAP = ferramenta do escopo do PROJETO\n- Testes pelos pacientes = atividade do PROJETO\n- Alocação da equipe = recurso do PROJETO`,
  },
  {
    id: 5,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `A empresa BDParty está desenvolvendo um software para gestão de festas. Sobre a importância da gestão em projetos de software, analise as afirmativas:\n\nI. A gestão permite dimensionar recursos, estabelecer prazos realistas e monitorar o progresso.\nII. A gestão de projetos é necessária apenas em grandes empresas, sendo dispensável em projetos pequenos.\nIII. Pela complexidade das atualizações e impactos das adequações, faz-se necessária a gestão do projeto de software.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas a afirmativa I é verdadeira.",
      "Apenas a afirmativa II é verdadeira.",
      "As afirmativas I e III são verdadeiras, sendo que a II é falsa.",
      "As afirmativas I e II são verdadeiras, sendo que a III é falsa.",
      "Todas as afirmativas são verdadeiras.",
    ],
    correct: 2,
    explanation: `As afirmativas I e III são verdadeiras, sendo que a II é falsa.\n\nI. VERDADEIRA – A gestão permite: dimensionar recursos, estabelecer prazos, monitorar progresso e identificar/mitigar riscos. É fundamental para o sucesso.\n\nII. FALSA – A gestão é importante para TODOS os tamanhos de projeto. Mesmo projetos pequenos se beneficiam de organização. A falta de gestão aumenta as chances de falha em qualquer escala.\n\nIII. VERDADEIRA – Conforme o material: "pela complexidade das atualizações e entendimento dos impactos das adequações é que se faz necessária a gestão do projeto de software."`,
  },
  {
    id: 6,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `Surgiu um conflito entre a equipe de TI do BDParty e os stakeholders do negócio. Considerando o fluxo básico para resolução de conflitos, complete a sequência correta:\n\n"Para resolver conflitos, o gestor deve: 1º ____, 2º ____, 3º ____, 4º ____."`,
    options: [
      "Aplicar a solução / Identificar o problema / Encontrar alternativas / Identificar a causa.",
      "Identificar a causa / Identificar o problema / Encontrar alternativas / Aplicar a solução.",
      "Identificar o problema / Identificar a causa / Encontrar alternativas / Aplicar a solução.",
      "Encontrar alternativas / Identificar o problema / Aplicar a solução / Identificar a causa.",
      "Identificar o problema / Encontrar alternativas / Aplicar a solução / Identificar a causa.",
    ],
    correct: 2,
    explanation: `A resposta correta é: Identificar o problema → Identificar a causa → Encontrar alternativas → Aplicar a solução.\n\n1. IDENTIFICAR O PROBLEMA – Reconhecer que existe um conflito e definir claramente qual é.\n2. IDENTIFICAR A CAUSA – Investigar a raiz. Sem entender a causa, qualquer solução é superficial.\n3. ENCONTRAR ALTERNATIVAS – Levantar soluções possíveis e avaliar viabilidade e impactos.\n4. APLICAR A SOLUÇÃO – Implementar a alternativa escolhida e monitorar os resultados.\n\nAtenção: problemas pequenos não resolvidos podem crescer e causar a suspensão do projeto inteiro.`,
  },
  {
    id: 7,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `Analise a asserção-razão sobre investimento em tecnologia:\n\nI. Investir em tecnologia não é voltar-se apenas para a inovação,\n\nPORQUE\n\nII. é uma forma de sobreviver no mercado e de se tornar ou permanecer competitivo frente à agressividade dos concorrentes.\n\nAssinale a alternativa correta.`,
    options: [
      "As duas afirmações são verdadeiras, e a segunda justifica a primeira.",
      "As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.",
      "A primeira afirmação é verdadeira, e a segunda é falsa.",
      "A primeira afirmação é falsa, e a segunda é verdadeira.",
      "As duas afirmações são falsas.",
    ],
    correct: 0,
    explanation: `As duas afirmações são verdadeiras, e a segunda justifica a primeira.\n\nI. VERDADEIRA – Tecnologia vai além da inovação: é uma necessidade estratégica de sobrevivência, eficiência e geração de valor.\n\nII. VERDADEIRA E JUSTIFICA – Segundo Zimmermann (2001): tecnologia é forma de sobreviver e permanecer competitivo. Esta afirmação explica POR QUÊ a tecnologia transcende a inovação.\n\nA relação é direta: I diz O QUÊ (não é só inovação), II diz POR QUÊ (é sobrevivência e competitividade). Portanto a segunda justifica a primeira.`,
  },
  {
    id: 8,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `O projeto ServAgriTech oferece serviços tecnológicos para o setor agrícola. Sobre as vantagens do gerenciamento, analise:\n\nI. Dimensionar: determinar o tempo necessário para desenvolver os módulos do software.\nII. Stakeholders: identificar quem orienta as especializações da agricultura e quem executará as tarefas no campo.\nIII. Legalidade: estabelecer a contratação e o fluxo financeiro para o desenvolvimento.\nIV. Requisitos: identificar as necessidades funcionais e não funcionais do sistema.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa IV é verdadeira.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nI. VERDADEIRA – Dimensionar permite estimar o tempo de desenvolvimento de cada módulo, garantindo cronogramas realistas.\n\nII. VERDADEIRA – Identificar stakeholders inclui especialistas agrícolas (orientam as regras de negócio) e usuários de campo (executam operações com o sistema).\n\nIII. VERDADEIRA – O gerenciamento garante aspectos legais: contratos com fornecedores, fluxo financeiro, questões tributárias e regulatórias do setor agrícola.\n\nIV. VERDADEIRA – Mapear requisitos funcionais (o que o sistema faz) e não funcionais (performance, segurança) é fundamental para o sucesso do ServAgriTech.`,
  },
  {
    id: 9,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `Segundo Harry Kezner (2020), o papel do gerente de projetos está evoluindo. Complete a afirmação:\n\n"O gerente de projetos do futuro deverá ser responsável por concluir o projeto no prazo, no orçamento e, também, ____."\n\nAssinale a alternativa correta.`,
    options: [
      "pela satisfação exclusiva da equipe de desenvolvimento.",
      "pela documentação técnica completa do sistema.",
      "se responsabilizar pelo retorno financeiro.",
      "pelo treinamento dos usuários finais após a entrega.",
      "pela manutenção corretiva do software após a implantação.",
    ],
    correct: 2,
    explanation: `A resposta correta é: se responsabilizar pelo retorno financeiro.\n\nCitação de Harry Kezner (2020):\n"O gerente de projetos do futuro deverá ser responsável por concluir o projeto no prazo, no orçamento e, também, se responsabilizar pelo retorno financeiro."\n\nEsta evolução reflete o Triângulo de Talentos do PMI — especialmente a dimensão GESTÃO ESTRATÉGICA E NEGÓCIOS.\n\nImplicações:\n- GP precisa entender de finanças e negócios\n- Deve justificar investimento com ROI\n- Participa de decisões estratégicas\n- A entrega técnica no prazo não é suficiente — o resultado de negócio importa`,
  },
  {
    id: 10,
    block: 1,
    blockName: "Introdução a Projeto de Software",
    question: `A Matriz de Habilidade e Responsabilidade é essencial para organizar equipes. Sobre esta ferramenta, é CORRETO afirmar:`,
    options: [
      "Deve contemplar apenas habilidades técnicas como linguagem de programação e banco de dados.",
      "Auxilia na distribuição de tarefas considerando tanto habilidades técnicas quanto interpessoais de cada membro.",
      "Deve ser elaborada exclusivamente ao final do projeto para avaliação de desempenho.",
      "Habilidades interpessoais como criatividade e capacidade de agregar são irrelevantes para a matriz.",
      "É um documento opcional que pode ser substituído por uma simples lista de funções.",
    ],
    correct: 1,
    explanation: `A resposta correta é: Auxilia na distribuição de tarefas considerando tanto habilidades técnicas quanto interpessoais.\n\nHABILIDADES TÉCNICAS: Engenheiro/Arquiteto de Software, Desenvolvedor, Web Designer, DBA, Analista de Testes.\n\nHABILIDADES INTERPESSOAIS: Automotivado, Criativo, Agregador (trabalho em equipe), Comunicativo, Liderança.\n\nBenefícios:\n✓ Garante alocações mais assertivas\n✓ O projeto recebe resultados adequados às habilidades\n✓ Evita sobrecarga ou subutilização de membros\n✓ Deve ser elaborada no INÍCIO do projeto`,
  },
];

const questionsBlock2 = [
  {
    id: 11,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `A empresa TechSolutions desenvolve um sistema hospitalar com requisitos que mudam frequentemente e o cliente precisa de entregas rápidas para validação.\n\nQual ciclo de vida é mais adequado para este cenário?`,
    options: [
      "Ciclo de vida preditivo, pois permite planejamento completo antes da execução.",
      "Ciclo de vida adaptativo, pois suporta alto grau de mudanças e alta frequência de entrega.",
      "Ciclo de vida incremental, pois foca em entregas planejadas com baixo grau de mudanças.",
      "Ciclo de vida em cascata, garantindo que cada fase seja completada antes da próxima.",
      "Ciclo de vida iterativo com baixa frequência de entrega e refinamento gradual.",
    ],
    correct: 1,
    explanation: `A resposta correta é: Ciclo de vida adaptativo.\n\nO cenário apresenta: ALTO grau de mudanças + necessidade de ALTA frequência de entrega.\n\nPositionamento conforme PMI (2017, p. 19):\n\nPreditivo   = Baixas mudanças / Baixa entrega\nIncremental = Baixas mudanças / Alta entrega\nIterativo   = Altas mudanças  / Baixa entrega\nAdaptativo  = Altas mudanças  / Alta entrega ← CORRETO\n\nO adaptativo (ágil) permite entregas constantes em curto prazo, sendo ideal quando a realidade é dinâmica e o foco é comprometimento com entrega frequente.`,
  },
  {
    id: 12,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `Sobre o ciclo de vida clássico do BDParty (Iniciação → Planejamento → Execução → Finalização), analise:\n\nI. Na Iniciação, obtém-se permissão para iniciar e definem-se o escopo do produto e o escopo do projeto.\nII. No Planejamento, os principais stakeholders se comprometem e define-se como a gestão irá monitorar as atividades.\nIII. A Execução se limita exclusivamente à codificação, sem necessidade de registro de atividades.\n\nAssinale a alternativa correta.`,
    options: [
      "As afirmativas I, II e III são verdadeiras.",
      "As afirmativas I e II são verdadeiras, sendo que a III é falsa.",
      "Apenas a afirmativa I é verdadeira.",
      "As afirmativas I e III são verdadeiras, sendo que a II é falsa.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 1,
    explanation: `As afirmativas I e II são verdadeiras, sendo que a III é falsa.\n\nI. VERDADEIRA – Na Iniciação, o projeto é autorizado formalmente. Define-se escopo do produto (características do software) e escopo do projeto (trabalho para construí-lo).\n\nII. VERDADEIRA – No Planejamento, stakeholders se comprometem. Elabora-se TAP, define-se equipe, EAP, cronograma, orçamento e estratégia de monitoramento.\n\nIII. FALSA – A Execução NÃO se limita à codificação. Inclui: detalhar requisitos, arquitetura, modelar dados, implementar, criar testes, validar o software e REGISTRAR todas as atividades. O registro é fundamental para controle.`,
  },
  {
    id: 13,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `O projeto ExpoMiniShow (Camargo, 2019) compara métodos ágeis com o método cascata. Sobre o ciclo de vida preditivo (cascata), analise:\n\nI. Todas as necessidades são planejadas na fase de planejamento, sem replanejamento frequente.\nII. A entrega ocorre de uma única vez, ao final de todas as fases.\nIII. É adequado para projetos com alto grau de mudanças e requisitos instáveis.\nIV. O andamento ocorre de forma linear, da iniciação à finalização.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 1,
    explanation: `Apenas as afirmativas I, II e IV são verdadeiras.\n\nI. VERDADEIRA – No preditivo, tudo é planejado antecipadamente. Se a execução inicia, entende-se que as funcionalidades estão claramente definidas.\n\nII. VERDADEIRA – Entrega única ao final. O cliente recebe o produto completo após todas as fases. Não há entregas parciais.\n\nIII. FALSA – O preditivo é adequado para projetos com BAIXO grau de mudanças e requisitos ESTÁVEIS. Para mudanças frequentes, usa-se o adaptativo.\n\nIV. VERDADEIRA – O andamento é linear e sequencial: Iniciação → Planejamento → Execução → Finalização. Cada fase conclui antes de iniciar a próxima.`,
  },
  {
    id: 14,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `O projeto AgriTech desenvolve sistema para controle de pragas na cafeicultura. O time de TI não conhece as regras de negócio e precisa de interação constante com especialistas agrícolas.\n\nComplete a afirmativa:\n\n"O método _______ é mais adequado pois permite interação intensa com especialistas. Uma prática muito utilizada neste método é a _______, que facilita ao usuário experimentar o comportamento do software antes da implementação final."`,
    options: [
      "preditivo / documentação técnica detalhada.",
      "incremental / entrega em blocos planejados.",
      "iterativo / prototipação.",
      "cascata / especificação completa de requisitos.",
      "adaptativo / programação em pares.",
    ],
    correct: 2,
    explanation: `A resposta correta é: iterativo / prototipação.\n\nO método ITERATIVO é adequado quando:\n- Alto grau de incerteza nas regras de negócio\n- Time de TI não conhece o domínio do cliente\n- Participação intensa dos especialistas é necessária\n- Alto grau de mudanças, baixa frequência de entrega\n\nA PROTOTIPAÇÃO é a prática central porque:\n✓ Facilita ao usuário experimentar o comportamento do software\n✓ Permite ensaio com novas tecnologias\n✓ Evita implementar código indesejado por falta de detalhamento\n✓ Time de operações pode ficar alocado fisicamente junto ao time de TI\n✓ Dúvidas esclarecidas em tempo real, reduzindo retrabalho`,
  },
  {
    id: 15,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `Um banco precisa desenvolver um sistema de internet banking. Requisitos estão bem definidos, mas o cliente quer receber funcionalidades gradualmente para usá-las antes da conclusão total.\n\nSobre o ciclo de vida incremental, analise:\n\nI. O projeto é planejado em blocos, permitindo que o cliente use o sistema à medida que as entregas planejadas sejam realizadas.\nII. O software total é a soma de todos os incrementos entregues.\nIII. É característico de ambientes com alto grau de mudanças nos requisitos.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa I é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I e II são verdadeiras.\n\nI. VERDADEIRA – O incremental divide o projeto em blocos planejados. Cada bloco entrega funcionalidades úteis que o cliente usa antes da conclusão total. Gera valor antecipado e feedback real.\n\nII. VERDADEIRA – O produto final é a soma de todos os incrementos. Cada entrega adiciona funcionalidade ao sistema completo.\n\nIII. FALSA – O incremental é para BAIXO grau de mudanças. Os requisitos são definidos no início e as entregas planejadas com antecedência. Para altas mudanças, usa-se iterativo ou adaptativo.\n\nPositionamento PMI: Incremental = Baixas mudanças + Alta frequência de entrega.`,
  },
  {
    id: 16,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `Analise a asserção-razão sobre o ciclo de vida adaptativo:\n\nI. O ciclo de vida adaptativo é o mais adequado para projetos com alta incerteza e necessidade de validações frequentes,\n\nPORQUE\n\nII. o método adaptativo permite entregas constantes em curto prazo, tendo vantagens quando a realidade é dinâmica e o comprometimento com entrega constante é o foco.\n\nAssinale a alternativa correta.`,
    options: [
      "As duas afirmações são verdadeiras, e a segunda justifica a primeira.",
      "As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.",
      "A primeira afirmação é verdadeira, e a segunda é falsa.",
      "A primeira afirmação é falsa, e a segunda é verdadeira.",
      "As duas afirmações são falsas.",
    ],
    correct: 0,
    explanation: `As duas afirmações são verdadeiras, e a segunda justifica a primeira.\n\nI. VERDADEIRA – O adaptativo é ideal para alta incerteza, ambientes dinâmicos e necessidade de validações frequentes com stakeholders.\n\nII. VERDADEIRA E JUSTIFICA – O método adaptativo EXPLICA POR QUÊ é adequado:\n- Entregas constantes → validações frequentes ✓\n- Curto prazo entre entregas → feedback rápido ✓\n- Vantagem em realidade dinâmica → suporta mudanças ✓\n- Comprometimento com entrega constante → valor antecipado ✓\n\nA relação é direta: I diz O QUÊ (adequado para alta incerteza), II diz POR QUÊ (entregas constantes e suporte ao dinamismo).`,
  },
  {
    id: 17,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `O projeto ExpoMiniShow (Camargo, 2019, p. 69) ilustra comparações entre metodologias. Sobre este estudo de caso, analise:\n\nI. O Planejamento I de 1 dia foi dividido em Canvas (2 horas) e PM Visual (6 horas).\nII. O diagrama apresenta dois caminhos: Método Cascata e Métodos Ágeis com Sprints.\nIII. O Estudo de Viabilidade aparece como etapa anterior ao planejamento.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas a afirmativa I é verdadeira.",
      "Apenas as afirmativas I e II são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 2,
    explanation: `Todas as afirmativas são verdadeiras.\n\nI. VERDADEIRA – O Planejamento I (1 dia = 8h) foi dividido em:\n- ETAPA 1: CANVAS → 2 horas (modelo de negócio visual)\n- ETAPA 2: PM VISUAL → 6 horas (gerenciamento visual do projeto)\n\nII. VERDADEIRA – O diagrama mostra dois caminhos após o planejamento:\n- Método Cascata: planejamento detalhado → execução linear\n- Métodos Ágeis: ciclos de Sprints (Sprint 1, Sprint 2, Sprint 3...)\n\nIII. VERDADEIRA – O Estudo de Viabilidade precede o Planejamento I. Avalia se o projeto é viável antes de investir em planejamento detalhado.\n\nObjetivo: demonstrar que um mesmo projeto pode ser conduzido por abordagens diferentes (tradicional ou ágil).`,
  },
  {
    id: 18,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `Para conseguir adaptação contínua no desenvolvimento ágil, a equipe precisa de elementos fundamentais. Complete a afirmativa conforme Pressman (2021):\n\n"Para conseguir uma adaptação _______, a equipe ágil precisa de _______ do cliente, de modo que as adaptações apropriadas possam ser feitas. Um catalisador eficaz para o _______ do cliente é um protótipo operacional."`,
    options: [
      "contínua / aprovação / aceite.",
      "contínua / feedback / feedback.",
      "preditiva / validação / retorno.",
      "completa / requisitos / mapeamento.",
      "iterativa / documentação / escopo.",
    ],
    correct: 1,
    explanation: `A resposta correta é: contínua / feedback / feedback.\n\nCitação adaptada de Pressman (2021):\n"Para conseguir uma adaptação CONTÍNUA, a equipe ágil precisa de FEEDBACK do cliente. Um catalisador eficaz para o FEEDBACK do cliente é um protótipo operacional."\n\nConceitos-chave:\n- ADAPTAÇÃO CONTÍNUA: mudanças constantes e progressivas, mantendo o software atualizado com base no feedback do cliente.\n- FEEDBACK: retorno do cliente sobre o que foi entregue. Essencial para direcionar os próximos passos.\n- PROTÓTIPO OPERACIONAL: versão funcional (mesmo parcial) que o cliente pode usar e avaliar — melhor catalisador de feedback porque ele experimenta o software de verdade.`,
  },
  {
    id: 19,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `O projeto PrOdont (clínica odontológica) está sendo planejado. Sobre as características fundamentais de um projeto, analise:\n\nI. Um projeto é temporário, tendo início e fim definidos.\nII. O resultado de um projeto deve ser único, mesmo que similar a outros.\nIII. Projetos podem ser executados indefinidamente sem necessidade de encerramento formal.\nIV. Todo projeto deve ter um escopo bem definido para orientar as entregas.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
    ],
    correct: 1,
    explanation: `Apenas as afirmativas I, II e IV são verdadeiras.\n\nI. VERDADEIRA – Todo projeto é TEMPORÁRIO: início e fim definidos. Diferencia projeto de operação contínua.\n\nII. VERDADEIRA – O resultado é ÚNICO. Mesmo sistemas similares para outras clínicas odontológicas terão particularidades específicas que os tornam únicos.\n\nIII. FALSA – Projetos NÃO podem ser executados indefinidamente. Isso contraria a definição de "projectus" (latim). Execução indefinida = operação contínua, não projeto.\n\nIV. VERDADEIRA – Todo projeto precisa de ESCOPO definido: o que será entregue, quais funcionalidades, quais os limites. Sem escopo, o projeto não tem direção clara.`,
  },
  {
    id: 20,
    block: 2,
    blockName: "Ciclo de Vida do Projeto de Software",
    question: `O material apresenta o processo de iteração como execução repetida de atividades, com o ciclo: Planejar(n) → Executar(n) → Avaliar(n) → Entregar(n).\n\nComplete a definição de iteração:\n\n"Executar repetidamente atividades com _______ diferentes, utilizando _______ apropriadas e envolvendo _______ específicas para cada ciclo."`,
    options: [
      "metodologias / ferramentas / tecnologias.",
      "objetos / técnicas / pessoas.",
      "requisitos / processos / equipes.",
      "documentos / métodos / grupos.",
      "entregáveis / abordagens / stakeholders.",
    ],
    correct: 1,
    explanation: `A resposta correta é: objetos / técnicas / pessoas.\n\nDefinição do material didático:\n"Executar repetidamente com OBJETOS diferentes, TÉCNICAS apropriadas e PESSOAS específicas."\n\nOBJETOS diferentes: cada iteração trabalha com diferentes funcionalidades/módulos.\nEx: Iter.1 = login; Iter.2 = cadastro; Iter.3 = relatórios\n\nTÉCNICAS apropriadas: cada iteração pode usar técnicas específicas ao objeto tratado.\nEx: prototipação para UX, TDD para funcionalidades críticas\n\nPESSOAS específicas: cada iteração pode envolver diferentes especialistas.\nEx: especialistas de negócio na definição, desenvolvedores na construção, usuários na validação`,
  },
];

const questionsBlock3 = [
  {
    id: 21,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O projeto BDParty está na fase de iniciação. O gerente precisa elaborar o TAP (Termo de Abertura do Projeto). Analise:\n\nI. O TAP deve conter a justificativa do projeto, que indica quais projetos devem ser executados com prioridade.\nII. Restrições e premissas (limitações de custo, disponibilidade de profissionais) devem ser consideradas no TAP.\nIII. O escopo no TAP deve descrever todos os requisitos de forma clara, evitando questionamentos futuros nas entregas.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas a afirmativa I é verdadeira.",
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Todas as afirmativas são falsas.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nI. VERDADEIRA – A justificativa no TAP funciona como termômetro: orienta quais projetos executar primeiro, quais aguardar e quais cancelar. É o argumento de negócio que valida o investimento.\n\nII. VERDADEIRA – Restrições (orçamento máximo, prazo fixo, equipe reduzida) e premissas (disponibilidade de especialistas, infraestrutura pronta) são elementos essenciais do TAP.\n\nIII. VERDADEIRA – O escopo claro no TAP evita ambiguidades, questionamentos durante o desenvolvimento e disputas sobre o que foi acordado na entrega final.\n\nComponentes principais do TAP: Gestor do projeto, Justificativa, Restrições/Premissas, Escopo, Pontos de entrega, Partes interessadas.`,
  },
  {
    id: 22,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O gerente do BDParty precisa identificar quais atividades pertencem ao Processo de EXECUÇÃO:\n\nI. Detalhar requisitos de controle de acesso para perfis de anfitrião e convidado.\nII. Negociar requisitos e funcionalidades diferentes do esperado pelo cliente.\nIII. Definir a arquitetura do software e modelar o banco de dados.\nIV. Elaborar o Termo de Abertura do Projeto (TAP).\n\nAssinale a alternativa que identifica CORRETAMENTE as atividades de Execução.`,
    options: [
      "Apenas as atividades I e III são de Execução.",
      "Apenas as atividades II e IV são de Execução.",
      "Todas as atividades são de Execução.",
      "Apenas a atividade IV é de Execução.",
      "Apenas as atividades I, II e III são de Execução.",
    ],
    correct: 0,
    explanation: `Apenas as atividades I e III são de Execução.\n\nI. EXECUÇÃO ✓ – Detalhar requisitos específicos (controle de acesso, perfis) é atividade típica da execução, onde os requisitos são refinados para desenvolvimento.\n\nII. MONITORAMENTO E CONTROLE ✗ – Negociar requisitos diferentes é controle de mudanças, não execução.\n\nIII. EXECUÇÃO ✓ – Definir arquitetura e modelar banco de dados são atividades centrais da execução, onde a solução técnica é construída.\n\nIV. INICIAÇÃO ✗ – O TAP é elaborado na INICIAÇÃO, não na execução. É o documento que formaliza o início do projeto.\n\nAtividades típicas da Execução: detalhar requisitos, definir arquitetura, modelar dados, implementar, criar testes, validar e entregar incrementos.`,
  },
  {
    id: 23,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `Segundo Maximiano (2022), as funções do processo gerencial incluem:\n\nI. Planejamento – definir objetivos e os meios para alcançá-los.\nII. Organização – estruturar e alocar recursos para executar o planejamento.\nIII. Execução – realizar as atividades planejadas.\nIV. Controle – monitorar o desempenho e fazer ajustes quando necessário.\nV. Liderança e processos interpessoais – coordenar esforços e motivar a equipe.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II, III e IV são verdadeiras.",
      "Apenas as afirmativas II, III, IV e V são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas I e V são verdadeiras.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nAs 5 funções do processo gerencial (Maximiano, 2022, p. 11):\n\nI. PLANEJAMENTO ✓ – Define objetivos e meios: cronogramas, orçamentos, escopo, requisitos.\nII. ORGANIZAÇÃO ✓ – Estrutura equipe e aloca recursos: papéis, responsabilidades, hierarquia.\nIII. EXECUÇÃO ✓ – Coloca o plano em prática: desenvolve, entrega, testa.\nIV. CONTROLE ✓ – Monitora: compara realizado × planejado, identifica desvios, aciona correções.\nV. LIDERANÇA ✓ – Coordena e motiva: resolve conflitos, engaja stakeholders, facilita comunicação.\n\nImportante: A Liderança é TRANSVERSAL — permeia todas as outras funções. O diagrama do material mostra ela como eixo central que atravessa as demais.`,
  },
  {
    id: 24,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O projeto PrOdont está na fase de encerramento. Sobre o Processo de Encerramento e Avaliação, analise:\n\nI. Deve-se registrar experiências positivas para utilização em projetos futuros.\nII. Devem-se registrar problemas e ações tomadas por motivo de atraso e conflitos.\nIII. Os compromissos com fornecedores e parceiros devem ser quitados nesta fase.\nIV. Os resultados devem ser divulgados apenas internamente, sem envolvimento dos stakeholders externos.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa IV é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I, II e III são verdadeiras.\n\nI. VERDADEIRA – Registrar experiências positivas alimenta a base histórica da organização. Boas práticas documentadas podem ser replicadas em projetos futuros.\n\nII. VERDADEIRA – Cavalcanti (2016, p. 215): "deve-se realizar sessões para o registro de lições aprendidas, envolvendo o GP e a equipe." Aprender com erros evita sua repetição.\n\nIII. VERDADEIRA – Quitar compromissos financeiros e contratuais é obrigação do encerramento. Contratos devem ser formalmente encerrados.\n\nIV. FALSA – Os resultados devem ser divulgados para TODOS os stakeholders, incluindo externos (cliente, patrocinador, parceiros). O encerramento inclui comunicação formal com todos os envolvidos.`,
  },
  {
    id: 25,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O gestor do BDParty usou analogia entre uma festa de aniversário e o planejamento do projeto. Analise as correspondências:\n\nI. "Quem faz a lista de convidados" = "definir o time de desenvolvimento".\nII. "Quem define o cardápio" = "definir os requisitos do software".\nIII. "Cada atividade deve ter uma data" = "lista de atividades com datas previstas".\nIV. "Quem providencia o som e fotografia" = "Plano de Risco do projeto".\n\nAssinale as correspondências ADEQUADAS.`,
    options: [
      "Apenas as correspondências I, II e III são adequadas.",
      "Apenas as correspondências I, II e IV são adequadas.",
      "Apenas as correspondências II, III e IV são adequadas.",
      "Todas as correspondências são adequadas.",
      "Apenas a correspondência IV é adequada.",
    ],
    correct: 0,
    explanation: `Apenas as correspondências I, II e III são adequadas.\n\nI. ADEQUADA ✓ – Ambas definem QUEM participará: convidados da festa vs. time do projeto.\n\nII. ADEQUADA ✓ – Ambas definem O QUÊ será entregue: cardápio da festa vs. requisitos do software.\n\nIII. ADEQUADA ✓ – Ambas definem QUANDO: datas das atividades da festa vs. cronograma do projeto (EAP).\n\nIV. NÃO ADEQUADA ✗ – "Som e fotografia" são FORNECEDORES/RECURSOS, não Plano de Risco. O Plano de Risco trata de ameaças e oportunidades que podem impactar o projeto (ex: fornecedor cancelar, climatempo ruim).\n\nA analogia demonstra que o planejamento de projetos segue a mesma lógica intuitiva do planejamento de eventos cotidianos.`,
  },
  {
    id: 26,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O gerente do projeto MediSys identificou desvios durante a execução. Sobre o Monitoramento e Controle, é CORRETO afirmar:`,
    options: [
      "O monitoramento deve ser realizado apenas ao final de cada fase do projeto.",
      "A responsabilidade do controle é exclusiva do time de desenvolvimento, sem envolvimento do gestor.",
      "O gestor deve monitorar constantemente as atividades e recursos, comunicando o estado do projeto aos interessados.",
      "O processo de controle ocorre apenas na fase de planejamento do projeto.",
      "O monitoramento não é necessário quando se utiliza metodologias ágeis.",
    ],
    correct: 2,
    explanation: `A resposta correta é: O gestor deve monitorar constantemente as atividades e recursos, comunicando o estado do projeto aos interessados.\n\nO Monitoramento e Controle é TRANSVERSAL — ocorre durante TODA a execução, não apenas em momentos específicos.\n\nResponsabilidades do gestor:\n✓ Monitorar constantemente atividades e recursos\n✓ Identificar desvios em relação ao planejado\n✓ Comunicar sistematicamente o estado do projeto\n✓ Tomar ações corretivas quando necessário\n✓ Resolver conflitos entre membros do time\n\nErros das outras alternativas:\nA – Monitoramento apenas ao final de fase perderia desvios durante a execução\nB – Responsabilidade é do GESTOR, com participação da equipe\nD – Controle acontece na EXECUÇÃO, não apenas no planejamento\nE – Em ágil o monitoramento é ainda mais frequente (diário)`,
  },
  {
    id: 27,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `Segundo Menezes (2018, p. 118), três fatores fundamentais devem ser equilibrados na gestão de stakeholders. Complete as lacunas:\n\n"I. _______ – é definida pela posição que a pessoa ocupa na organização e pelo poder que lhe é conferido.\nII. _______ – refere-se aos recursos e mecanismos para que as informações possam fluir e as decisões possam ser tomadas.\nIII. _______ – mostra como é feita a divisão do trabalho, sua abrangência e a forma de ser conduzida."`,
    options: [
      "Liderança / Coordenação / Execução.",
      "Autoridade / Comunicação / Atividade.",
      "Poder / Informação / Trabalho.",
      "Hierarquia / Transparência / Produção.",
      "Controle / Divulgação / Operação.",
    ],
    correct: 1,
    explanation: `A resposta correta é: Autoridade / Comunicação / Atividade.\n\nOS TRÊS FATORES (Menezes, 2018, p. 118):\n\n1. AUTORIDADE:\n- Posição que a pessoa ocupa na organização\n- Poder que lhe é conferido\n- Como esse poder é exercido na condução das atividades\n- Como ocorre a delegação de tarefas\n\n2. COMUNICAÇÃO:\n- Recursos e mecanismos para fluxo de informações\n- Para que decisões possam ser tomadas\n- Grau de formalidade ou informalidade\n- Canais, frequência e clareza das mensagens\n\n3. ATIVIDADE:\n- Divisão do trabalho\n- Abrangência de cada atividade\n- Forma de ser conduzida e sequência\n\nEquilíbrio: a intensidade de cada fator pode ser ajustada conforme as diversas situações do projeto.`,
  },
  {
    id: 28,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O gestor do BDParty precisa identificar quais atividades pertencem ao MONITORAMENTO E CONTROLE:\n\nI. Realizar reuniões de avaliação das parciais do software entregue.\nII. Divulgar a situação do desenvolvimento sistematicamente para os stakeholders.\nIII. Instalar o ambiente de desenvolvimento e configurar servidores.\nIV. Resolver conflitos entre membros do time e com o patrocinador.\nV. Realizar a homologação do software com o cliente.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as atividades I, II e IV são de Monitoramento e Controle.",
      "Apenas as atividades I, II, IV e V são de Monitoramento e Controle.",
      "Apenas as atividades II, III e V são de Monitoramento e Controle.",
      "Todas as atividades são de Monitoramento e Controle.",
      "Apenas a atividade III é de Monitoramento e Controle.",
    ],
    correct: 1,
    explanation: `Apenas as atividades I, II, IV e V são de Monitoramento e Controle.\n\nI. MONITORAMENTO ✓ – Reuniões de avaliação parcial monitoram progresso, identificam desvios e geram feedback.\n\nII. MONITORAMENTO ✓ – Divulgar sistematicamente a situação é comunicação de controle, mantendo stakeholders informados.\n\nIII. EXECUÇÃO ✗ – Instalar ambiente e configurar servidores são atividades operacionais de setup técnico (execução).\n\nIV. CONTROLE ✓ – Resolver conflitos é função gerencial de controle. Conflitos não resolvidos impactam o andamento do projeto.\n\nV. MONITORAMENTO ✓ – A homologação é o processo formal de verificação e aceite pelo cliente — atividade central do controle de qualidade.`,
  },
  {
    id: 29,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `Analise a asserção-razão sobre lições aprendidas (Cavalcanti, 2016, p. 215):\n\nI. Para alimentação de uma base histórica, deve-se realizar sessões para o registro de lições aprendidas, envolvendo o gerente de projetos e a equipe,\n\nPORQUE\n\nII. o registro de lições aprendidas é opcional e deve ser feito apenas em projetos de grande porte.\n\nAssinale a alternativa correta.`,
    options: [
      "As duas afirmações são verdadeiras, e a segunda justifica a primeira.",
      "As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.",
      "A primeira afirmação é verdadeira, e a segunda é falsa.",
      "A primeira afirmação é falsa, e a segunda é verdadeira.",
      "As duas afirmações são falsas.",
    ],
    correct: 2,
    explanation: `A primeira afirmação é verdadeira, e a segunda é falsa.\n\nI. VERDADEIRA – Cavalcanti (2016, p. 215): "deve-se realizar uma ou mais sessões para registro de lições aprendidas, envolvendo o GP e a equipe." Prática essencial do encerramento de todos os projetos.\n\nII. FALSA – Lições aprendidas NÃO são opcionais. Devem ser realizadas em TODOS os projetos, independentemente do tamanho:\n✓ Alimenta base histórica da organização\n✓ Evita repetição de erros em projetos futuros\n✓ Documenta o que funcionou para replicar\n✓ Promove aprendizado organizacional contínuo\n\nO que registrar: experiências positivas, problemas e como foram resolvidos, atrasos, conflitos, técnicas eficazes e o que evitar.`,
  },
  {
    id: 30,
    block: 3,
    blockName: "Processos de Projeto de Software",
    question: `O gestor TSUKATA acompanha os resultados de cada processo no ServAgriTech. Analise as afirmativas:\n\nI. Elaborar o roteiro do projeto a partir de informações de alto nível é praticar o planejamento do projeto.\nII. Ao alcançar o monitoramento, é porque a equipe fez medição pela qualidade, pontualidade, cumprimento do orçamento e satisfação do cliente.\nIII. Quando o gestor acompanha cada resultado dos processos, está praticando o planejamento do projeto.\n\nAssinale a alternativa correta.`,
    options: [
      "As afirmativas I, II e III são verdadeiras.",
      "As afirmativas I e II são verdadeiras, sendo que a III é falsa.",
      "As afirmativas I e III são verdadeiras, sendo que a II é falsa.",
      "Apenas a afirmativa II é verdadeira.",
      "Todas as afirmativas são falsas.",
    ],
    correct: 1,
    explanation: `As afirmativas I e II são verdadeiras, sendo que a III é falsa.\n\nI. VERDADEIRA – Elaborar roteiro do projeto a partir de informações de alto nível é PLANEJAMENTO. O gestor transforma objetivos amplos em plano detalhado com atividades, prazos, recursos e entregas.\n\nII. VERDADEIRA – O monitoramento efetivo mede 4 dimensões:\n- Qualidade (atende aos requisitos?)\n- Pontualidade (está no prazo?)\n- Orçamento (dentro do custo?)\n- Satisfação do cliente (atende às expectativas?)\n\nIII. FALSA – Acompanhar cada resultado dos processos é MONITORAMENTO E CONTROLE, não planejamento. Planejamento ocorre ANTES da execução; monitoramento ocorre DURANTE para verificar alinhamento ao plano.`,
  },
];

const questionsBlock4 = [
  {
    id: 31,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `Segundo Pressman (2021, p. 182), analise os objetivos ao projetar uma arquitetura de software:\n\nI. Analisar a efetividade do projeto no atendimento dos requisitos declarados.\nII. Considerar alternativas de arquitetura em um estágio em que fazer mudanças ainda é relativamente fácil.\nIII. Reduzir os riscos associados à construção do software.\nIV. Definir a arquitetura apenas após a conclusão de toda a codificação do sistema.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas I e IV são verdadeiras.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I, II e III são verdadeiras.\n\nI. VERDADEIRA – Analisar se a arquitetura atende efetivamente aos requisitos (funcionais e não funcionais: performance, segurança, escalabilidade) é o primeiro objetivo.\n\nII. VERDADEIRA – Considerar alternativas ANTES de codificar é estratégico. Mudanças arquiteturais durante ou após a codificação são extremamente custosas. Muito mais barato mudar um diagrama do que reescrever código.\n\nIII. VERDADEIRA – Arquitetura bem definida reduz riscos técnicos: clarifica dependências, identifica pontos críticos, orienta decisões de design e evita surpresas.\n\nIV. FALSA – Arquitetura APÓS codificação é o oposto do correto. Deve ser definida ANTES para guiar o desenvolvimento.`,
  },
  {
    id: 32,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `Segundo Pressman (2021, p. 186), complete a definição de estilo de arquitetura:\n\n"Um estilo de arquitetura descreve: (1) um conjunto de _______ que realiza funções exigidas; (2) um conjunto de _______ que habilitam comunicação entre componentes; (3) _______ que definem como os componentes podem ser integrados; e (4) modelos _______ que permitem compreender as propriedades do sistema."`,
    options: [
      "módulos / interfaces / padrões / matemáticos.",
      "componentes / conectores / restrições / semânticos.",
      "classes / métodos / regras / funcionais.",
      "objetos / mensagens / normas / lógicos.",
      "elementos / protocolos / diretrizes / conceituais.",
    ],
    correct: 1,
    explanation: `A resposta correta é: componentes / conectores / restrições / semânticos.\n\nDefinição de Estilo de Arquitetura (Pressman, 2021, p. 186):\n\n1. COMPONENTES – elementos que realizam funções exigidas.\nEx: módulos, classes OO, bancos de dados.\n\n2. CONECTORES – habilitam "comunicação, coordenação e cooperação" entre componentes.\nEx: chamadas de procedimento, eventos, pipes, protocolos de rede.\n\n3. RESTRIÇÕES – regras que definem como os componentes podem ser integrados.\nDeterminam o que é permitido e proibido na arquitetura.\n\n4. MODELOS SEMÂNTICOS – permitem compreender propriedades do sistema pela análise das partes constituintes.\nDão significado à estrutura arquitetural.\n\nExemplos de estilos: em camadas, cliente-servidor, orientado a objetos, microserviços.`,
  },
  {
    id: 33,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `O arquiteto do SMPA precisa aplicar os princípios para decisões arquiteturais. Analise:\n\nI. Economia – deve-se ter cuidado com recursos desnecessários, usando abstração para evitar complexidade em demasia.\nII. Visibilidade – a motivação pela arquitetura escolhida deve estar tecnicamente clara e comunicada ao time eficazmente.\nIII. Simetria – projetos simétricos são mais difíceis de entender, sendo preferível a assimetria.\nIV. Emersão – comportamento e controle emergentes e auto-organizados são o segredo da criação de arquiteturas expansíveis e flexíveis.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I, II e IV são verdadeiras.\n\nI. VERDADEIRA – ECONOMIA: evitar complexidade desnecessária. Abstração é ferramenta para simplificar sem perder expressividade. Sistemas simples de entender são mais fáceis de manter e evoluir.\n\nII. VERDADEIRA – VISIBILIDADE: o material afirma: "o projetista deve dedicar tempo para comunicar sua escolha de arquitetura a todos do time, garantindo que o software manterá os mesmos princípios do início ao fim."\n\nIII. FALSA – A afirmação está INVERTIDA. A SIMETRIA FACILITA (não dificulta) a compreensão. Projetos simétricos são mais fáceis de entender, testar e manter.\n\nIV. VERDADEIRA – EMERSÃO: comportamentos emergentes e auto-organizados são o "segredo" para arquiteturas expansíveis, eficientes e econômicas.`,
  },
  {
    id: 34,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `O SMPA (Sistema de Monitoramento na Produção Agrícola) foi projetado com arquitetura em camadas. Analise:\n\nI. Camada de dispositivos IoT: coleta dados de sensores (temperatura, umidade, qualidade do solo) espalhados pela fazenda.\nII. Camada de processamento e análise: processa, limpa e analisa dados, podendo incluir aprendizado de máquina para previsões.\nIII. Camada de aplicação web: permite acesso em tempo real via computadores, smartphones e tablets.\nIV. Camada de armazenamento: banco de dados relacional, NoSQL ou combinação de ambos.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nI. VERDADEIRA – Camada IoT: sensores coletam dados brutos (temperatura, umidade do solo, níveis de água, qualidade do solo).\n\nII. VERDADEIRA – Camada de Processamento: recebe dados da IoT, realiza limpeza e análise estatística. Machine learning pode prever condições futuras como pragas ou necessidade de irrigação.\n\nIII. VERDADEIRA – Camada Web: interface acessível de qualquer dispositivo para visualização em tempo real, históricos e recebimento de alertas.\n\nIV. VERDADEIRA – Camada de Armazenamento: relacional (MySQL) para dados estruturados, NoSQL (MongoDB) para séries temporais de IoT, ou arquitetura híbrida.\n\nO SMPA demonstra na prática como a arquitetura em camadas distribui responsabilidades de forma modular.`,
  },
  {
    id: 35,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `O SMPA possui um Sistema de Alerta integrado. Analise as afirmativas:\n\nI. O sistema de alerta envia notificações em tempo real sobre eventos como previsão de chuva pesada ou problemas com sensores.\nII. O sistema de alerta integra-se com as demais camadas, recebendo dados processados para gerar os alertas.\nIII. O sistema de alerta funciona de forma completamente isolada, sem comunicação com outras camadas do SMPA.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I e II são verdadeiras.\n\nI. VERDADEIRA – Notificações em tempo real sobre: previsão de chuva pesada, problemas com sensores, temperatura crítica, necessidade urgente de irrigação ou aplicação de defensivos.\n\nII. VERDADEIRA – O sistema de alerta é fortemente integrado:\n- Recebe dados da camada de processamento (onde eventos críticos são identificados)\n- Consulta banco de dados para histórico e thresholds\n- Entrega notificações pela camada de aplicação\n\nIII. FALSA – Funcionamento ISOLADO tornaria o sistema de alerta inútil. Ele depende de TODAS as outras camadas: IoT (dados), Processamento (eventos críticos), Armazenamento (histórico) e Aplicação Web (entrega das notificações).`,
  },
  {
    id: 36,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `Analise a asserção-razão sobre comunicação da arquitetura:\n\nI. O projetista ou engenheiro de software deve dedicar tempo para comunicar sua escolha de arquitetura a todos do time,\n\nPORQUE\n\nII. isso garantirá que o software manterá os mesmos princípios do início ao fim do projeto, evitando decisões de implementação inconsistentes.\n\nAssinale a alternativa correta.`,
    options: [
      "As duas afirmações são verdadeiras, e a segunda justifica a primeira.",
      "As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.",
      "A primeira afirmação é verdadeira, e a segunda é falsa.",
      "A primeira afirmação é falsa, e a segunda é verdadeira.",
      "As duas afirmações são falsas.",
    ],
    correct: 0,
    explanation: `As duas afirmações são verdadeiras, e a segunda justifica a primeira.\n\nI. VERDADEIRA – O material afirma explicitamente: "O projetista deve dedicar tempo para comunicar sua escolha de arquitetura a todos do time." Não é recomendação opcional — é requisito para o sucesso arquitetural.\n\nII. VERDADEIRA E JUSTIFICA – A comunicação garante que "o software manterá os mesmos princípios do início ao fim." Explica POR QUÊ a comunicação é necessária:\n\nSem comunicação:\n✗ Desenvolvedores tomam decisões individuais conflitantes\n✗ Acoplamentos indesejados surgem\n✗ Camadas são violadas e débito técnico acumula\n\nCom comunicação:\n✓ Time alinhado em princípios e padrões\n✓ Decisões de implementação consistentes\n✓ Arquitetura preservada ao longo do projeto`,
  },
  {
    id: 37,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `O arquiteto está comparando estilos e padrões arquitetônicos para um sistema financeiro. Analise:\n\nI. Um padrão de arquitetura impõe uma transformação no projeto, detalhando como o software tratará aspectos específicos em termos de infraestrutura.\nII. Padrões de arquitetura tendem a tratar questões comportamentais específicas, como sincronização em sistemas de tempo real.\nIII. Padrões e estilos arquitetônicos são exatamente a mesma coisa e podem ser usados como sinônimos.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Todas as afirmativas são falsas.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I e II são verdadeiras.\n\nI. VERDADEIRA – Um padrão impõe TRANSFORMAÇÃO no projeto. É uma "regra sobre a arquitetura" para tratar aspectos específicos de funcionalidade em termos de infraestrutura (concorrência, cache, autenticação).\n\nII. VERDADEIRA – Padrões tratam questões COMPORTAMENTAIS específicas:\n- Como sistemas de tempo real tratam SINCRONIZAÇÃO\n- Como sistemas distribuídos tratam INTERRUPÇÕES\n- Como sistemas críticos tratam TOLERÂNCIA A FALHAS\n\nIII. FALSA – Padrões e estilos NÃO são a mesma coisa:\n\nESTILO: estrutura geral e organização (Camadas, MVC, Microserviços)\nPADRÃO: solução para problema específico (Singleton, Observer, Cache, Circuit Breaker)`,
  },
  {
    id: 38,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `O material apresenta a arquitetura em camadas com operações que progridem da camada mais interna à mais externa. Qual a sequência CORRETA, da mais interna para a mais externa?`,
    options: [
      "Interface do usuário → Sistema operacional → Utilitários → Instruções de máquina.",
      "Instruções de máquina → Utilitários → Sistema operacional → Interface do usuário.",
      "Sistema operacional → Utilitários → Interface do usuário → Instruções de máquina.",
      "Utilitários → Instruções de máquina → Sistema operacional → Interface do usuário.",
      "Interface do usuário → Utilitários → Instruções de máquina → Sistema operacional.",
    ],
    correct: 1,
    explanation: `A resposta correta é: Instruções de máquina → Utilitários → Sistema operacional → Interface do usuário.\n\n1ª CAMADA (mais interna) – INSTRUÇÕES DE MÁQUINA:\n- Nível mais baixo, próximo ao hardware\n- Operações binárias e instruções do processador\n\n2ª CAMADA – UTILITÁRIOS:\n- Serviços de suporte e funções auxiliares\n- Bibliotecas do sistema\n\n3ª CAMADA – SISTEMA OPERACIONAL:\n- Interface com o hardware\n- Gerenciamento de memória, processos e arquivos\n\n4ª CAMADA (mais externa) – INTERFACE DO USUÁRIO:\n- Ponto de contato com o usuário\n- Apresentação e interação\n\nRegra: quanto mais externa a camada, mais próxima do usuário e mais distante das instruções de máquina.`,
  },
  {
    id: 39,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `Sobre o princípio de Espaçamento na arquitetura de software, é CORRETO afirmar:`,
    options: [
      "Espaçamento refere-se à distância física entre os servidores do sistema distribuído.",
      "Espaçamento representa o tempo entre as iterações do projeto de desenvolvimento.",
      "Espaçamento refere-se ao grau de separação por interesses — pode ficar muito fragmentado, levando a dificuldades de visibilidade do sistema.",
      "Espaçamento define a quantidade de memória RAM necessária para o sistema funcionar.",
      "Espaçamento é o intervalo de tempo entre as entregas de incrementos de software.",
    ],
    correct: 2,
    explanation: `A resposta correta é: Espaçamento refere-se ao grau de separação por interesses — pode ficar muito fragmentado, levando a dificuldades de visibilidade.\n\nDefinição do material didático:\n"A arquitetura pode aumentar ou reduzir o grau de separação por interesses. Uma arquitetura pode ficar muito fragmentada, levando a dificuldades de visibilidade."\n\nRISCO do espaçamento EXCESSIVO:\n- Sistema fragmentado demais\n- Difícil visualizar o todo\n- Complexidade de integração aumenta\n\nRISCO do espaçamento INSUFICIENTE:\n- Componentes muito acoplados\n- Mudança em um afeta vários outros\n- Difícil manutenção e teste\n\nEQUILÍBRIO ideal: modularidade suficiente sem fragmentação excessiva.`,
  },
  {
    id: 40,
    block: 4,
    blockName: "Arquitetura de Software",
    question: `Sobre manutenção da arquitetura de software ao longo do ciclo de vida do sistema, é CORRETO afirmar:`,
    options: [
      "A arquitetura definida no início não precisa ser mantida durante as evoluções do sistema.",
      "O ciclo de vida de um sistema requer atenção à manutenção da arquitetura, além de manutenções em funcionalidades e correções de bugs.",
      "Abstrações na arquitetura dificultam a legibilidade e manutenção do código-fonte.",
      "A arquitetura deve ser completamente redesenhada a cada nova funcionalidade adicionada.",
      "A manutenção da arquitetura é responsabilidade exclusiva dos desenvolvedores júnior.",
    ],
    correct: 1,
    explanation: `A resposta correta é: O ciclo de vida de um sistema requer atenção à manutenção da arquitetura, além de manutenções em funcionalidades e correções de bugs.\n\nO material destaca o GRAU DE MANUTENIBILIDADE como fator do ciclo de vida do sistema.\n\nPor que a manutenção arquitetural é essencial:\n✓ Evoluções devem respeitar os princípios arquiteturais originais\n✓ Novas funcionalidades devem se adequar à arquitetura existente\n✓ Sem atenção, o sistema degrada e o custo de manutenção aumenta exponencialmente\n✓ "Débito técnico" acumula\n\nPor que as outras alternativas estão ERRADAS:\nA – Arquitetura DEVE ser mantida durante evoluções\nC – Abstrações MELHORAM (não dificultam) legibilidade e manutenção\nD – Redesenho completo a cada funcionalidade é insustentável\nE – É responsabilidade do ARQUITETO e equipe sênior`,
  },
];

const questionsBlock5 = [
  {
    id: 41,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `Uma equipe está implementando XP (Extreme Programming). Sobre as práticas do XP segundo Pressman (2021, p. 46), analise:\n\nI. No planejamento, o XP utiliza histórias de usuário, valores, critérios de teste de aceitação e plano de iteração.\nII. Na codificação, as principais práticas são refatoração e programação em pares.\nIII. No teste, o XP utiliza teste de aceitação, teste de unidade e integração contínua.\nIV. A versão/entrega resulta em incremento de software com velocidade de projeto calculada.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas as afirmativas I e IV são verdadeiras.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nDiagrama completo do XP (Pressman, 2021, p. 46):\n\nPLANEJAMENTO: Histórias de usuário, Valores, Critérios de teste de aceitação, Plano de iteração.\n\nPROJETO: Projeto simples, Cartões CRC, Soluções pontuais, Protótipos.\n\nCODIFICAÇÃO: Refatoração (melhoria contínua do código), Programação em pares.\n\nTESTE: Teste de aceitação (validação com cliente), Teste de unidade (validação técnica), Integração contínua (build automático).\n\nVERSÃO/ENTREGA: Incremento de software (funcionalidade entregue), Velocidade de projeto calculada (métrica de produtividade).\n\nValores do XP (centro do diagrama): Comunicação, Simplicidade, Feedback, Coragem, Respeito.`,
  },
  {
    id: 42,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `O gestor discute qualidade e Lean com sua equipe. Analise a asserção-razão:\n\nI. Perseguir a qualidade no processo de um Projeto de Software contempla também reduzir o esforço do desenvolvimento e maximizar o valor entregue,\n\nPORQUE\n\nII. o retrabalho é considerado um desperdício para o projeto, e o Lean considera reduzir custos (principalmente o desperdício), melhorar a qualidade e ampliar o valor para o cliente.\n\nAssinale a alternativa correta.`,
    options: [
      "As duas afirmações são verdadeiras, e a segunda justifica a primeira.",
      "As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.",
      "A primeira afirmação é verdadeira, e a segunda é falsa.",
      "A primeira afirmação é falsa, e a segunda é verdadeira.",
      "As duas afirmações são falsas.",
    ],
    correct: 0,
    explanation: `As duas afirmações são verdadeiras, e a segunda justifica a primeira.\n\nI. VERDADEIRA – Qualidade em software não se limita à ausência de bugs. Inclui:\n- Reduzir esforço desnecessário (eliminar retrabalho)\n- Maximizar valor entregue ao cliente\n- Eficiência no processo de desenvolvimento\n\nII. VERDADEIRA E JUSTIFICA – O Lean explica COMO e POR QUÊ qualidade implica em redução de esforço:\n- RETRABALHO = desperdício puro (horas gastas refazendo o que poderia ter sido feito correto)\n- Lean reduz CUSTOS eliminando desperdícios\n- Lean MELHORA a qualidade\n- Lean AMPLIA o valor para o cliente\n\nLean e metodologias ágeis são complementares e podem ser usados juntos no mesmo projeto.`,
  },
  {
    id: 43,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `Um desenvolvedor afirma que XP é apenas sobre codificação rápida sem qualidade. O arquiteto discorda.\n\nSobre o XP (Extreme Programming), é CORRETO afirmar:`,
    options: [
      "O XP não utiliza histórias de usuário — foca exclusivamente em documentação técnica detalhada.",
      "A programação em pares não é uma prática do XP, sendo apenas uma sugestão informal.",
      "O XP inclui práticas como refatoração, testes de unidade, integração contínua e entregas frequentes.",
      "No XP, os testes são realizados apenas ao final do desenvolvimento, antes da entrega.",
      "O XP é rígido a mudanças após o início da codificação, não permitindo adaptações.",
    ],
    correct: 2,
    explanation: `A resposta correta é: O XP inclui práticas como refatoração, testes de unidade, integração contínua e entregas frequentes.\n\nO XP é uma metodologia ágil com práticas bem definidas e rigorosas — não é codificação aleatória.\n\nPráticas centrais do XP:\n✓ REFATORAÇÃO – melhoria contínua da estrutura do código sem alterar comportamento\n✓ PROGRAMAÇÃO EM PARES – dois desenvolvedores, uma máquina: qualidade e transferência de conhecimento\n✓ TESTE DE UNIDADE – testes automatizados para cada unidade de código\n✓ INTEGRAÇÃO CONTÍNUA – código integrado e testado várias vezes ao dia\n✓ HISTÓRIAS DE USUÁRIO – requisitos em linguagem simples do cliente\n✓ ENTREGAS FREQUENTES – software funcional em ciclos curtos\n\nPor que as outras estão ERRADAS:\nA – XP SIM usa histórias de usuário\nB – Programação em pares É prática central do XP\nD – Testes são CONTÍNUOS, não apenas no final\nE – XP ABRAÇA mudanças, não as rejeita`,
  },
  {
    id: 44,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `O gestor do ServAgriTech quer implementar práticas Lean. Sobre o Lean no desenvolvimento de software, analise:\n\nI. O Lean considera o retrabalho um tipo de desperdício que deve ser eliminado para reduzir custos e melhorar a qualidade.\nII. O objetivo principal do Lean é ampliar o valor entregue ao cliente enquanto minimiza o desperdício no processo.\nIII. O Lean e as metodologias ágeis são incompatíveis, não podendo ser utilizados no mesmo projeto.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa III é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I e II são verdadeiras.\n\nI. VERDADEIRA – O RETRABALHO é um dos principais tipos de desperdício no Lean. Cada hora refazendo algo que poderia ter sido feito correto da primeira vez é recurso desperdiçado. Eliminar retrabalho reduz custos E melhora qualidade simultaneamente.\n\nII. VERDADEIRA – O objetivo do Lean é MÁXIMO VALOR com MÍNIMO DESPERDÍCIO:\n- Valor = funcionalidade que o cliente realmente usa e aprecia\n- Desperdício = código desnecessário, documentação excessiva, retrabalho, espera\n\nIII. FALSA – Lean e ágil são COMPLEMENTARES, não incompatíveis:\n- Ágil define O COMO (iterações, sprints, retrospectivas)\n- Lean define O QUÊ eliminar (desperdícios, ineficiências)\n- A combinação resulta em desenvolvimento mais eficiente e de maior qualidade`,
  },
  {
    id: 45,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `O gestor do SMPA precisa identificar os elementos imprescindíveis para iniciar o desenvolvimento:\n\nI. Quem definirá as funcionalidades (patrocinador ou usuário-chave).\nII. Tecnologias: qual banco de dados e qual linguagem de programação.\nIII. Prazo de conclusão do projeto.\nIV. A cor do logotipo do sistema.\nV. Quantas horas serão necessárias para definir as funcionalidades.\n\nAssinale os elementos IMPRESCINDÍVEIS.`,
    options: [
      "Apenas os elementos I, II, III e V são imprescindíveis.",
      "Apenas os elementos I, II e III são imprescindíveis.",
      "Apenas os elementos I, III e IV são imprescindíveis.",
      "Todos os elementos são imprescindíveis.",
      "Apenas os elementos II, IV e V são imprescindíveis.",
    ],
    correct: 0,
    explanation: `Apenas os elementos I, II, III e V são imprescindíveis.\n\nI. IMPRESCINDÍVEL ✓ – QUEM decide funcionalidades é fundamental. Define o "dono do produto" e orienta O QUÊ construir.\n\nII. IMPRESCINDÍVEL ✓ – TECNOLOGIAS impactam arquitetura, custo, prazo e manutenibilidade. Decisões técnicas de alto impacto que devem ser feitas cedo.\n\nIII. IMPRESCINDÍVEL ✓ – PRAZO define cronograma e afeta decisões de escopo, recursos e priorização. Sem prazo, não é possível planejar.\n\nIV. NÃO IMPRESCINDÍVEL ✗ – COR DO LOGOTIPO é aspecto visual secundário. Pode ser definido depois, não impede o início do desenvolvimento nem afeta decisões técnicas essenciais.\n\nV. IMPRESCINDÍVEL ✓ – HORAS para definir funcionalidades é crucial para planejamento. Impacta diretamente o cronograma e alocação de recursos.`,
  },
  {
    id: 46,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `O gestor está organizando as responsabilidades no projeto BDParty. Analise as afirmativas:\n\nI. O Gestor é responsável pela liderança e estratégia do projeto.\nII. O Cliente é responsável pelos resultados do sistema e pela lucratividade do negócio.\nIII. O Time de TI é responsável pela elaboração do design e construção da aplicação.\nIV. Os demais Stakeholders são responsáveis pela execução dos serviços e apoio às operações.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa I é verdadeira.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nO diagrama "Das Responsabilidades" do BDParty:\n\nI. VERDADEIRA – GESTOR:\n- Liderança: conduz equipe e projeto\n- Estratégia: alinha com objetivos organizacionais\n- Tomada de decisão e resolução de impasses\n\nII. VERDADEIRA – CLIENTE:\n- Resultados: responsável por usar o sistema para gerar resultado\n- Lucratividade: garantir retorno sobre o investimento\n- Aprovação e aceite formal do produto\n\nIII. VERDADEIRA – TIME DE TI:\n- Design: arquitetura, interface, banco de dados\n- Construção: codificação, testes, implantação\n\nIV. VERDADEIRA – DEMAIS STAKEHOLDERS:\n- Execução de serviços que o sistema suporta\n- Apoio e colaboração no uso\n\nImportante: O diagrama destaca "Conflito" e "Liderança" como elementos presentes na interação — conflitos são naturais e a liderança é o mecanismo de resolução.`,
  },
  {
    id: 47,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `O gestor planeja o ServAgriTech e precisa integrar stakeholders ao time de TI no ciclo de vida adaptativo. Sobre esta integração, é CORRETO afirmar:`,
    options: [
      "Stakeholders devem manter distância da equipe de TI para não interferir no desenvolvimento.",
      "A participação dos stakeholders é limitada a reuniões formais de validação no final de cada Sprint.",
      "Os stakeholders participam ativamente das decisões, esclarecimento de regras de negócio e escolha de tecnologias.",
      "A documentação formal substitui a necessidade de interação direta entre stakeholders e time de TI.",
      "A integração ocorre apenas na fase de encerramento do projeto.",
    ],
    correct: 2,
    explanation: `A resposta correta é: Os stakeholders participam ativamente das decisões, esclarecimento de regras de negócio e escolha de tecnologias.\n\nNo adaptativo, a integração é INTENSA e CONTÍNUA:\n✓ Stakeholders vivenciam intensamente a rotina com o time de TI\n✓ O time de operações pode ficar fisicamente alocado no ambiente de TI\n✓ Participação pode ser praticamente DIÁRIA\n✓ Dúvidas esclarecidas em tempo real\n\nO QUE OS STAKEHOLDERS FAZEM:\n✓ Participam de DECISÕES sobre funcionalidades e prioridades\n✓ Esclarecem REGRAS DE NEGÓCIO complexas\n✓ Participam da ESCOLHA DE TECNOLOGIAS adequadas ao negócio\n✓ Validam protótipos e incrementos continuamente\n\nPor que as outras estão ERRADAS:\nA – Distância causa mal-entendidos e retrabalho\nB – Participação é CONTÍNUA, não apenas em reuniões formais\nD – Manifesto Ágil: "Indivíduos e interações sobre processos e ferramentas"\nE – Integração ocorre DURANTE todo o projeto`,
  },
  {
    id: 48,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `Sobre o modelo incremental segundo Pressman (2022, p. 29), analise:\n\nI. No centro do diagrama está o "Início", de onde partem as atividades de Planejamento, Modelagem, Construção e Entrega.\nII. A Comunicação é representada como elemento que perpassa todos os incrementos, de forma contínua.\nIII. Cada incremento resulta em uma entrega com feedback do cliente, que alimenta o próximo incremento.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I e II são verdadeiras.",
      "Apenas as afirmativas I e III são verdadeiras.",
      "Apenas as afirmativas II e III são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa I é verdadeira.",
    ],
    correct: 3,
    explanation: `Todas as afirmativas são verdadeiras.\n\nI. VERDADEIRA – O diagrama mostra círculos concêntricos com "INÍCIO" no centro. As 4 atividades se expandem em cada incremento:\n- Planejamento: estimativas, cronogramas, análise de risco\n- Modelagem: análise e projeto\n- Construção: código e teste\n- Entrega: entrega e feedback\n\nII. VERDADEIRA – A COMUNICAÇÃO atravessa todos os círculos como uma linha transversal. Demonstra que comunicação é contínua e não limitada a um momento específico — é o elo entre todos os incrementos.\n\nIII. VERDADEIRA – Cada incremento termina com ENTREGA e coleta FEEDBACK. Este feedback orienta o próximo incremento, garantindo evolução alinhada às necessidades reais do cliente.\n\nO modelo combina elementos do cascata (sequencial dentro de cada incremento) com a filosofia ágil (entregas frequentes e feedback contínuo).`,
  },
  {
    id: 49,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `Faça a correspondência correta entre ciclo de vida e características (PMI, 2017, p. 19):\n\nI – Preditivo\nII – Incremental\nIII – Iterativo\nIV – Adaptativo\n\nA-1 = Baixo grau de mudanças / Baixa frequência de entrega\nA-2 = Baixo grau de mudanças / Alta frequência de entrega\nB-1 = Alto grau de mudanças / Baixa frequência de entrega\nB-2 = Alto grau de mudanças / Alta frequência de entrega`,
    options: [
      "I-A-1, II-A-2, III-B-1, IV-B-2.",
      "I-A-2, II-A-1, III-B-2, IV-B-1.",
      "I-B-1, II-B-2, III-A-1, IV-A-2.",
      "I-A-1, II-B-2, III-A-2, IV-B-1.",
      "I-B-2, II-A-1, III-B-1, IV-A-2.",
    ],
    correct: 0,
    explanation: `A resposta correta é: I-A-1, II-A-2, III-B-1, IV-B-2.\n\nPREDITIVO (I) → A-1 (Baixas mudanças / Baixa entrega):\nRequisitos estáveis, entrega única ao final.\nEx: sistema de controle industrial com especificações rígidas.\n\nINCREMENTAL (II) → A-2 (Baixas mudanças / Alta entrega):\nRequisitos definidos no início, entregas periódicas planejadas.\nEx: internet banking com funcionalidades entregues por módulo.\n\nITERATIVO (III) → B-1 (Altas mudanças / Baixa entrega):\nRequisitos refinados em cada ciclo, entregas menos frequentes.\nEx: sistema complexo de regras de negócio com prototipação.\n\nADAPTATIVO (IV) → B-2 (Altas mudanças / Alta entrega):\nRequisitos voláteis, entregas constantes e frequentes.\nEx: startup desenvolvendo produto inovador.\n\nComo lembrar: Incremental e Preditivo = BAIXAS mudanças. Preditivo e Iterativo = BAIXA entrega.`,
  },
  {
    id: 50,
    block: 5,
    blockName: "XP, Lean e Conceitos Integradores",
    question: `Para encerrar o estudo da Unidade 1, analise as afirmativas sobre os temas centrais:\n\nI. A palavra "projeto" tem origem no latim "projectus" e significa plano ou planejamento com intenção de realizar algo.\nII. O Triângulo de Talentos do PMI é composto por: Técnicas em Gestão de Projetos, Liderança e Gestão Estratégica e Negócios.\nIII. O modelo incremental de Pressman apresenta Comunicação, Planejamento, Modelagem, Construção e Entrega como atividades que se repetem em cada incremento.\nIV. Segundo Zimmermann (2001), investir em tecnologia é exclusivamente sobre inovação, não sobre competitividade.\n\nAssinale a alternativa correta.`,
    options: [
      "Apenas as afirmativas I, II e III são verdadeiras.",
      "Apenas as afirmativas I, II e IV são verdadeiras.",
      "Apenas as afirmativas II, III e IV são verdadeiras.",
      "Todas as afirmativas são verdadeiras.",
      "Apenas a afirmativa IV é verdadeira.",
    ],
    correct: 0,
    explanation: `Apenas as afirmativas I, II e III são verdadeiras.\n\nI. VERDADEIRA – PROJECTUS (latim): "Plano, planejamento que se faz com a intenção de realizar ou desenvolver alguma coisa." Definição fundamental da disciplina.\n\nII. VERDADEIRA – O Triângulo de Talentos do PMI tem exatamente 3 vértices:\n✓ Técnicas em Gestão de Projetos (experiência e metodologias)\n✓ Liderança (comportamento e relações interpessoais)\n✓ Gestão Estratégica e Negócios (alinhamento e retorno financeiro)\n\nIII. VERDADEIRA – O modelo incremental de Pressman (2022, p. 29) apresenta 5 atividades que se repetem: Comunicação (transversal), Planejamento, Modelagem, Construção e Entrega.\n\nIV. FALSA – Zimmermann (2001) afirma o CONTRÁRIO: "Investir em tecnologia NÃO é voltar-se apenas para a inovação — é uma forma de SOBREVIVER no mercado e de se tornar ou permanecer COMPETITIVO."`,
  },
];

// ============================================================
// CONFIGURAÇÃO PRINCIPAL
// ============================================================
const allQuestions = [
  ...questionsBlock1,
  ...questionsBlock2,
  ...questionsBlock3,
  ...questionsBlock4,
  ...questionsBlock5,
];

let currentQuestionIndex = 0;
let userAnswers = {};
let currentBlock = 1;
let blockScores = {
  1: { correct: 0, total: 10 },
  2: { correct: 0, total: 10 },
  3: { correct: 0, total: 10 },
  4: { correct: 0, total: 10 },
  5: { correct: 0, total: 10 },
};

// ===== LOCALSTORAGE =====
function saveToLocalStorage() {
  localStorage.setItem(
    "quizPS_Uni1",
    JSON.stringify({
      currentQuestionIndex,
      userAnswers,
      currentBlock,
      blockScores,
    }),
  );
}
function loadFromLocalStorage() {
  const data = localStorage.getItem("quizPS_Uni1");
  if (data) {
    const p = JSON.parse(data);
    currentQuestionIndex = p.currentQuestionIndex || 0;
    userAnswers = p.userAnswers || {};
    currentBlock = p.currentBlock || 1;
    blockScores = p.blockScores || {
      1: { correct: 0, total: 10 },
      2: { correct: 0, total: 10 },
      3: { correct: 0, total: 10 },
      4: { correct: 0, total: 10 },
      5: { correct: 0, total: 10 },
    };
    return true;
  }
  return false;
}
function clearLocalStorage() {
  localStorage.removeItem("quizPS_Uni1");
}

// ===== PROGRESSO =====
function updateProgress() {
  const q = allQuestions[currentQuestionIndex];
  const answered = Object.keys(userAnswers).length;
  document.getElementById("current-question").textContent =
    currentQuestionIndex + 1;
  document.getElementById("total-questions").textContent = allQuestions.length;
  document.getElementById("current-block").textContent = q
    ? q.block
    : currentBlock;
  document.getElementById("progress-fill").style.width =
    (answered / allQuestions.length) * 100 + "%";
}

// ===== RENDERIZAR QUESTÃO =====
function renderQuestion() {
  const q = allQuestions[currentQuestionIndex];
  if (!q) return;
  updateProgress();

  const savedAnswer = userAnswers[q.id];
  const isAnswered = savedAnswer !== undefined;

  const optionsHTML = q.options
    .map((opt, i) => {
      let cls = "option";
      if (isAnswered) {
        cls += " disabled";
        if (i === q.correct) cls += " correct";
        else if (i === savedAnswer) cls += " incorrect";
      }
      const checked = isAnswered && i === savedAnswer ? "checked" : "";
      return `<div class="${cls}" onclick="${isAnswered ? "" : `selectOption(${i})`}">
      <input type="radio" name="q${q.id}" value="${i}" ${checked} ${isAnswered ? "disabled" : ""}>
      <label>${String.fromCharCode(65 + i)}) ${opt}</label>
    </div>`;
    })
    .join("");

  const feedbackHTML = isAnswered
    ? `<div class="feedback ${savedAnswer === q.correct ? "correct" : "incorrect"} show">
        <div class="feedback-title">${savedAnswer === q.correct ? "✅ Resposta correta!" : "❌ Resposta incorreta!"}</div>
        <div class="feedback-text">${q.explanation}</div>
       </div>`
    : `<div class="feedback" id="feedback-${q.id}"></div>`;

  const isPrevDisabled = currentQuestionIndex === 0 ? "disabled" : "";
  const isLastInBlock = (currentQuestionIndex + 1) % 10 === 0;
  const nextLabel = isLastInBlock
    ? currentQuestionIndex === allQuestions.length - 1
      ? "Ver Resultado Final →"
      : "Resultado do Bloco →"
    : "Próxima →";

  document.getElementById("question-container").innerHTML = `
    <div class="question-header">
      <span class="question-number">Questão ${q.id} de ${allQuestions.length}</span>
      <span class="block-info">Bloco ${q.block}: ${q.blockName}</span>
    </div>
    <div class="question-text">${q.question}</div>
    <div class="options">${optionsHTML}</div>
    ${feedbackHTML}
    <div class="buttons" id="submit-buttons" ${isAnswered ? 'style="display:none"' : ""}>
      <button class="btn btn-secondary" onclick="goToPrevious()" ${isPrevDisabled}>← Anterior</button>
      <button class="btn btn-primary" onclick="submitAnswer()">Confirmar Resposta</button>
    </div>
    <div class="buttons" id="nav-buttons" ${!isAnswered ? 'style="display:none"' : ""}>
      <button class="btn btn-secondary" onclick="goToPrevious()" ${isPrevDisabled}>← Anterior</button>
      <button class="btn btn-primary" onclick="goToNext()">${nextLabel}</button>
    </div>
  `;
}

// ===== SELECIONAR OPÇÃO =====
function selectOption(index) {
  const q = allQuestions[currentQuestionIndex];
  document
    .querySelectorAll(".option")
    .forEach((el) => el.classList.remove("selected"));
  const opts = document.querySelectorAll(".option");
  if (opts[index]) opts[index].classList.add("selected");
  const radio = document.querySelector(
    `input[name="q${q.id}"][value="${index}"]`,
  );
  if (radio) radio.checked = true;
}

// ===== CONFIRMAR RESPOSTA =====
function submitAnswer() {
  const q = allQuestions[currentQuestionIndex];
  const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
  if (!selected) {
    alert("⚠️ Por favor, selecione uma alternativa antes de confirmar.");
    return;
  }
  const chosenIndex = parseInt(selected.value);
  userAnswers[q.id] = chosenIndex;
  if (chosenIndex === q.correct) blockScores[q.block].correct++;
  saveToLocalStorage();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== NAVEGAÇÃO =====
function goToPrevious() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    currentBlock = allQuestions[currentQuestionIndex].block;
    saveToLocalStorage();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goToNext() {
  const isLastInBlock = (currentQuestionIndex + 1) % 10 === 0;
  if (isLastInBlock) {
    currentQuestionIndex === allQuestions.length - 1
      ? showFinalResult()
      : showBlockResult();
  } else {
    currentQuestionIndex++;
    currentBlock = allQuestions[currentQuestionIndex].block;
    saveToLocalStorage();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ===== RESULTADO DO BLOCO =====
function showBlockResult() {
  const block = currentBlock;
  const score = blockScores[block];
  const pct = ((score.correct / score.total) * 100).toFixed(1);
  const icon = pct >= 70 ? "🏆" : pct >= 50 ? "📚" : "📖";
  const msg =
    pct >= 70
      ? "Ótimo desempenho neste bloco! Continue assim."
      : pct >= 50
        ? "Desempenho regular. Revise as questões que errou antes de continuar."
        : "Revise o material deste bloco com atenção antes de prosseguir.";

  document.getElementById("block-result-screen").innerHTML = `
    <div class="result-icon">${icon}</div>
    <h2 class="result-title">Bloco ${block} Concluído!</h2>
    <p class="result-score">${score.correct} de ${score.total} corretas (${pct}%)</p>
    <p class="performance-message">${msg}</p>
    <div class="buttons">
      <button class="btn btn-secondary" onclick="reviewBlock(${block})">📝 Revisar Bloco</button>
      <button class="btn btn-primary" onclick="continueToNextBlock()">Continuar para Próximo Bloco →</button>
    </div>`;

  document.getElementById("question-container").style.display = "none";
  document.getElementById("block-result-screen").classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function continueToNextBlock() {
  document.getElementById("block-result-screen").classList.remove("show");
  document.getElementById("question-container").style.display = "block";
  currentQuestionIndex++;
  currentBlock = allQuestions[currentQuestionIndex].block;
  saveToLocalStorage();
  renderQuestion();
}

function reviewBlock(blockNumber) {
  const first = allQuestions.findIndex((q) => q.block === blockNumber);
  currentQuestionIndex = first;
  currentBlock = blockNumber;
  document.getElementById("block-result-screen").classList.remove("show");
  document.getElementById("question-container").style.display = "block";
  saveToLocalStorage();
  renderQuestion();
}

// ===== RESULTADO FINAL =====
function showFinalResult() {
  let totalCorrect = 0;
  Object.values(blockScores).forEach((b) => (totalCorrect += b.correct));
  const total = allQuestions.length;
  const pct = ((totalCorrect / total) * 100).toFixed(1);

  let icon, title, msg;
  if (pct >= 90) {
    icon = "🏆";
    title = "Parabéns! Aprovado com Excelência!";
    msg =
      "Você demonstrou domínio excepcional da Unidade 1 de Projeto de Software. Continue com este excelente desempenho!";
  } else if (pct >= 70) {
    icon = "✅";
    title = "Aprovado!";
    msg =
      "Bom desempenho! Você compreendeu solidamente os conceitos da Unidade 1. Continue estudando para aprimorar ainda mais!";
  } else if (pct >= 50) {
    icon = "📚";
    title = "Resultado Regular";
    msg =
      "Revise o material didático da Unidade 1, especialmente os tópicos em que teve mais dificuldade.";
  } else {
    icon = "📖";
    title = "Necessita Reforço";
    msg =
      "É importante dedicar mais tempo ao estudo da Unidade 1. Revise os conceitos fundamentais e tente novamente.";
  }

  const blockNames = {
    1: "Introdução a Projeto de Software",
    2: "Ciclo de Vida do Projeto",
    3: "Processos de Projeto",
    4: "Arquitetura de Software",
    5: "XP, Lean e Conceitos Integradores",
  };
  let blocksHTML = "";
  for (let i = 1; i <= 5; i++) {
    const b = blockScores[i];
    const bPct = ((b.correct / b.total) * 100).toFixed(1);
    blocksHTML += `<div class="block-result"><h3>Bloco ${i}: ${blockNames[i]}</h3><div class="block-score">${b.correct} de ${b.total} corretas (${bPct}%)</div></div>`;
  }

  document.getElementById("result-screen").innerHTML = `
    <div class="result-icon">${icon}</div>
    <h2 class="result-title">${title}</h2>
    <p class="result-score">Pontuação Final: ${totalCorrect} de ${total} (${pct}%)</p>
    <p class="performance-message">${msg}</p>
    <div class="result-details">
      <div class="result-detail-item"><span class="result-detail-label">Total de questões:</span><span class="result-detail-value">${total}</span></div>
      <div class="result-detail-item"><span class="result-detail-label">Respostas corretas:</span><span class="result-detail-value">${totalCorrect}</span></div>
      <div class="result-detail-item"><span class="result-detail-label">Respostas incorretas:</span><span class="result-detail-value">${total - totalCorrect}</span></div>
      <div class="result-detail-item"><span class="result-detail-label">Aproveitamento:</span><span class="result-detail-value">${pct}%</span></div>
    </div>
    <h3 style="margin-top:30px;margin-bottom:20px;color:#333;">Desempenho por Bloco:</h3>
    ${blocksHTML}
    <div class="buttons" style="margin-top:30px;">
      <button class="btn btn-secondary" onclick="reviewQuiz()">📝 Revisar Questões</button>
      <button class="btn btn-primary" onclick="restartQuiz()">🔄 Reiniciar Quiz</button>
    </div>`;

  document.getElementById("question-container").style.display = "none";
  document.getElementById("block-result-screen").classList.remove("show");
  document.getElementById("result-screen").classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reviewQuiz() {
  currentQuestionIndex = 0;
  currentBlock = 1;
  document.getElementById("result-screen").classList.remove("show");
  document.getElementById("question-container").style.display = "block";
  renderQuestion();
}

function restartQuiz() {
  if (
    confirm(
      "Tem certeza que deseja reiniciar o quiz? Todo o progresso será perdido.",
    )
  ) {
    clearLocalStorage();
    currentQuestionIndex = 0;
    userAnswers = {};
    currentBlock = 1;
    blockScores = {
      1: { correct: 0, total: 10 },
      2: { correct: 0, total: 10 },
      3: { correct: 0, total: 10 },
      4: { correct: 0, total: 10 },
      5: { correct: 0, total: 10 },
    };
    document.getElementById("result-screen").classList.remove("show");
    document.getElementById("block-result-screen").classList.remove("show");
    document.getElementById("question-container").style.display = "block";
    renderQuestion();
  }
}

// ===== INICIALIZAÇÃO =====
function init() {
  const hasData = loadFromLocalStorage();
  if (hasData) {
    const resume = confirm(
      "Você tem um progresso salvo. Deseja continuar de onde parou?",
    );
    if (!resume) {
      clearLocalStorage();
      currentQuestionIndex = 0;
      userAnswers = {};
      currentBlock = 1;
      blockScores = {
        1: { correct: 0, total: 10 },
        2: { correct: 0, total: 10 },
        3: { correct: 0, total: 10 },
        4: { correct: 0, total: 10 },
        5: { correct: 0, total: 10 },
      };
    }
  }
  renderQuestion();
}

document.addEventListener("DOMContentLoaded", init);
