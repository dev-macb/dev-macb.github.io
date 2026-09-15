import React, { ReactNode } from 'react';
import './menu.style.css';
import { MenuConteinerComponent } from './menu-conteiner.component';
import { MenuItemComponent } from './menu-item.component';


interface IMenu {
    children: ReactNode;
}

interface IMenuComponent extends React.FC<IMenu> {
    Item: typeof MenuItemComponent;
}


const MenuComponent = (({ children }: IMenu) => {
    return (
        <MenuConteinerComponent>
            { children }
        </MenuConteinerComponent>
    );
}) as IMenuComponent;

MenuComponent.Item = MenuItemComponent;


export { MenuComponent };