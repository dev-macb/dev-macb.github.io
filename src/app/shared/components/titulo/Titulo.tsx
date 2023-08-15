// Importação de módulos
import './Titulo.css';


interface LayoutProps  { 
    children: React.ReactNode
}


const Titulo = (propriedades: LayoutProps) => {
    return (
        <div className='pagina-titulo'>
            {propriedades.children}
        </div>
    );
}


export { Titulo };
