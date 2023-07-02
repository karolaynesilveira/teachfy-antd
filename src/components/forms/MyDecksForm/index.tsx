import React, { useEffect, useState } from 'react';
import { BiBookReader, BiEdit } from 'react-icons/bi';
import { getMyDecks } from '../../../api/decks';

const MyDecksForm: React.FC = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem('userId');
    const userId = parseInt(userStorage ? userStorage : '0'); // ID do usuário
    fetchDecks(userId);
  }, []);

  const fetchDecks = async (userId: number) => {
    try {
      const response = await getMyDecks(userId);
      setDecks(response);
    } catch (error) {
      console.error('Erro ao buscar os decks:', error);
    }
  };

  const handleStudyClick = (deckId: number) => {
    //criar lógica para estudar o deck
    console.log(`Estudar deck com ID: ${deckId}`);
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
            <p>{deck.type === 1 ? 'Flashcard' : "Avaliativo"}</p>
            <button onClick={() => handleStudyClick(deck.id)}><BiBookReader/> Estudar</button>  
            <button onClick={() => handleEditClick(deck.id)}><BiEdit/> Editar</button>
          </div>
      ))}
    </div>
  );
};

export default MyDecksForm;
