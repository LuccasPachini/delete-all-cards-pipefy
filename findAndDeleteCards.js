const API_TOKEN = "SEU_TOKEN_AQUI";
const PIPE_ID = "ID_DO_PIPE"; // <- substitua pelo ID real do seu pipe

// 1. Buscar cards do pipe
const buscarCards = async () => {
  const query = `
    {
      allCards(pipeId: ${PIPE_ID}, first: 50) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.pipefy.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result.data.allCards.edges.map(edge => edge.node.id);
};

// 2. Deletar card
const deleteCard = async (cardId) => {
  const query = `
    mutation {
      deleteCard(input: { id: ${cardId} }) {
        success
      }
    }
  `;

  const response = await fetch('https://api.pipefy.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  });

  const result = await response.json();

  if (result.data?.deleteCard?.success) {
    console.log(`✅ Card ${cardId} deletado com sucesso`);
  } else {
    console.error(`❌ Falha ao deletar o card ${cardId}`, result.errors || result);
  }
};

// 3. Executar o processo completo
(async () => {
  try {
    const cardIds = await buscarCards();
    console.log(`🔍 Encontrados ${cardIds.length} cards.`);

    for (const id of cardIds) {
      await deleteCard(id);
    }
  } catch (error) {
    console.error('Erro geral:', error);
  }
})();
