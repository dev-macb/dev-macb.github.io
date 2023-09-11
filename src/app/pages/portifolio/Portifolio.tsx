// Importação de módulos
import './Portifolio.css';
import { projetos } from '../../hooks/Projetos';
import { Secao, Titulo, Principal, Carrossel } from '../../components';


const Portifolio = () => {
    return (
        <Principal btnVoltar={true}>
            <Titulo>
                <h1 className='titulo'>Portifolio</h1>
                <h2 className='subtitulo'>Projetos realizados</h2>
            </Titulo>
            <Secao>
                <div className='portifolio-conteiner'>
                    <div className='portifolio-conteudo'>
                        <Carrossel dados={projetos} />
                    </div>
                </div>
            </Secao>
        </Principal>
    );
}


export { Portifolio };