// Importação de módulos
import './CartaoHabilidade.css';

interface LayoutProps { 
    link: string;
    children: React.ReactNode;
}


const CartaoHabilidade = ({ link, children }: LayoutProps) => {
    return (
        <div className="cartao-conteiner">
            <div className='cartao-moldura'>
                <img src={process.env.PUBLIC_URL + link} alt='Icone' />
            </div>
            <h4 className='cartao-texto'>
                {children}
            </h4>
        </div>
    );
}

export { CartaoHabilidade };
