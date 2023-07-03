import React, { useEffect, useState } from 'react';
import { BiBookReader, BiEdit } from 'react-icons/bi';
import { getMyDecks } from '../../../api/decks';
import { useNavigate } from 'react-router-dom';

interface Deck {
  id: number;
  name: string;
  description: string;
  public: number;
  type: number;
}


const MyDecksForm: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    try {
      const response = await getMyDecks();
      setDecks(response.data);
    } catch (error) {
      console.error('Erro ao buscar os decks:', error);
    }
  };
  const handleStudyClick = (deckId: number) => {
    const selectedDeck = decks.find((deck: any) => deck.id === deckId);
    if (selectedDeck && selectedDeck.type === 1) {
      navigate(`deck/avaliativo/study/${deckId}`);
    } else {
      navigate(`deck/anki/study/${deckId}`);
    }
  };
  

  const handleEditClick = (deckId: number) => {
    //criar lógica para editar o deck
    console.log(`Editar deck com ID: ${deckId}`);
  };
  return (
    <div>
      <h2>Meus Decks</h2>
      {decks.map((deck: any) => (
          <div key={deck.id}>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <p>{deck.public === 1 ? 'Público' : "Privado"}</p>
            <p>{deck.type === 1 ? 'Avaliativo' : "Anki"}</p>
            <button onClick={() => handleStudyClick(deck.id)}><BiBookReader/> Estudar</button>  
            <button onClick={() => handleEditClick(deck.id)}><BiEdit/> Editar</button>
          </div>
      ))}
    </div>
  );
};

export default MyDecksForm;
