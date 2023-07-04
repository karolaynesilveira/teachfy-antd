import { useState, useEffect } from 'react';
import { getPublicDecks } from '../../../api/community';
import Card from '../../elements/Card';
import { DeckTypeEnum } from '../../../models/enums/DeckTypeEnum';
import { Deck } from '../../../models/types/Deck';
import { DeckType } from '../../../models/types/DeckType';
import { Container } from './styles';

const CommunityForm: React.FC = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    try {
      const response = await getPublicDecks();
      setDecks(response);
      console.log();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    /*<Container className='content'>
      {decks.map((deck:any) => (
        <Card key={deck.id} title={deck.name} subtitle={DeckTypeEnum[deck.type as keyof DeckType]} description={deck.description}/>
      ))}
    </Container>*/
    <div className='d-flex'>
    <h2>Comunidade</h2>
    {decks.map((deck: any) => (
        <div className="card card-teachfy" style={{ width: '12rem', margin: '1.5rem' }} key={deck.id}>
            <div className="card-body">
              <h3>{deck.name}</h3>
              <p>{deck.description}</p>
              <p>{deck.cloneable === 1 ? 'Duplicável' : "Apenas visualização"}</p>
              <p>{deck.type === 1 ? 'Flashcard' : "Avaliativo"}</p>

            </div>
          </div>
    ))}
  </div>
  );
}

export default CommunityForm;
