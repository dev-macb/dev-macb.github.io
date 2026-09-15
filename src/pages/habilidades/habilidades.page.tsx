import React from 'react';
import { PaginaLayout } from '../../app/layouts';
import './habilidades.style.css';

const tecnologias = [
    { nome: 'C#', categoria: 'Back-end' },
    { nome: 'Python', categoria: 'Back-end' },
    { nome: 'JavaScript', categoria: 'Front-end' },
    { nome: 'TypeScript', categoria: 'Front-end' },
    { nome: 'Node.js', categoria: 'Back-end' },
    { nome: 'PHP', categoria: 'Back-end' },
    { nome: 'Git', categoria: 'Ferramenta' },
    { nome: 'Figma', categoria: 'Design' },
];

const HabilidadesPage: React.FC = () => {
    return (
        <PaginaLayout titulo='Habilidades' subtitulo='Tecnologias dominadas' className='pagina-habilidades' mostrarBotaoVoltar>
            <section className='habilidades-lista' aria-label='Tecnologias dominadas'>
                { tecnologias.map(({ nome, categoria }) => (
                    <article className='habilidade-cartao' key={ nome }>
                        <span className='habilidade-marca' aria-hidden='true'>{ nome.slice(0, 2) }</span>
                        <h3>{ nome }</h3>
                        <p>{ categoria }</p>
                    </article>
                )) }
            </section>
        </PaginaLayout>
    );
};

export { HabilidadesPage };
