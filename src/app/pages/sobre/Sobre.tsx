// Importação de módulos
import './Sobre.css';
import { Secao, Titulo, Principal } from '../../components';


const Sobre = () => {
    return (
        <Principal btnVoltar={true}>
            <Titulo>
                <h1 className='titulo'>Sobre</h1>
                <h2 className='subtitulo'>Miguel Alves Cordeiro Braz</h2>
            </Titulo>
            <Secao>
                <div className='secao-esquerda-sobre'>
                    <p className='texto-sobre-mim'>
                        Sou Miguel Alves, um desenvolvedor Full Stack com formação 
                        em sistemas de informação pela Universidade Federal de Goiás 
                        (UFG). Tenho experiência em desenvolvimento web, utilizando 
                        linguagens como HTML, CSS, JavaScript, Python e Node.js. 
                        Estou em constante atualização com as últimas tecnologias e 
                        práticas de desenvolvimento para fornecer soluções eficazes 
                        e personalizadas para cada projeto. Meu objetivo é construir 
                        relacionamentos de longo prazo com os clientes, oferecendo 
                        um serviço de qualidade e soluções eficientes.
                    </p>

                    <a href={process.env.PUBLIC_URL + 'texto.txt'} download>
                        <button className='baixar-curriculo'>Baixar Currículo</button>
                    </a>
                </div>
                
                <div className='secao-direita-sobre'>
                    <img className='imagem-miguel' src={process.env.PUBLIC_URL + 'images/macb-miguel.png'} alt="Miguel Alves" />
                </div>
            </Secao>
        </Principal>
    );
}


export { Sobre };
