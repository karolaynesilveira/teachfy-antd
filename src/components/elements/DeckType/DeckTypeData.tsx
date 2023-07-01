import { GiNotebook } from "react-icons/gi";
import { TbCards } from "react-icons/tb";
import { DeckTypeItem } from "./DeckTypeItem";

export const DeckTypeData: DeckTypeItem[] = [
    {
        title: 'Avaliativo',
        path: '/decks/deck/avaliativo',
        icon: <GiNotebook/>,
        description: "Crie um questionário contendo uma lista de perguntas fechadas com opções pré-definidas para escolha ou, se preferir, questões discursivas."
    },
    {
        title: 'Flashcards',
        path: '/decks/novo-deck/flashcard/byMe',
        icon: <TbCards/>,  
        description: "Crie e revise seus próprios flashcards para aprender e reter informações de maneira mais eficiente, utilizando o método de estudos Anki."      
    }
];