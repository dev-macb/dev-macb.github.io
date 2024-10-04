import React from 'react';

import { ButaoVoltar } from '../components/ButaoVoltar/ButaoVoltar';
import { Caixa } from '../components/Caixa/Caixa';
import { Interruptor } from '../components/Interruptor/Interruptor';
import { Pagina } from '../components/Pagina/Pagina';
import { usarTema } from '../contexts/TemaContext';


const Contato: React.FC = () => {
    const { alterarTema } = usarTema();

    return (
        <Pagina>
            <Caixa.Horizontal style={{ height: '10%' }}>
                <ButaoVoltar />
                <Interruptor acao={ alterarTema } />
            </Caixa.Horizontal>
            
            <Caixa.Vertical style={{ height: '90%' }}>
                <Caixa.Horizontal style={{ height: 'auto' }}>
                    <div>
                        <h1>Contato</h1>
                        <h2>Vamos trabalhar juntos</h2>
                    </div>
                </Caixa.Horizontal>

                <Caixa.Horizontal style={{ height: '100%' }}>
                    <Caixa.Vertical style={{ alignItems: 'start', width: '50%' }}>
                        <p>
                            Embora eu não esteja procurando novas oportunidades no 
                            momento, minha caixa de entrada está sempre aberta. Se 
                            você tem uma pergunta ou apenas quer dizer oi, farei o 
                            possível para entrar em contato com você!
                        </p>

                        <nav>
                            <ul>
                                <li>
                                    <a href='mailto:dev.macb@gmail.com' target="_blank" rel="noopener noreferrer" className='contato--menu-item-link'>
                                        <div className='contato--menu-item-losangulo' />
                                        <div className='contato--menu-item'>
                                            <h4>E-mail</h4>
                                            <p>dev.macb@gmail.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://api.whatsapp.com/send/?phone=5562991416616' target="_blank" rel="noopener noreferrer" className='contato--menu-item-link'>
                                        <div className='contato--menu-item-losangulo' />
                                        <div className='contato--menu-item'>
                                            <h4>Telefone</h4>
                                            <p>+55 (62) 991-416-616</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.google.com/maps/place/Goi%C3%A2nia,+GO/@-16.6958759,-49.3042674,11z/data=!3m1!4b1!4m6!3m5!1s0x935ef6bd58d80867:0xef692bad20d2678e!8m2!3d-16.6868912!4d-49.2647943!16s%2Fg%2F11b6_k3v69' target="_blank" rel="noopener noreferrer" className='contato--menu-item-link'>
                                        <div className='contato--menu-item-losangulo' />
                                        <div className='contato--menu-item'>
                                            <h4>Localização</h4>
                                            <p>Goiânia, Goiás, Brasil</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Caixa.Vertical>

                    <Caixa.Vertical style={{ alignItems: 'end', justifyContent: 'end', width: '50%' }}>
                        <a href="https://github.com/dev-macb" target='_blank' rel='noopener noreferrer' className='contato--item-link-externo'>
                            Github
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="var(--cor-texto-claro)"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/dev-macb/" target='_blank' rel='noopener noreferrer' className='contato--item-link-externo'>
                            LinkedIn
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="var(--cor-texto-claro)"/>
                            </svg>
                        </a>
                    </Caixa.Vertical>
                </Caixa.Horizontal>
            </Caixa.Vertical>
        </Pagina>
    );
}


export { Contato };
