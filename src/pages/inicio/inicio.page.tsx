import React from 'react';
import { PaginaLayout } from '../../app/layouts';
import { Menu } from '../../shared/ui';
import './inicio.style.css'


const InicioPage: React.FC = () => {
    return (
        <PaginaLayout titulo='Miguel Alves' subtitulo='Programador' className='pagina-inicio'>
            <div className='inicio-conteudo'>
                <section className='inicio-secao-esquerda'>
                    <nav aria-label='Navegação principal'>
                        <Menu>
                            <Menu.Item texto='Início' link='/' ativo />
                            <Menu.Item texto='Sobre' link='/sobre' />
                            <Menu.Item texto='Habilidades' link='/habilidades' />
                            <Menu.Item texto='Portfólio' link='/portifolio' />
                            <Menu.Item texto='Contato' link='/contato' />
                        </Menu>
                    </nav>
                </section>

                <section className='inicio-secao-direita' aria-label='Ilustração decorativa'>
                    <svg width="320" height="368" viewBox="0 0 270 310" className='inicio--imagem-cubo-impossivel'>
                        <path d="M135 0L269.5 76.5L270 232L162 171L191 156L243 186V95L163 48V108L135 125V0Z" fill="var(--cor-primaria)"/>
                        <path d="M27 95L135 155.706V279L55 232L80 216.5L108 232.706V171L54.5 139.706V169.046L27 185V95Z" fill="var(--cor-primaria)"/>
                        <path d="M107 48V78L81.5 92.5L107 109L135 125L188.5 92.5L163 78V48L243 95L135 156L27 95L107 48Z" fill="var(--cor-secundaria)"/>
                        <path d="M108 171V200L55 232L135 279L217 232L162 200V171L270 232L135.5 309.5L0 232L108 171Z" fill="var(--cor-secundaria)"/>
                        <path d="M0 77L135 0V125L107 109V48L27 95V185L79.5 154.5L108 171L0 232V77Z" fill="var(--cor-destaque)"/>
                        <path d="M135 155.833L243 95V186L216 170.5V143L162 171V233L190 216.5L217 232L135 279V155.833Z" fill="var(--cor-destaque)"/>
                    </svg>
                </section>
            </div>
        </PaginaLayout>
    );
}


export { InicioPage };
