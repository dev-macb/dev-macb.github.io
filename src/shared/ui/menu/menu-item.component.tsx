import React from 'react';
import { Link } from 'react-router-dom';


interface IMenuItem {
    texto?: string;
    link?: string;
    ativo?: boolean;
}


const MenuItemComponent: React.FC<IMenuItem> = ({ texto = '', link = '/', ativo = false }) => {
    return (
        <li className={ ativo ? 'menu-item ativo' : 'menu-item' }>
            <Link className='menu-item-link' to={ link } aria-current={ ativo ? 'page' : undefined }>
                <span className='menu-item-icone' />
                <span className='menu-item-texto'>{ texto }</span>
            </Link>
        </li>
    );
}


export { MenuItemComponent };
