// Importação de módulos
import './Portifolio.css';
import { Secao, Titulo, Principal, Carrossel } from '../../shared/components';


const Portifolio = () => {
    const projetos = [
        {
            titulo: 'Ambivar',
            texto: 'O Ambivar é um pacote em PHP que tem como objetivo facilitar a gestão de variáveis de ambiente em projetos. Esse pacote permite carregar essas variáveis através de um arquivo .env, que é lido automaticamente ou especificando o diretório do arquivo.',
            link: 'https://packagist.org/packages/dev-macb/ambivar'
        },
        {
            titulo: 'Poderoso',
            texto: 'O Poderoso é um pacote PHP que oferece uma abstração de banco de dados completa e fácil de usar. Com funções simples para configurar e conectar, é possível criar, ler, atualizar e excluir registros do banco de dados em poucos minutos.',
            link: 'https://packagist.org/packages/dev-macb/poderoso'
        },
        {
            titulo: 'MacB Theme',
            texto: 'Leve seus códigos para fora da caixa com o tema MacB!',
            link: 'https://marketplace.visualstudio.com/items?itemName=dev-macb.macb-vscode-theme'
        }
    ];


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