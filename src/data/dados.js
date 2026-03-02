// src/data/dados.js
// ─────────────────────────────────────────────────────────────
// ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA ATUALIZAR O SITE
// Altere apenas os VALORES. Nunca altere a estrutura das chaves.
// ─────────────────────────────────────────────────────────────

// ── CORES E ESTAMPAS ─────────────────────────────────────────
export const cores = [
  {
    nome: 'Azul Turquesa',
    hex: '#00C4D4',
    slogan: 'A serenidade que transmite confiança clínica',
    descricao: 'Tom ciano vibrante que remete à precisão dos equipamentos médicos. Transmite calma, higiene e modernidade — a escolha natural de clínicas que comunicam excelência.'
  },
  {
    nome: 'Verde Jade',
    hex: '#2E8B57',
    slogan: 'A sofisticação que protege',
    descricao: 'Verde profundo inspirado em jardins medicinais. Alia elegância discreta à sensação de cuidado natural, ideal para pets de temperamento sereno.'
  },
  {
    nome: 'Verde Oceânico',
    hex: '#1B8A72',
    slogan: 'Energia vibrante para recuperação segura',
    descricao: 'Tom esmeralda que evoca vitalidade e renovação. Perfeito para transmitir que a recuperação está em curso com força e equilíbrio.'
  },
  {
    nome: 'Rosa Candy',
    hex: '#FF6B9D',
    slogan: 'Doçura que conforta',
    descricao: 'Rosa vibrante e afetuoso, escolhido para expressar cuidado com leveza. Ideal para fêmeas que merecem recuperar-se com estilo e carinho.'
  },
  {
    nome: 'Estampa Love',
    hex: '#FF8FAB',
    slogan: 'Carinho em cada detalhe',
    descricao: 'Estampa com elementos de coração em tons rosados. Comunica afeto genuíno e é a escolha favorita de tutores que querem demonstrar amor na recuperação do pet.'
  },
  {
    nome: 'Estampa Zoo Fun',
    hex: '#FFB347',
    slogan: 'Alegria que acolhe',
    descricao: 'Estampa divertida com ilustrações de animais em tons quentes. Reduz o estresse do ambiente clínico e torna a recuperação mais leve para o pet e para a família.'
  },
  {
    nome: 'Estampa Yellow Happy',
    hex: '#FFD700',
    slogan: 'O otimismo que inspira',
    descricao: 'Amarelo solar que estimula bom humor e esperança. Cientificamente associado à sensação de energia e disposição — exatamente o que seu pet precisa na recuperação.'
  },
  {
    nome: 'Estampa Marine Care',
    hex: '#4FC3F7',
    slogan: 'Proteção com frescor marinho',
    descricao: 'Azul aquático com elementos marinhos que remetem à leveza e à liberdade. Transmite frescor, limpeza e a sensação de cuidado profundo com cada detalhe.'
  }
]

// ── TABELAS DE PREÇO ──────────────────────────────────────────
export const precoPosCirurgicaCaes = {
   0: 29.00,  1: 29.00,  2: 30.00,  3: 32.00,
   4: 32.00,  5: 32.00,  6: 38.00,  7: 38.00,
   8: 40.00,  9: 42.00, 10: 49.00, 11: 49.00,
  12: 52.00, 13: 56.00, 14: 59.00, 15: 65.00,
}

export const precoPosCirurgicaGatos = {
  '00': 31.00, 0: 31.00, 1: 31.00, 2: 31.00, 3: 31.00,
}

export const precoOrtopedica = {
   1: 34.00,  2: 36.00,  3: 38.00,  4: 40.00,
   5: 43.00,  6: 47.00,  7: 48.00,  8: 50.00,
   9: 52.00, 10: 54.00, 11: 56.00, 12: 59.00,
  13: 61.00, 14: 64.00, 15: 67.00, 16: 70.00,
}

// ── PRODUTOS PÓS-CIRÚRGICOS ───────────────────────────────────
// ⚠️  Para trocar imagem: coloque o arquivo em public/images/
//     e atualize apenas o caminho abaixo (ex: '/images/nova-foto.jpg')

export const produtosPosCirurgicas = [
  {
    id: 1,
    nome: 'Roupa Pós-Cirúrgica Canina',
    imagem: '/images/pos-cirurgica-canina-1.png',
    categoria: 'Pós-Cirúrgica',
    badge: 'PÓS-CIRÚRGICA',
    slogan: 'Proteção anatômica para cães de todos os portes.',
    tabelaPreco: precoPosCirurgicaCaes,
    cores,
  },
  {
    id: 2,
    nome: 'Roupa Pós-Cirúrgica Felina',
    imagem: '/images/felina-sentada.png',
    categoria: 'Pós-Cirúrgica',
    badge: 'PÓS-CIRÚRGICA',
    slogan: 'Design exclusivo que respeita a agilidade dos gatos.',
    tabelaPreco: precoPosCirurgicaGatos,
    cores,
  },
  {
    id: 3,
    nome: 'Macacão Pós-Cirúrgico Total',
    imagem: '/images/pos-cirurgica-canina-2.jpg',
    categoria: 'Pós-Cirúrgica',
    badge: 'PÓS-CIRÚRGICA',
    slogan: 'Cobertura máxima para procedimentos complexos.',
    tabelaPreco: precoPosCirurgicaCaes,
    cores,
  },
]

// ── PRODUTOS ORTOPÉDICOS ──────────────────────────────────────
export const produtosOrtopedicas = [
  {
    id: 4,
    nome: 'Roupa Ortopédica Canina',
    imagem: '/images/pos-cirurgica-canina-3.jpg',
    categoria: 'Ortopédica',
    badge: 'ORTOPÉDICA',
    slogan: 'Sustentação muscular e articular para cães.',
    tabelaPreco: precoOrtopedica,
    cores,
  },
  {
    id: 5,
    nome: 'Roupa Ortopédica Felina',
    imagem: '/images/felina-deitada.png',
    categoria: 'Ortopédica',
    badge: 'ORTOPÉDICA',
    slogan: 'Estabilidade com total liberdade de movimento.',
    tabelaPreco: precoOrtopedica,
    cores,
  },
  {
    id: 6,
    nome: 'Colete Ortopédico Lombar',
    imagem: '/images/pos-cirurgica-canina-3.jpg',
    categoria: 'Ortopédica',
    badge: 'ORTOPÉDICA',
    slogan: 'Suporte focado na coluna e região lombar.',
    tabelaPreco: precoOrtopedica,
    cores,
  },
]
