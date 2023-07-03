
import { AiFillCaretDown} from 'react-icons/ai';
import { AiFillCaretUp} from 'react-icons/ai';
import { AiOutlineBook} from 'react-icons/ai';
import { SidebarItem } from './SidebarItem';
import { BiHelpCircle } from 'react-icons/bi';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { TbCards, TbBuildingCommunity } from 'react-icons/tb';

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
                path: '/my-decks',
                icon: <TbCards />,
            },
            {
                title: 'Novo Deck',
                path: '/new-deck',
                icon: <BsPlusCircleDotted />,
            }
        ]
    },
    {
        title: 'Comunidade',
        path: '/community',
        icon: <TbBuildingCommunity />
    },
    /*{
        title: 'Desempenho',
        path: '/desempenho',
        icon: <GoGraph />
    },*/
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