import React, { useContext, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Card } from '../../../models/interfaces/Card';
import { getDecksByAI, newDeckAnki } from '../../../api/decks';
import { FaMagic } from 'react-icons/fa';
import Modal from 'react-modal';
import { CardType } from '../../../models/types/CardType';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

interface DeckAnkiProps {
  title: string;
  description: string;
  directory: number;
  isPublic: boolean;
  isCloneable: boolean;
}

export const DeckAnkiForm: React.FC<DeckAnkiProps> = ({
  title,
  description,
  directory,
  isPublic,
  isCloneable,
}) => {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newPublic, setPublic] = useState(isPublic);
  const [newCloneable, setCloneable] = useState(isCloneable);
  const [cards, setCards] = useState<Card[]>([
    { id: 1, type: 1, question: '', answer: '' },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState('');
  const [modalQuantity, setModalQuantity] = useState(0);
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  const background = theme?.colors.background ? theme?.colors.background : '#fff';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userStorage = localStorage.getItem('userId');
    const deckData = {
      user_id: parseInt(userStorage ? userStorage : '0'),
      folder_id: directory ? directory : 0,
      name: newTitle,
      description: newDescription,
      ispublic: newPublic ? 1 : 0,
      clonable: newCloneable ? 1 : 0,
      type: 2,
      cards: cards,
    };
    saveDeck(deckData);
  };

  const saveDeck = async (deckData: {
    folder_id: number;
    name: string;
    description: string;
    ispublic: number;
    clonable: number;
    type: number;
    cards: Card[];
  }) => {
    try {
      const result = await newDeckAnki(deckData);
      if (result === 'success') {
        alert('Novo deck gerado com sucesso!');
        navigate('/my-decks');
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleAddCard = () => {
    const nextCardNumber = cards.length + 1;
    const newCard: Card = { id: nextCardNumber, type: 2, question: '', answer: '' };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id: number) => {
    if (cards.length > 1) {
      const updatedCards = cards
        .filter((_, index) => index !== id - 1)
        .map((card, index) => ({ ...card, id: index + 1 }));
      setCards(updatedCards);
    }
  };

  const handleUpdateCard = (
    id: number,
    position: keyof Card,
    value: string
  ) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, [position]: value };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleFrontTextChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleUpdateCard(id, 'question', e.target.value);
  };

  const handleBackTextChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleUpdateCard(id, 'answer', e.target.value);
  };

  const handleCreateModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleModalDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setModalDescription(e.target.value);
  };

  const handleModalQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setModalQuantity(Number(e.target.value));
  };

  const handleModalSubmit = async () => {
    try {
      const data = {
        description: modalDescription,
        type: 2 as CardType,
        quantity: modalQuantity,
      };
  
      const response = await getDecksByAI(data);

      let nextCardId = cards.length; // Próximo ID disponível para os novos cards
      const newCards = response.data.map((item: { question: string; answer: string }) => ({
        id: nextCardId++,
        type: 2 as CardType,
        question: item.question,
        answer: item.answer,
      }));

      setCards(newCards);
      setModalIsOpen(false);
    } catch (error) {
      console.error('Erro ao gerar decks:', error);
    }
  };

  console.log(newPublic);
  return (
    <div style={{ padding: '3rem' }} className='content'>
      <h2>Novo deck de flashcard</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="title" className='form-label'>Título</label>
            <input
              className='form-control'
              type="text"
              id="title"
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="description" className='form-label'>Descrição</label>
            <input
              className='form-control'
              type="text"
              id="description"
              value={newDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-12 mb-3">
            <div className="form-check">
              <input
                className='form-check-input'
                type="checkbox"
                id="newPublic"
                checked={newPublic}
                onChange={(e) => setPublic(e.target.checked)}
              />
              <label htmlFor="newPublic" className='form-check-label'>Deck público</label>
            </div>
            <div className="form-check">
              <input
                className='form-check-input'
                type="checkbox"
                id="newCloneable"
                checked={newCloneable}
                onChange={(e) => setCloneable(e.target.checked)}
              />
              <label htmlFor="newCloneable" className='form-check-label'>Permite duplicação</label>
            </div>
          </div>
          <div className='col-12 mb-3 d-flex justify-content-end'>
            <button type="button" className="btn btn-sm" onClick={handleCreateModal}>
              Crie para mim <FaMagic />
            </button>
            <button type="button" className="btn btn-sm ms-2" onClick={handleAddCard}>
              Adicionar Card
            </button>
          </div>
          {cards.map((card) => (
            <div className="col-12 mb-3">
              <Container key={card.id}>
                <div className="d-flex justify-content-between">
                  <h5>Card {card.id}</h5>
                  <button className="btn btn-teachfy"
                    type="button"
                    onClick={() => handleDeleteCard(card.id!)}
                  >
                    <BsTrash />
                  </button>
                </div>
                <div>
                  <label htmlFor={`frontText-${card.id}`} className='form-label'>Frente:</label>
                  <input
                    className='form-control'
                    type="text"
                    id={`frontText-${card.id}`}
                    value={card.question}
                    onChange={(e) => handleFrontTextChange(card.id!, e)}
                  />
                  <label htmlFor={`backText-${card.id}`} className='form-label'>Verso:</label>
                  <input
                    className='form-control'
                    type="text"
                    id={`backText-${card.id}`}
                    value={card.answer}
                    onChange={(e) => handleBackTextChange(card.id!, e)}
                  />
                </div>
              </Container>
            </div>
          ))}
          <div className="col-12 mb-3 d-flex justify-content-end">
            <button className="btn btn-teachfy" type="submit">Salvar</button>
          </div>
        </div>
      </form>

      <div style={{ backgroundColor: background }}>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Crie para mim</h2>
        <div>
          <label htmlFor="modalDescription" className='form-label'>Descrição detalhada:</label>
          <input
            className='form-control'
            type="text"
            id="modalDescription"
            value={modalDescription}
            onChange={handleModalDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="modalQuantity" className='form-label'>Quantidade de cards:</label>
          <input
            className='form-control'
            type="number"
            id="modalQuantity"
            value={modalQuantity}
            onChange={handleModalQuantityChange}
            min="1"
            max="20"
          />
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button type="button" className='btn' onClick={handleCloseModal}>
            Fechar
          </button>
          <button type="button" className='btn ms-2' onClick={handleModalSubmit}>
            Confirmar
          </button>

        </div>
      </Modal>
      </div>
    </div>
  );
};
