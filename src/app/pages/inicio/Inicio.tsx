// Importação de módulos
import './Inicio.css';
import { 
    Secao, 
    Titulo, 
    Principal
} from '../../shared/components';
import { ItemMenu } from '../../shared/components/item-menu/ItemMenu';


const Inicio = () => {
    return (
        <Principal btnVoltar={false}>
            <Titulo>
                <h1 className='titulo'>Miguel Alves</h1>
                <h2 className='subtitulo'>Desenvolvedor Full Stack</h2>
            </Titulo>
            <Secao>
                <div className='secao-esquerda-inicio'>
                    <nav className='menu-lateral'>
                        <ItemMenu link='/'>Início</ItemMenu>
                        <ItemMenu link='/sobre'>Sobre</ItemMenu>
                        <ItemMenu link='/habilidades'>Habilidades</ItemMenu>
                        <ItemMenu link='/portifolio'>Portifólio</ItemMenu>
                        <ItemMenu link='/contato'>Contato</ItemMenu>
                    </nav>
                </div>
                <div className='secao-direita-imagem'>
                    <img className='cubo-inicio' src={process.env.PUBLIC_URL + '/images/macb-cubo-claro.png'} alt="cubo-tema-claro" />
                </div>
            </Secao>
        </Principal>
    );
}


export { Inicio };
