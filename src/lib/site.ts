/**
 * Fonte única de conteúdo do site.
 * Edite este arquivo para atualizar textos, contatos, endereços e links.
 */

export const site = {
  doctor: {
    name: "Dra. Adriana Melo",
    fullName: "Adriana Pereira de Melo",
    specialty: "Alergia e Imunologia Clínica",
    tagline: "Alergista e Imunologista",
    crm: "CRM-GO 20791",
    rqe: "RQE 17955",
    city: "Goiânia, GO",
    // Frase da própria médica (perfil Doctoralia)
    quote:
      "Medicina de precisão, personalizada e de ponta, sem esquecer o lado humano.",
    summary:
      "Especialista no diagnóstico e tratamento de doenças alérgicas, autoinflamatórias e imunodeficiências, em adultos e crianças.",
  },

  contact: {
    whatsappNumber: "5562983133300",
    whatsappDisplay: "(62) 98313-3300",
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Adriana Melo.",
    instagram: "https://www.instagram.com/adrianamelo.alergista/",
    instagramHandle: "@adrianamelo.alergista",
    doctoralia: "https://www.doctoralia.com.br/adriana-melo-4/alergista/goiania",
  },

  locations: [
    {
      name: "Clínica Allergo",
      address:
        "Rua João de Abreu, 116, Ed. EuroWorking Concept, salas 1401/1402",
      district: "Setor Oeste",
      city: "Goiânia, GO",
      zip: "74120-110",
      phones: ["(62) 3639-3230", "(62) 99335-4946"],
      maps:
        "https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+de+Abreu+116+Ed+EuroWorking+Concept+Setor+Oeste+Goi%C3%A2nia+GO",
    },
    {
      name: "Instituto Imuno-Alergo",
      address: "Av. T-4, 619, sala 1301, Ed. Buena Vista Office Design",
      district: "Setor Bueno",
      city: "Goiânia, GO",
      zip: "74230-035",
      phones: ["(62) 3256-2030"],
      maps:
        "https://www.google.com/maps/search/?api=1&query=Av.+T-4+619+Ed+Buena+Vista+Office+Design+Setor+Bueno+Goi%C3%A2nia+GO",
    },
  ],

  credentials: [
    { label: "Especialização em Alergia e Imunologia", org: "USP, São Paulo" },
    { label: "Título de Especialista", org: "ASBAI" },
    { label: "Alergia e Imunologia", org: "HC-FMUSP" },
    { label: "Mestranda em Ciências da Saúde", org: "PPGCS, FM/UFG" },
    { label: "Docente de Imunologia e Alergia", org: "PUC-GO" },
  ],

  areas: [
    {
      title: "Alergias respiratórias",
      detail: "Rinite, asma, rinossinusite e conjuntivite alérgica.",
      icon: "lungs",
    },
    {
      title: "Alergias cutâneas",
      detail:
        "Urticária, angioedema, dermatite atópica, dermatite de contato (eczema) e dermatite seborreica.",
      icon: "skin",
    },
    {
      title: "Alergia alimentar",
      detail:
        "Investigação, diagnóstico preciso e planos de reintrodução segura.",
      icon: "food",
    },
    {
      title: "Alergia a medicamentos",
      detail:
        "Confirmação diagnóstica e alternativas seguras quando o remédio é essencial.",
      icon: "pill",
    },
    {
      title: "Anafilaxia",
      detail:
        "Identificação do gatilho, plano de ação e prevenção de recorrência.",
      icon: "alert",
    },
    {
      title: "Imunodeficiências",
      detail:
        "Primárias e secundárias, com investigação de infecções que se repetem.",
      icon: "shield",
    },
    {
      title: "Doenças autoinflamatórias",
      detail:
        "Febres recorrentes e quadros inflamatórios de origem imunológica.",
      icon: "flame",
    },
    {
      title: "Candidíase e herpes de repetição",
      detail: "Avaliação imunológica de infecções recorrentes.",
      icon: "cycle",
    },
    {
      title: "Alergia a insetos",
      detail:
        "Reações a abelhas, vespas e formigas, com imunoterapia específica.",
      icon: "bug",
    },
    {
      title: "Alergia ao látex",
      detail: "Diagnóstico e orientação de reatividade cruzada com alimentos.",
      icon: "glove",
    },
  ],

  procedures: [
    {
      title: "Prick Test",
      subtitle: "Teste cutâneo de leitura imediata",
      body: "Exame de fundamental importância para ajudar no diagnóstico e no tratamento de inúmeras doenças alérgicas. É usado na investigação de asma alérgica, rinite alérgica, conjuntivite, dermatite atópica, alergia alimentar, ao látex e a venenos de insetos.",
      tags: ["Respiratório", "Alimentos", "Látex", "Insetos"],
    },
    {
      title: "Patch Test",
      subtitle: "Teste de contato",
      body: "Teste de contato feito na pele para identificar reações alérgicas a substâncias específicas. É frequentemente usado para diagnosticar alergias a substâncias como níquel, cosméticos e produtos químicos.",
      tags: ["Níquel", "Cosméticos", "Químicos"],
    },
    {
      title: "Testes de provocação",
      subtitle: "Padrão-ouro do diagnóstico",
      body: "Considerados o padrão-ouro no diagnóstico em alergia. São indicados quando há dúvida se um alimento ou medicamento realmente causou a reação alérgica, e também para selecionar com segurança alimentos ou medicamentos alternativos.",
      tags: ["Alimentos", "Medicamentos"],
    },
    {
      title: "Dessensibilização e imunoterapia",
      subtitle: "Tratamento que modifica a doença",
      body: "Dessensibilização a medicamentos, para pacientes que precisam usar um remédio essencial ao qual são alérgicos, e imunoterapia oral (dessensibilização a alimentos), que busca ampliar a qualidade de vida de quem convive com alergia alimentar grave.",
      tags: ["Medicamentos", "Imunoterapia oral", "Vacina de alergia"],
    },
  ],

  journey: [
    {
      step: "01",
      title: "Agendamento",
      body: "Você fala diretamente pelo WhatsApp ou agenda pela Doctoralia. Presencial em Goiânia ou por teleconsulta, de onde estiver.",
    },
    {
      step: "02",
      title: "Consulta detalhada",
      body: "História clínica minuciosa, exame físico e revisão de exames anteriores. É a etapa que mais define o diagnóstico correto em alergia.",
    },
    {
      step: "03",
      title: "Investigação dirigida",
      body: "Quando indicado, testes cutâneos, testes de contato ou de provocação confirmam (ou descartam) o gatilho suspeito.",
    },
    {
      step: "04",
      title: "Plano de tratamento",
      body: "Conduta individualizada, com orientações claras por escrito, plano de ação para crises e acompanhamento contínuo.",
    },
  ],

  faq: [
    {
      q: "Qual a diferença entre alergista e dermatologista para tratar a pele?",
      a: "O alergista e imunologista investiga a causa imunológica por trás da lesão de pele (o que dispara a urticária, a dermatite atópica ou a dermatite de contato) e trata com testes específicos, controle ambiental, imunobiológicos e imunoterapia quando indicado. Muitas vezes o acompanhamento é conjunto com a dermatologia.",
    },
    {
      q: "A partir de que idade a criança pode ser atendida?",
      a: "O atendimento é de alergia e imunologia para adultos e crianças, incluindo lactentes. Sinais de alerta como infecções que se repetem, eczema de difícil controle ou reações a alimentos merecem avaliação em qualquer idade.",
    },
    {
      q: "Preciso suspender antialérgico antes dos testes cutâneos?",
      a: "Sim. Anti-histamínicos e alguns outros medicamentos interferem no resultado do Prick Test e precisam ser suspensos com antecedência. A orientação exata sobre quais remédios e por quantos dias é dada na consulta, antes do agendamento do exame.",
    },
    {
      q: "A teleconsulta funciona para alergia?",
      a: "Funciona muito bem para primeira avaliação, revisão de exames, ajuste de tratamento e acompanhamento de quadros já em seguimento. Quando o caso exigir exame físico detalhado ou testes cutâneos, o atendimento presencial em Goiânia é indicado.",
    },
    {
      q: "O que levar para a primeira consulta?",
      a: "Exames anteriores (mesmo antigos), a lista dos medicamentos em uso com as doses, caixas ou fotos dos produtos suspeitos e, se possível, um registro do que aconteceu nas crises: o que comeu ou usou, em quanto tempo apareceu e quanto durou.",
    },
    {
      q: "A imunoterapia (vacina de alergia) realmente funciona?",
      a: "A imunoterapia com alérgenos é o único tratamento capaz de modificar a história natural da doença alérgica, e não apenas controlar sintomas. A indicação é individual e depende do diagnóstico confirmado por testes. Por isso a investigação vem sempre antes.",
    },
  ],

  /**
   * Assinatura da agência que fez o site, exibida no fim do rodapé.
   * Tem identidade visual própria (ver `AgencyCredit` em footer.tsx) para
   * não se confundir com a marca da médica.
   */
  agency: {
    name: "Vértice",
    eyebrow: "Este site foi criado pela",
    headline: "Seu negócio merece um site desse nível.",
    pitch:
      "A Vértice desenha e programa sites, aplicativos e sistemas sob medida. Estratégia, design e código na mesma casa. Nada de template pronto.",
    perks: [
      "No ar em semanas, não em meses",
      "Feito para o celular, onde o cliente está",
      "Encontrável no Google por quem já procura você",
    ],
    cta: "Quero um orçamento",
    note: "Resposta no mesmo dia. Orçamento sem compromisso.",
    whatsappNumber: "5562997008813",
    whatsappMessage:
      "Olá! Vi o site da Dra. Adriana Melo e quero um orçamento para o meu negócio.",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${
  site.contact.whatsappNumber
}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;

export const agencyWhatsappUrl = `https://wa.me/${
  site.agency.whatsappNumber
}?text=${encodeURIComponent(site.agency.whatsappMessage)}`;
