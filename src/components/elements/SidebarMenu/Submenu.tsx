import  { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import styled from 'styled-components';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 1rem;
    text-decoration: none;
    color: #ffffff;
    letter-spacing: -0.01em;

    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    &:hover {
        background-color: #1f1f1b;
        border-left: 4px solid #3F51B5;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #1f1f1b;
    }
`;

// ...
const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = (event: React.MouseEvent) => {
        event.preventDefault();
        setSubnav(!subnav);
    };

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item.subnav && (subnav ? item.iconOpened : item.iconClosed)}</div>
            </SidebarLink>
            {subnav &&
                item.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default Submenu;