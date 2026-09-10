/**
 * Publicações do Instagram de @adrianamelo.alergista selecionadas para o site.
 *
 * As capas ficam em `public/images/conteudo/<code>.webp` (720x900, WebP).
 * O texto é a legenda original do post, sem as hashtags.
 *
 * Para adicionar um post: salve a capa como `<code>.webp` na pasta acima e
 * acrescente uma entrada aqui. O `code` é o trecho final da URL do post:
 * de instagram.com/p/DcwCsKyjNkW/ o code é DcwCsKyjNkW.
 */

export const postThemes = [
  { id: "rinite", label: "Rinite e vias aéreas" },
  { id: "pele", label: "Pele e urticária" },
  { id: "imunidade", label: "Imunidade e vacinas" },
  { id: "criancas", label: "Crianças e gestação" },
  { id: "testes", label: "Testes e diagnóstico" },
  { id: "reacoes", label: "Anafilaxia e medicamentos" },
  { id: "alimentar", label: "Alergia alimentar" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "rotina", label: "Dia a dia" },
  { id: "asma", label: "Asma" },
  { id: "bastidores", label: "Bastidores" },
] as const;

export type PostTheme = (typeof postThemes)[number]["id"];

export type InstagramPost = {
  /** Trecho final da URL: instagram.com/p/<code>/ */
  code: string;
  tema: PostTheme;
  titulo: string;
  /** Legenda original do post, sem hashtags. */
  texto: string;
  /** AAAA-MM-DD */
  data: string;
};

/** Ordenados do mais recente para o mais antigo. */
export const posts: InstagramPost[] = [
  {
    code: "DdBvqdBCWVQ",
    tema: "rinite",
    titulo: "Você está usando o spray nasal errado",
    texto:
      "Você usa o spray nasal, mas sente que ele não faz efeito? Talvez o problema esteja na forma de aplicar. Apontar o jato para o centro do nariz ou puxar o ar com muita força pode fazer o medicamento atingir o septo ou escorrer para a garganta. A direção correta é para a lateral do nariz, em direção à orelha, inspirando suavemente.",
    data: "2026-09-08",
  },
  {
    code: "DcwCsKyjNkW",
    tema: "alimentar",
    titulo: "O que a frente da embalagem não conta",
    texto:
      "A frente da embalagem vende. O verso conta a verdade. \"Sem lactose\" pode conter leite. \"Vegano\" não significa livre de contaminação cruzada. E até aquele produto comprado há anos pode ter mudado de fórmula. Quando existe alergia alimentar, eu sempre recomendo ler a lista de ingredientes e o alerta de alergênicos em todas as compras.",
    data: "2026-09-01",
  },
  {
    code: "Dcd6NTYjIr9",
    tema: "alimentar",
    titulo: "Quando comer é desconfortável para a criança",
    texto:
      "Nem toda criança que \"não gosta de comer\" está apenas passando por uma fase. Demorar muito, precisar beber água para engolir, rejeitar texturas e evitar alimentos mais secos podem ser sinais de que comer está sendo desconfortável. Em alguns casos, é importante investigar condições como a esofagite eosinofílica.",
    data: "2026-08-25",
  },
  {
    code: "DcOh73fEgVp",
    tema: "pele",
    titulo: "Nem toda lesão de pele é alergia",
    texto:
      "Você passa uma pomadinha, melhora por alguns dias… e depois a lesão volta. Isso acontece porque algumas micoses podem ser confundidas com alergias ou dermatites. Coceira, descamação e vermelhidão podem aparecer em diferentes condições e usar o tratamento errado pode mascarar o problema.",
    data: "2026-08-19",
  },
  {
    code: "Db56gCujCXS",
    tema: "pele",
    titulo: "O que piora a dermatite atópica no dia a dia",
    texto:
      "A dermatite atópica pode piorar com situações comuns do dia a dia, como calor, suor, perfumes, poeira, tecidos sintéticos e até o estresse. Observar quais fatores desencadeiam coceira, vermelhidão ou ressecamento na sua pele é uma parte importante do controle da doença.",
    data: "2026-08-11",
  },
  {
    code: "Dbn1hrcj19o",
    tema: "pele",
    titulo: "Urticária não aparece \"do nada\"",
    texto:
      "Sua urticária pode não estar aparecendo \"do nada\". Muitas vezes, existem gatilhos que desencadeiam ou pioram as crises, como alguns anti-inflamatórios, estresse emocional e estímulos físicos do dia a dia, como calor, frio, suor, pressão na pele, roupa apertada, atrito e até o ato de coçar. Urticária crônica tem tratamento e não precisa ser sinônimo de viver em sofrimento constante.",
    data: "2026-08-04",
  },
  {
    code: "DbVtD-1jSJ-",
    tema: "rinite",
    titulo: "Rinite alérgica vai muito além do nariz",
    texto:
      "Muita gente associa rinite apenas a crises de espirros, coriza e nariz entupido. Mas a rinite alérgica pode afetar muito mais do que o nariz. Ela pode causar sensação de ouvido tampado, dificuldade para sentir cheiros, alteração no paladar, coceira e lacrimejamento nos olhos, além de pigarro, tosse e irritação na garganta.",
    data: "2026-07-28",
  },
  {
    code: "DbEN1NSlCw5",
    tema: "pele",
    titulo: "Alergia aos produtos da unha de gel",
    texto:
      "Coceira, vermelhidão, descamação, inchaço e até irritação nas pálpebras podem ter uma causa que muita gente não imagina: alergia aos produtos usados na unha de gel. Esse tipo de reação é mais comum do que parece e, muitas vezes, vai piorando a cada nova aplicação.",
    data: "2026-07-21",
  },
  {
    code: "DayMRjTgWEz",
    tema: "rotina",
    titulo: "O que levar na mala quando se tem alergia",
    texto:
      "Viajar com alergias exige mais do que escolher destino e arrumar roupas. Para quem tem rinite, asma, dermatite atópica ou alergia alimentar, alguns itens precisam ir na nécessaire antes mesmo do passaporte: protetor solar adequado, repelente, soro fisiológico, medicações de uso habitual, bombinha de resgate, hidratante e até um relatório médico.",
    data: "2026-07-14",
  },
  {
    code: "DanqShMHylG",
    tema: "pele",
    titulo: "O sabão da roupa pode ser o gatilho",
    texto:
      "Muita gente pensa em trocar o hidratante, o sabonete, o remédio e até a alimentação, mas esquece de observar um detalhe simples da rotina: o produto usado para lavar as roupas. Sabões muito perfumados, amaciantes e produtos com muita tintura podem deixar resíduos no tecido e piorar sintomas como coceira, vermelhidão, irritação, dermatite, rinite e até crises respiratórias.",
    data: "2026-07-10",
  },
  {
    code: "DaNf9QloBKw",
    tema: "rotina",
    titulo: "A rotina de quem convive com alergia",
    texto:
      "Quem convive com alergias sabe: às vezes parece que é preciso um verdadeiro manual de sobrevivência. Ler rótulos com atenção, identificar gatilhos, manter os medicamentos prescritos por perto e conhecer os sinais de alerta fazem parte da rotina de muitos pacientes.",
    data: "2026-06-30",
  },
  {
    code: "DZ7oqlFAf48",
    tema: "asma",
    titulo: "Bombinha de asma não causa dependência",
    texto:
      "A crença de que a medicação inalatória para asma causa dependência é um dos mitos mais persistentes na saúde brasileira, e afasta milhões de pacientes do tratamento que mudaria sua qualidade de vida. A medicação de manutenção atua localmente, em doses muito inferiores à medicação oral, e não gera dependência fisiológica.",
    data: "2026-06-23",
  },
  {
    code: "DZpLqj7DTUA",
    tema: "rinite",
    titulo: "Por que a alergia piora na mudança de clima",
    texto:
      "Muita gente acha que alergia respiratória piora \"do nada\" nas mudanças de clima, mas existe uma explicação para isso. Alterações de temperatura, vento, chuva, tempo seco e aumento da circulação de poeira e ácaros irritam as vias respiratórias e facilitam crises de rinite e conjuntivite alérgica.",
    data: "2026-06-16",
  },
  {
    code: "DZX2vo1jR6_",
    tema: "criancas",
    titulo: "Sinais de alergia na infância que passam por fase",
    texto:
      "Na infância, sintomas alérgicos costumam ser interpretados como traço de personalidade, fase ou questão de imunidade ainda em formação. O reconhecimento precoce dos sinais permite intervenções que modificam o curso natural da doença alérgica.",
    data: "2026-06-09",
  },
  {
    code: "DZNSYi2jHFG",
    tema: "alimentar",
    titulo: "Alergia alimentar que aparece na vida adulta",
    texto:
      "A alergia alimentar em adultos tem crescido de forma consistente no Brasil e no mundo, e parte significativa dos casos surge a alimentos consumidos sem problema durante toda a vida. A avaliação especializada, com testes específicos e história clínica detalhada, é o que diferencia desconforto pontual de uma doença que merece tratamento.",
    data: "2026-06-05",
  },
  {
    code: "DY6ud9hFTbN",
    tema: "rinite",
    titulo: "Espirros ao acordar não são coincidência",
    texto:
      "Espirros em sequência ao acordar não são casualidade. É a forma mais clássica de manifestação da rinite alérgica, desencadeada pelo contato prolongado com ácaros durante a noite. O diagnóstico é simples, o tratamento existe e os resultados aparecem nas primeiras semanas.",
    data: "2026-05-29",
  },
  {
    code: "DYo3SjgAW2v",
    tema: "pele",
    titulo: "Dermatite atópica? Pode ser o sabonete",
    texto:
      "Dermatite atópica? A culpa pode ser do seu sabonete. A barreira da pele fica comprometida, perde água e deixa entrar irritantes, por isso a coceira não para. 2 trocas simples: sabonete syndet ou óleo de banho no lugar do sabonete comum; hidratante sem perfume e sem álcool logo após o banho, com a pele ainda úmida.",
    data: "2026-05-22",
  },
  {
    code: "DYWyNhNjVZY",
    tema: "rinite",
    titulo: "Você se identifica com quantos?",
    texto:
      "Você se identifica com quantos? Se marcou mais de um, pode ser alergia. Tem tratamento, e a sua qualidade de vida pode mudar muito.",
    data: "2026-05-15",
  },
  {
    code: "DYEpxaXlLU7",
    tema: "rinite",
    titulo: "Trocar o pet não resolve a alergia",
    texto:
      "Já pensei em trocar meu gato por um cachorro por causa da alergia? Quem tem alergia a um animal doméstico tem 75% de chance de ser sensibilizado a outros mamíferos também. Isso acontece por reatividade cruzada. Trocar o pet pode não resolver. O que resolve é investigar e tratar corretamente.",
    data: "2026-05-08",
  },
  {
    code: "DXyoNYKiZgw",
    tema: "rinite",
    titulo: "Sua casa pode estar te adoecendo",
    texto:
      "Sua casa pode estar te adoecendo sem você saber. Compartilhei algumas medidas de controle ambiental que fazem diferença real para quem tem alergia à poeira.",
    data: "2026-05-01",
  },
  {
    code: "DXgmpT-mTr8",
    tema: "imunidade",
    titulo: "A memória do sistema imunológico",
    texto:
      "Você já parou pra pensar que seu corpo tem uma memória melhor do que a sua? A memória imunológica é um dos mecanismos mais fascinantes da medicina e é ela que explica por que uma vacina tomada na infância ainda te protege décadas depois.",
    data: "2026-04-24",
  },
  {
    code: "DXOlFlWjOWF",
    tema: "rinite",
    titulo: "O que realmente resolve o nariz entupido",
    texto:
      "Como alergista, vejo muita gente gastando com o que não resolve. O que realmente funciona para o nariz entupido é mais simples do que parece.",
    data: "2026-04-17",
  },
  {
    code: "DXEoAJYlqDR",
    tema: "bastidores",
    titulo: "Jornada de Imunologia Clínica e Alergia da USP",
    texto:
      "Jornada de Imunologia Clínica e Alergia USP. Registros dessa jornada, que tem meu coração. Atualizando sempre, buscando o melhor para os meus pacientinhos!",
    data: "2026-04-13",
  },
  {
    code: "DW1BJaujNEK",
    tema: "bastidores",
    titulo: "Cuidado que cabe na sua rotina",
    texto:
      "Quando o acesso é difícil, o cuidado não acontece. Por isso, meu compromisso é tornar o atendimento simples, possível e resolutivo, seja presencialmente ou por telemedicina.",
    data: "2026-04-07",
  },
  {
    code: "DWkLH7kCmDL",
    tema: "pele",
    titulo: "Dermatite atópica: o que acontece na pele",
    texto:
      "Dermatite atópica é uma doença inflamatória crônica da pele. Existe uma alteração estrutural da barreira cutânea associada a um processo imunológico que favorece a inflamação recorrente. O manejo adequado envolve controle da inflamação, reparo contínuo da barreira e acompanhamento para reduzir recorrências.",
    data: "2026-03-31",
  },
  {
    code: "DWRevoqkaxT",
    tema: "criancas",
    titulo: "Não é \"normal da gravidez\"",
    texto:
      "Muitas gestantes chegam até mim com a mesma frase: \"Eu achei que era normal da gravidez, então fui deixando.\" Nariz constantemente obstruído, sono ruim, cansaço desproporcional, chiado ou aperto no peito não são detalhes pequenos. Inflamação respiratória ativa na gestação precisa ser acompanhada de perto.",
    data: "2026-03-24",
  },
  {
    code: "DV-8cwqAaSC",
    tema: "rinite",
    titulo: "Respiração pela boca é consequência",
    texto:
      "Respiração bucal constante quase sempre é consequência, não escolha. Na maioria das vezes, o que está por trás é obstrução nasal persistente: rinite mal controlada, inflamação crônica ou aumento de adenóide. A longo prazo, a respiração bucal persistente pode influenciar o desenvolvimento da face e da arcada dentária.",
    data: "2026-03-17",
  },
  {
    code: "DVsu3-ajVhz",
    tema: "rinite",
    titulo: "\"Parece que minha alergia piorou\"",
    texto:
      "Nos últimos meses, muita gente tem me procurado com a mesma percepção: \"parece que minha alergia piorou\". O ambiente mudou. A qualidade do ar mudou. A intensidade do calor e da seca mudou. E quem já tem rinite, asma ou sinusite sente isso no corpo.",
    data: "2026-03-10",
  },
  {
    code: "DVeeQewElYY",
    tema: "asma",
    titulo: "Controlar a asma não é depender da bombinha",
    texto:
      "Muita gente acredita que controlar a asma é ter a bombinha de resgate sempre por perto. Mas controle de verdade não é depender de alívio frequente. É conseguir passar semanas sem precisar dele. A asma é uma doença inflamatória crônica.",
    data: "2026-03-04",
  },
  {
    code: "DU236qiibii",
    tema: "testes",
    titulo: "Avaliação alérgica no exame admissional",
    texto:
      "A etapa médica do concurso não é só um protocolo. Na avaliação alérgica, erros simples como testes mal indicados ou laudos superficiais podem gerar dúvidas, atrasos ou até eliminação desnecessária.",
    data: "2026-02-17",
  },
  {
    code: "DUSt67Bks1_",
    tema: "reacoes",
    titulo: "Remédio por conta própria alivia, mas não resolve",
    texto:
      "Medicação sem orientação pode até aliviar por um momento, mas não resolve o problema. Quando o uso se torna frequente, é um sinal de que a causa precisa ser investigada.",
    data: "2026-02-03",
  },
  {
    code: "DUF18gmiQfK",
    tema: "reacoes",
    titulo: "Reação alérgica na criança pode evoluir rápido",
    texto:
      "Na infância, algumas reações alérgicas podem começar de forma discreta e evoluir em pouco tempo. Nem sempre os sinais são claros ou iguais em todas as crianças.",
    data: "2026-01-29",
  },
  {
    code: "DTdBQZgjy3f",
    tema: "rotina",
    titulo: "Alergia não é exagero",
    texto:
      "Se você é alérgico, provavelmente já ouviu tudo isso. Mas alergia não é exagero, não é drama e muito menos falta de força de vontade. É uma condição real, com base imunológica, que pode impactar a respiração, a pele, a alimentação e a qualidade de vida.",
    data: "2026-01-13",
  },
  {
    code: "DTK_tDXDDXJ",
    tema: "imunidade",
    titulo: "As vacinas que mudam a sua viagem",
    texto:
      "Todo mundo lembra da mala. Quase ninguém lembra da imunidade. No carrossel, as vacinas que realmente mudam sua viagem.",
    data: "2026-01-06",
  },
  {
    code: "DRe5vdqjwmm",
    tema: "testes",
    titulo: "Patch test: achando o culpado da coceira",
    texto:
      "Coceira excessiva pode ser sinal de dermatite de contato. Identificar os produtos e materiais que causam irritação é o primeiro passo. O patch test, teste de contato, nos ajuda a identificar o causador.",
    data: "2025-11-25",
  },
  {
    code: "DRM4LyLAcel",
    tema: "tratamentos",
    titulo: "Os sinais que passam despercebidos",
    texto:
      "Se eu fosse a sua doutora alergista, eu te ensinaria a reconhecer sinais que muitas vezes passam despercebidos. Desde rinite e asma até dermatites e alergias alimentares, entender os sintomas é o primeiro passo para controlar crises e viver melhor.",
    data: "2025-11-18",
  },
  {
    code: "DQm8vv2jyUF",
    tema: "testes",
    titulo: "Alergia a ácaro tem como confirmar",
    texto:
      "Nariz entupido, espirros ao acordar, coceira nos olhos… tudo isso pode ter um motivo bem específico: alergia a ácaros. Os testes certos revelam a causa e ajudam a direcionar o tratamento ideal.",
    data: "2025-11-03",
  },
  {
    code: "DQC8t5kEpzl",
    tema: "reacoes",
    titulo: "Quando a reação ao remédio é sinal de alerta",
    texto:
      "Reações adversas a medicamentos podem variar de leves a graves. Urticária, inchaço, coceira intensa, dificuldade para respirar, queda de pressão ou febre podem surgir logo após o uso de um remédio. Procure um alergista em reações recorrentes ou histórico de anafilaxia.",
    data: "2025-10-20",
  },
  {
    code: "DPymHoegXle",
    tema: "reacoes",
    titulo: "Anafilaxia: reconhecer e agir em minutos",
    texto:
      "Anafilaxia é uma reação alérgica grave e potencialmente fatal que exige ação imediata. Sinais: dificuldade para respirar, inchaço na face ou garganta, urticária generalizada, tontura, queda de pressão. Use a adrenalina auto-injetável imediatamente e ligue para o serviço de emergência.",
    data: "2025-10-14",
  },
  {
    code: "DPmeKvzCKB9",
    tema: "rinite",
    titulo: "Resfriado comum ou rinite alérgica?",
    texto:
      "Resfriado comum é causado por vírus, tem duração limitada (7 a 10 dias) e pode vir com febre. Rinite alérgica é uma resposta do sistema imunológico a alérgenos, não causa febre e pode se repetir ou durar semanas.",
    data: "2025-10-09",
  },
  {
    code: "DOqf4xZjfC3",
    tema: "rinite",
    titulo: "O tempo seco de Goiás e as vias respiratórias",
    texto:
      "Em Goiás, o tempo seco vai muito além do desconforto: ele altera o funcionamento natural das nossas vias respiratórias. Quando o ar perde umidade, o nariz deixa de filtrar adequadamente e poeira, pólen e poluição entram com facilidade.",
    data: "2025-09-16",
  },
  {
    code: "DOYYowEjp35",
    tema: "bastidores",
    titulo: "Clima seco e saúde no Programa Hora da Saúde",
    texto:
      "Programa Hora da Saúde (Fonte TV). Convidada como alergista e imunologista para debater sobre o clima seco e os impactos na saúde.",
    data: "2025-09-09",
  },
  {
    code: "DMF6u2lPSsQ",
    tema: "testes",
    titulo: "Seu cosmético pode ser o problema",
    texto:
      "Coceira na pele, vermelhidão, ardência quando você passa um produto novo? Pode ser alergia de contato a algum componente do seu cosmético: conservantes, fragrâncias ou corantes. Com o patch test, conseguimos identificar exatamente o que está causando a reação.",
    data: "2025-07-14",
  },
  {
    code: "DKPoxv5NXNe",
    tema: "imunidade",
    titulo: "Será que é mesmo só uma gripe?",
    texto:
      "Está todo mundo gripado, e talvez você também. Mas será que é mesmo só uma gripe? Existem diferentes tipos de Influenza, sintomas que merecem atenção e formas eficazes de se proteger.",
    data: "2025-05-29",
  },
  {
    code: "DIRPsxfhEdu",
    tema: "imunidade",
    titulo: "Herpes que volta é sinal de imunidade",
    texto:
      "A herpes não se resume só à ferida que vemos. O vírus pode estar ali, silencioso, e reativar sempre que o corpo fica mais vulnerável. O segredo está em reconhecer os gatilhos e cuidar da imunidade.",
    data: "2025-04-10",
  },
  {
    code: "DHt0oGBMSvH",
    tema: "pele",
    titulo: "Coceira depois do banho quente ou do exercício",
    texto:
      "Se depois de um banho quente, exercício físico, estresse ou até ao comer algo apimentado sua pele reage com coceira intensa e pequenas bolinhas vermelhas, pode ser urticária colinérgica.",
    data: "2025-03-27",
  },
  {
    code: "DHorCUZKt8E",
    tema: "tratamentos",
    titulo: "Quando o tratamento convencional não basta",
    texto:
      "Quando os tratamentos convencionais não são suficientes, os imunobiológicos podem ser um grande aliado no controle das alergias: asma grave, urticária crônica espontânea, dermatite atópica, esofagite eosinofílica, rinossinusite crônica com pólipo nasal.",
    data: "2025-03-25",
  },
  {
    code: "DGBrO5BpHJK",
    tema: "imunidade",
    titulo: "Sensibilização não é a mesma coisa que alergia",
    texto:
      "Você pode estar vivendo uma sensibilização alérgica e não sabe! Isso mesmo, a sensibilização alérgica pode ocorrer sem sintomas aparentes, enquanto uma alergia verdadeira desencadeia reações do sistema imunológico. Você sabe identificar o que está acontecendo no seu corpo? Vamos descomplicar e encontrar respostas. Agende sua consulta para um diagnóstico preciso e cuidados adequados!",
    data: "2025-02-13",
  },
  {
    code: "DFOKMh6NX1S",
    tema: "tratamentos",
    titulo: "Anticorpos monoclonais nas alergias graves",
    texto:
      "Você já tentou de tudo e as alergias ainda controlam a sua vida? Para quem sofre com crises graves e resistentes, os anticorpos monoclonais podem ser a resposta. Essa terapia avançada, respaldada por estudos, atua diretamente na raiz do problema, bloqueando proteínas-chave no sistema imunológico, como a IgE e a IL-5, que desencadeiam reações alérgicas.Pacientes com urticária crônica, asma severa e outras alergias já relatam uma melhora significativa na qualidade de vida, com redução de sintomas como coceira intensa, falta de ar e crises inesperadas. Não é apenas um alívio temporário, é um avanço real na medicina para condições que antes pareciam impossíveis de controlar.",
    data: "2025-01-24",
  },
  {
    code: "DCr6P4SJNN9",
    tema: "criancas",
    titulo: "Por que não beijar bebês",
    texto:
      "Os bebês têm um sistema imunológico ainda em desenvolvimento, o que os torna extremamente vulneráveis a infecções. Um beijo pode transmitir vírus e bactérias perigosas, como herpes, gripes e outros agentes infecciosos. É um gesto de carinho que pode parecer inofensivo, mas pode colocar a saúde dos pequenos em sério risco. Proteja quem você ama: evite beijos e prefira formas mais seguras de demonstrar afeto. Vamos espalhar essa informação e cuidar melhor da saúde dos bebês! Encaminhe esse post para todos que precisam se orientar!",
    data: "2024-11-22",
  },
  {
    code: "DAwn5o6O-Ut",
    tema: "imunidade",
    titulo: "Estresse crônico derruba a imunidade",
    texto:
      "Você sabia que o estresse pode afetar diretamente sua imunidade? O estresse crônico pode enfraquecer o sistema imunológico, tornando você mais suscetível a infecções e alergias. Manter o estresse sob controle é essencial para sua saúde. O crucial é manter o acompanhamento médico para tratar e aliviar o estresse, afinal, nem sempre percebemos essa causa.",
    data: "2024-10-05",
  },
  {
    code: "C_qPGfsuEOg",
    tema: "criancas",
    titulo: "Criança que adoece toda hora merece investigação",
    texto:
      "Se o seu filho fica doente com frequência, vale a pena uma avaliação imunológica, para descartar quadros de imunodeficiências e para entender se há algo mais que pode ser feito para prevenir esses quadros. Agende uma consulta para uma avaliação personalizada e descubra como podemos ajudar a proteger a saúde do seu filho!",
    data: "2024-09-08",
  },
];

export const postUrl = (code: string) => `https://www.instagram.com/p/${code}/`;
import { asset } from "./base-path";

export const postImage = (code: string) =>
  asset(`/images/conteudo/${code}.webp`);
