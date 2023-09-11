// Importação de módulos
import './Secao.css';

interface LayoutProps { 
    children: React.ReactNode
}

const Secao = (propriedades: LayoutProps) => {
    return (
        <div className="pagina-secao">
            {propriedades.children}
        </div>
    );
}


export { Secao };
