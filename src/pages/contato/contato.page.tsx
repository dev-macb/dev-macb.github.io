import React from 'react';
import { PaginaLayout } from '../../app/layouts';
import './contato.style.css';

const contatos = [
    { titulo: 'E-mail', valor: 'dev.macb@gmail.com', link: 'mailto:dev.macb@gmail.com' },
    { titulo: 'Localização', valor: 'Goiânia, Goiás, Brasil', link: 'https://www.google.com/maps/place/Goi%C3%A2nia,+GO/@-16.6958759,-49.3042674,11z' },
];

const ContatoPage: React.FC = () => {
    return (
        <PaginaLayout titulo='Contato' subtitulo='Vamos trabalhar juntos' className='pagina-contato' mostrarBotaoVoltar>
            <div className='contato-conteudo'>
                <section className='contato-apresentacao'>
                    <p>
                        Embora eu não esteja procurando novas oportunidades no momento, minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou apenas quer dizer oi, farei o possível para entrar em contato com você!
                    </p>
                    <ul className='contato-lista'>
                        { contatos.map(({ titulo, valor, link }) => (
                            <li key={ titulo }>
                                <a href={ link } target={ titulo === 'E-mail' ? undefined : '_blank' } rel={ titulo === 'E-mail' ? undefined : 'noreferrer'}>
                                    <span className='contato-marcador' aria-hidden='true' />
                                    <span><strong>{ titulo }</strong><small>{ valor }</small></span>
                                </a>
                            </li>
                        )) }
                    </ul>
                </section>
                <nav className='contato-redes' aria-label='Redes sociais'>
                    <a href='https://github.com/dev-macb' target='_blank' rel='noreferrer'>GitHub <span aria-hidden='true'>↗</span></a>
                    <a href='https://www.linkedin.com/in/dev-macb/' target='_blank' rel='noreferrer'>LinkedIn <span aria-hidden='true'>↗</span></a>
                </nav>
            </div>
        </PaginaLayout>
    );
};

export { ContatoPage };
