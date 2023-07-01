
import { AiFillCaretDown, AiFillCaretUp, AiOutlineBook } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { TbCards, TbBuildingCommunity } from 'react-icons/tb';
import { SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Decks',
        path: '/decks',
        icon: <AiOutlineBook/>,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Meus Decks',
                path: '/decks/meus-decks',
                icon: <TbCards />,
            },
            {
                title: 'Novo Deck',
                path: '/decks/novo-deck',
                icon: <BsPlusCircleDotted />,
            }
        ]
    },
    {
        title: 'Comunidade',
        path: '/community',
        icon: <TbBuildingCommunity />
    },
    {
        title: 'Desempenho',
        path: '/desempenho',
        icon: <GoGraph />
    },
    {
        title: 'Ajuda',
        path: '/ajuda',
        icon: <BiHelpCircle/>
    },
    {
        title: 'Configurações',
        path: '/configurations',
        icon: <FaCog />
    }   
];