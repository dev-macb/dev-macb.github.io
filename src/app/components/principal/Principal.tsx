// Importação de módulos
import { Toggle } from '../toggle/Toggle';
import { Voltar } from '../voltar/Voltar';
import './Principal.css';


interface LayoutProps {
    btnVoltar: boolean; 
    children: React.ReactNode
}


const Principal = (propriedades: LayoutProps) => {
    return (
        <div className="principal">

            <div className="principal-conteiner">

                <div className="principal-conteudo">

                    <div className='menu-superior'>
                        {propriedades.btnVoltar ? <Voltar /> : <div />}
                        <Toggle />
                    </div>


                    <div className='pagina-conteiner'>

                        <div className='pagina-conteudo'>

                            {propriedades.children}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


export { Principal };
