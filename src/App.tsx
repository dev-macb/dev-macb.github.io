import './styles/global.css';

import iconeMouse from './assets/icons/Mouse.svg';
import imagemLogo from './assets/images/Logo.svg';
import imagemBanner from './assets/images/Banner.svg';
import iconeFrontEnd from './assets/icons/FrontEnd.svg';
import iconeBackEnd from './assets/icons/BackEnd.svg';
import iconeUiUx from './assets/icons/UiUx.svg';
import LogoTemaClaro from './assets/LogoTemaClaro.svg';
import LogoTemaEscuro from './assets/LogoTemaEscuro.svg';
import iconeMenuHamburger from './assets/icons/MenuHamburger.svg'

import { Painel } from './components/painel/Painel';
import { Rodape } from './components/rodape/Rodape';
import { Divisor } from './components/divisor/Divisor';
import { Caixa } from './components/caixa/Caixa';
import { Imagem } from './components/imagem/Imagem';
import { Secao } from './components/secao/SecaoConteiner';
import { Butao } from './components/butao/Butao';
import { Pagina } from './components/pagina/Pagina';
import { Cabecalho } from './components/cabecalho/Cabecalho';
import { usarTema } from './contexts/TemaContext';
import { Menu } from './components/menu/Menu';


const App = () => {
    const { tema, alterarTema } = usarTema();

    return (
        <Pagina>
            <Cabecalho>
                <Imagem caminhoImagem={ tema === 'light' ? LogoTemaClaro : LogoTemaEscuro } link='/' />
                <Menu.Butao iconeMenu={ iconeMenuHamburger }>
                    <Menu.ButaoItem texto={ tema === 'light' ? 'Modo Escuro' : 'Modo Claro' } onClick={ alterarTema } />
                </Menu.Butao>
            </Cabecalho>

            <Secao style={{ marginTop: '70px' }}>
                <Caixa.Horizontal>
                    <Caixa.Vertical>
                        <Caixa.Horizontal>
                            <div className='secao-apresentacao--titulo'>
                                <h1 className='titulo-especial'>Miguel Alves</h1>
                                <h2 className='titulo-especial-inverso'>Programador</h2>
                            </div>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal>
                            <p>
                                Soluções digitais que unem precisão técnica, <br />
                                inovação criativa e resultados tangíveis. 
                            </p>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal style={{ gap: '20px', justifyContent: 'start' }}>
                            <Butao animado tipo='secundario'>Entrar em contato</Butao>
                            <Butao animado>Ver Projetos</Butao>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal>
                            <div className='secao-apresentacao--ver-mais'>
                                <img src={ iconeMouse } alt="Ícone de Mouse" />
                                <span>Role para ver mais seções</span>
                            </div>
                        </Caixa.Horizontal>
                    </Caixa.Vertical>
                    <img src={ imagemBanner } alt="Desenvolvedor de Software" style={{ maxHeight: '500px' }}/>
                </Caixa.Horizontal>
            </Secao>

            <Secao>
                <h1 className='titulo-especial'>Serviços</h1>
                <Caixa.Horizontal>
                    <Painel.Conteiner>
                        <Caixa.Vertical style={{ gap: '10px' }}>
                            <img src={ iconeFrontEnd } alt="" width='100px' />
                            <h2>Front-end</h2>
                            <p className='texto-pequeno'>Não precisa gastar horas implementando diferentes variações de cores.</p>
                        </Caixa.Vertical>
                    </Painel.Conteiner>

                    <Painel.Conteiner>
                        <Caixa.Vertical style={{ gap: '10px' }}>
                            <img src={ iconeBackEnd } alt="" width='100px' />
                            <h2>Back-end</h2>
                            <p className='texto-pequeno'>Não precisa gastar horas implementando diferentes variações de cores.</p>
                        </Caixa.Vertical>
                    </Painel.Conteiner>
                    
                    <Painel.Conteiner>
                        <Caixa.Vertical style={{ gap: '10px' }}>
                            <img src={ iconeUiUx } alt="" width='100px' />
                            <h2>UX/UI</h2>
                            <p className='texto-pequeno'>Não precisa gastar horas implementando diferentes variações de cores.</p>
                        </Caixa.Vertical>
                    </Painel.Conteiner>
                </Caixa.Horizontal>
            </Secao>  

            <Secao>
                <Caixa.Vertical>
                    <Caixa.Horizontal>
                        <Painel.Conteiner>
                            111
                        </Painel.Conteiner>

                        <Painel.Conteiner>
                            222
                        </Painel.Conteiner>
                    </Caixa.Horizontal>
                    <Caixa.Horizontal>
                        <Painel.Conteiner>
                            333
                        </Painel.Conteiner>

                        <Painel.Conteiner>
                            444
                        </Painel.Conteiner>
                    </Caixa.Horizontal>
                </Caixa.Vertical>
            </Secao>  

            <Secao>
                <Caixa.Vertical>
                    <h1>Sua <span className='titulo-especial'>jornada</span> não deve terminar aqui</h1>
                    <p>Siga-me nas redes sociais para ficar por dentro de mais projetos.</p>
                    <Butao animado >Fique Atento</Butao>
                </Caixa.Vertical>
            </Secao>

            <Rodape textoCopyright='@dev-macb' linkCopyright='https://github.com/dev-macb'>
                <Caixa.Vertical>
                    <Caixa.Horizontal>
                        <img src={ imagemLogo } />
                    </Caixa.Horizontal>
                    <Divisor />
                    <Caixa.Horizontal>
                        <p>2024 © Miguel Alves</p>
                        <div className='rodape-siga-nos'>
                            <p>Siga-nos:</p>
                            <div className='rodape-redes-sociais'>
                                <div className='rodape-rede' />
                                <div className='rodape-rede' />
                                <div className='rodape-rede' />
                            </div>
                        </div>
                    </Caixa.Horizontal>
                </Caixa.Vertical>
            </Rodape>
        </Pagina>
    );
};


export { App };
    