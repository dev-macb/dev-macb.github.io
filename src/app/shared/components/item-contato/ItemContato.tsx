// Importação de módulos
import './ItemContato.css';

interface LayoutProps { 
    link: string;
    children: React.ReactNode;
}


const ItemContato = ({ link, children }: LayoutProps) => {
    return (
        <div className='item-contato-conteiner'>
            <div className='item-contato-conteudo'>
                <a className='item-contato-link' href={link} target="_blank">
                    <div className='item-contato-icone-conteiner'>
                        <div className="item-contato-icone" />
                    </div>
                    <div className="item-contato-texto">
                        {children}
                    </div>
                </a>
            </div>
        </div>
    );
}


export { ItemContato };
