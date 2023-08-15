// Importação de módulos
import './ItemMenu.css';


interface LayoutProps { 
    link: string;
    children: React.ReactNode;
}


const ItemMenu = ({ link, children }: LayoutProps) => {
    return (
        <div className='item-menu-conteiner'>
            <div className='item-menu-conteudo'>
                <a className='item-menu-link' href={link}>
                    <div className='item-menu-icone-conteiner'>
                        <div className="item-menu-icone" />
                    </div>
                    <div className="item-menu-texto">
                        <h4>{children}</h4>
                    </div>
                </a>
            </div>
        </div>
    ); 
}


export { ItemMenu };
