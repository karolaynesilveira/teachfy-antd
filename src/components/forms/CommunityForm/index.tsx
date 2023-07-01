import { useState, useEffect } from 'react';
import { getPublicDecks } from '../../../api/decks';
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className='content'>
      {decks.map((deck:Deck) => (
        <Card key={deck.id} title={deck.name} subtitle={DeckTypeEnum[deck.type as keyof DeckType]} description={deck.description}/>
      ))}
    </Container>
  );
}

export default CommunityForm;
