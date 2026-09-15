import React, { ReactNode } from 'react';


interface IMenuConteiner {
    children: ReactNode;
}


const MenuConteinerComponent: React.FC<IMenuConteiner> = ({ children }) => {
    return (
        <nav className='menu-conteiner'>
            <ul>
                { children }
            </ul>
        </nav>
    );
}


export { MenuConteinerComponent };