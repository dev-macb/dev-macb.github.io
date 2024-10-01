import React from 'react';

import { Caixa } from '../components/Caixa/Caixa';
import { Interruptor } from '../components/Interruptor/Interruptor';
import { Pagina } from '../components/Pagina/Pagina';
import { usarTema } from '../contexts/TemaContext';


const Inicio: React.FC = () => {
    const { alterarTema } = usarTema();

    return (
        <Pagina>
            <Caixa.Horizontal style={{ height: '10%', justifyContent: 'end'}}>
                <Interruptor acao={ alterarTema } />
            </Caixa.Horizontal>

            <Caixa.Horizontal style={{ height: '90%' }}>
                <Caixa.Horizontal>
                    <Caixa.Vertical style={{ alignItems: 'start' }}> 
                        <div>
                            <h1>Miguel Alves</h1>
                            <h2>Programador</h2>
                        </div>
                        
                        <nav>
                            <ul>
                                <li>
                                    <a href='#/inicio' className='inicio--menu-item-link'>
                                        <div className='inicio--menu-item-losangulo' />
                                        <h3>Início</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href='#/sobre' className='inicio--menu-item-link'>
                                        <div className='inicio--menu-item-losangulo' />
                                        <h3>Sobre</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href='#/habilidades' className='inicio--menu-item-link'>
                                        <div className='inicio--menu-item-losangulo' />
                                        <h3>Habilidades</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href='#/portifolio' className='inicio--menu-item-link'>
                                        <div className='inicio--menu-item-losangulo' />
                                        <h3>Portifólio</h3>
                                    </a>
                                </li>

                                <li className='inicio--menu-item'>
                                    <a href='#/contato' className='inicio--menu-item-link'>
                                        <div className='inicio--menu-item-losangulo' />
                                        <h3>Contato</h3>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Caixa.Vertical>
                </Caixa.Horizontal>
                
                <Caixa.Horizontal style={{ justifyContent: 'center' }}>
                    <svg width="270" height="310" viewBox="0 0 270 310" className='inicio--imagem-cubo-impossivel'>
                        <path d="M135 0L269.5 76.5L270 232L162 171L191 156L243 186V95L163 48V108L135 125V0Z" fill="var(--cor-primaria)"/>
                        <path d="M27 95L135 155.706V279L55 232L80 216.5L108 232.706V171L54.5 139.706V169.046L27 185V95Z" fill="var(--cor-primaria)"/>
                        <path d="M107 48V78L81.5 92.5L107 109L135 125L188.5 92.5L163 78V48L243 95L135 156L27 95L107 48Z" fill="var(--cor-secundaria)"/>
                        <path d="M108 171V200L55 232L135 279L217 232L162 200V171L270 232L135.5 309.5L0 232L108 171Z" fill="var(--cor-secundaria)"/>
                        <path d="M0 77L135 0V125L107 109V48L27 95V185L79.5 154.5L108 171L0 232V77Z" fill="var(--cor-destaque)"/>
                        <path d="M135 155.833L243 95V186L216 170.5V143L162 171V233L190 216.5L217 232L135 279V155.833Z" fill="var(--cor-destaque)"/>
                    </svg>
                </Caixa.Horizontal>
            </Caixa.Horizontal>
        </Pagina>
    );
}


export { Inicio };
