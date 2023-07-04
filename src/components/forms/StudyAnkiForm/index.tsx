import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDeckById } from '../../../api/decks';
import { Card } from '../../../models/interfaces/Card';

const StudyAnkiForm: React.FC = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const [deck, setDeck] = useState<any>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBackText, setShowBackText] = useState(false);

  useEffect(() => {
    fetchDeckData();
  }, []);

  const fetchDeckData = async () => {
    try {
      if (deckId) {
        const response = await getDeckById(parseInt(deckId));
        setDeck(response);
        setCards(response.cards);
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do deck:', error);
    }
  };

  const handleShowBackText = () => {
    setShowBackText(true);
  };

  const handleNextCard = () => {
    setShowBackText(false);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setShowBackText(false);
    setCurrentCardIndex(0);
  };

  if (!deck) {
    return <div>Carregando...</div>;
  }

  if (currentCardIndex >= cards.length) {
    return (
      <div>
        <h2>Você concluiu o deck!</h2>
        <button onClick={handleRestart}>De novo</button>
      </div>
    );
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <h2>Dados do Deck</h2>
      <h3>Nome: {deck.name}</h3>
      <p>Descrição: {deck.description}</p>
      <p>Tipo: {deck.type === 1 ? 'Flashcard' : 'Avaliativo'}</p>

      <div className="card card-teachfy mb-3 mx-5">
        <div className="card-body">
          <h2>Card {currentCardIndex + 1}</h2>
          <p>{showBackText ? currentCard.answer : currentCard.question}</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
          {!showBackText ? (
            <button className="btn btn-teachfy" onClick={handleShowBackText}>Verso</button>
          ) : (
            <button className="btn btn-teachfy ms-3" onClick={handleNextCard}>Próximo</button>
          )}

        <button className="btn btn-teachfy ms-3" onClick={handleRestart}>De novo</button>
      </div>
    </div>
  );
};

export default StudyAnkiForm;
