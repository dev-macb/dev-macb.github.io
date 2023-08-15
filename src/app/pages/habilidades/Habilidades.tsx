// Importação de módulos
import './Habilidades.css';
import { 
    Secao, 
    Titulo, 
    Principal
} from '../../shared/components';
import { CartaoHabilidade } from '../../shared/components/cartao-habilidade/CartaoHabilidade';


const Habilidades = () => {
    return (
        <Principal btnVoltar={true}>
            <Titulo>
                <h1 className='titulo'>Habilidades</h1>
                <h2 className='subtitulo'>Ferramentas e tecnologias dominadas</h2>
            </Titulo>
            <Secao>
                <div className='secao-central-conteiner'>
                    <div className='secao-central-conteudo'>
                        <div className='secao-central-linha1'>
                            <CartaoHabilidade link='/images/icone-python.png'>Python</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-javascript.png'>JavaScript</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-typescript.png'>Typescript</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-node.png'>Node</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-react.png'>React</CartaoHabilidade>
                        </div>
                        <div className='secao-central-linha2'>
                            <CartaoHabilidade link='/images/icone-wordpress.png'>Wordpress</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-html.png'>HTML</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-php.png'>PHP</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-git.png'>Git</CartaoHabilidade>
                            <CartaoHabilidade link='/images/icone-ux.png'>Ux/Ui</CartaoHabilidade>
                        </div>
                    </div>
                </div>
            </Secao>
        </Principal>
    );
}


export { Habilidades };
