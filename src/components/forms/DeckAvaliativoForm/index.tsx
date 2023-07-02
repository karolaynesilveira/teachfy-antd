import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FormWrapper } from './styles';
import { newDeck } from '../../../api/decks';
import { CardType } from '../../../models/types/CardType';
import { Question } from '../../../models/interfaces/Question';
import { Option } from '../../../models/interfaces/Option';
import { Card } from '../../../models/interfaces/Card';

interface DeckAvaliativoFormProps {
  title: string;
  description: string;
  directory: number;
  isPublic: boolean;
  isCloneable: boolean;
}

export const DeckAvaliativoForm: React.FC<DeckAvaliativoFormProps> = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [directory, setDirectory] = useState(0);
  const [isPublic, setPublic] = useState(false);
  const [isCloneable, setCloneable] = useState(false);
  const [generateFeedback, setGenerateFeedback] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault()
    const deckData = {
      folder_id: directory ? directory : 0,
      name: title,
      ispublic: isPublic ? 1 : 0,
      clonable: isCloneable ? 1 : 0,
      type: 1,
      cards: questions.map((question) => ({
        question: question.question,
        type: question.type === 'multipleChoice' ? 1 as CardType : 2 as CardType,
        options: question.options ? question.options : [] as Option[],
      })),
    };
  
    await saveDeck(deckData);
  };
  
  
  const saveDeck = async (deckData: {
    folder_id: number;
    name: string;
    ispublic: number;
    clonable: number;
    type: number;
    cards: Card[];
  }) => {
    try {
      const result = await newDeck(deckData);
      if (result === 'success') {
        alert('Novo deck gerado com sucesso!');
      }
    } catch (error) {
      alert(error);
    }
  };

  const addQuestion = (type: 'multipleChoice' | 'descriptive') => {
    const newQuestion: Question = { type, question: '', options: [{ description: '', isCorrect: false }] };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (index: number, field: keyof Question, value: string | boolean | number) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, [field]: value };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const addOption = (index: number) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        const updatedOptions = question.options
          ? [
              ...question.options,
              { description: '', isCorrect: false } as Option,
            ]
          : [{ description: '', isCorrect: false } as Option];
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const deleteOption = (index: number, optionIndex: number) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index && question.options && question.options.length > 1) {
        const updatedOptions = question.options.filter((_, j) => j !== optionIndex);
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (
    index: number,
    optionIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index && question.options) {
        const updatedOptions = question.options.map((option, j) => {
          if (j === optionIndex) {
            return { ...option, description: event.target.value } as Option;
          }
          return option;
        });
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionToggle = (index: number, optionIndex: number) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index && question.options) {
        const updatedOptions = question.options.map((option, j) => {
          if (j === optionIndex) {
            return { ...option, isCorrect: !option.isCorrect };
          }
          return option;
        });
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };  

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handlePublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPublic(event.target.checked);
  };

  const handleCloneableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCloneable(event.target.checked);
  };

  const handleGenerateFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenerateFeedback(event.target.checked);
  };

  const handleQuestionChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateQuestion(index, 'question', event.target.value);
  };

  const handleAnswerChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    updateQuestion(index, 'answer', event.target.value);
  };


  return (
    <FormWrapper>
      <div>
        <h2>Novo deck avaliativo</h2>
        <form onSubmit={handleSave}>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
          <label htmlFor="description">Descrição</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
          <div>
            <label htmlFor="public">Deck público</label>
            <input type="checkbox" id="public" checked={isPublic} onChange={handlePublicChange} />
          </div>
          <div>
            <label htmlFor="cloneable">Permite duplicação</label>
            <input type="checkbox" id="cloneable" checked={isCloneable} onChange={handleCloneableChange} />
          </div>
          <div>
            <label htmlFor="generateFeedback">Gerar Feedback</label>
            <input type="checkbox" id="generateFeedback" checked={generateFeedback} onChange={handleGenerateFeedbackChange} />
          </div>
          <div>
            <button type="button" onClick={() => addQuestion('descriptive')}>Adicionar Pergunta Descritiva</button>
            <button type="button" onClick={() => addQuestion('multipleChoice')}>Adicionar Pergunta de Múltipla Escolha</button>
          </div>
          {questions.map((question, index) => (
            <div key={index}>
              <h5>{index + 1}</h5>
              <button type="button" onClick={() => deleteQuestion(index)}><BsTrash /></button>
              <div>
                <label htmlFor={`question-${index}`}>Pergunta</label>
                <input type="text" id={`question-${index}`} value={question.question} onChange={(event) => handleQuestionChange(index, event)} />
              </div>
              {question.type === 'descriptive' ? (
                <div>
                  <label htmlFor={`answer-${index}`}>Resposta</label>
                  <input type="text" id={`answer-${index}`} value={question.answer || ''} onChange={(event) => handleAnswerChange(index, event)} />
                </div>
              ) : (
                <>
                  <div>
                    <label>Opções</label>
                    {question.options?.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <input type="text" value={option.description} onChange={(event) => handleOptionChange(index, optionIndex, event)} />
                        <input type="checkbox" checked={option.isCorrect} onChange={() => handleCorrectOptionToggle(index, optionIndex)} />
                        <button type="button" onClick={() => deleteOption(index, optionIndex)}><BsTrash /></button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addOption(index)}>Adicionar Opção</button>
                  </div>
                </>
              )}
            </div>
          ))}
          <button type="submit">Salvar</button>
        </form>
      </div>
    </FormWrapper>
  );
};

export default DeckAvaliativoForm;
