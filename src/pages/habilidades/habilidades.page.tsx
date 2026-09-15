import React from 'react';
import { PaginaLayout } from '../../app/layouts';
import { iconesPorTecnologia } from './habilidades-icones';
import './habilidades.style.css';

const tecnologias = [
    { nome: 'C#', icone: 'C#' },
    { nome: 'Python', icone: 'Python' },
    { nome: 'JavaScript', icone: 'JavaScript' },
    { nome: 'TypeScript', icone: 'Typescript' },
    { nome: 'Node.js', icone: 'Node.js' },
    { nome: 'React.js', icone: 'React.js' },
    { nome: 'UI5', icone: 'UI5' },
    { nome: 'PHP', icone: 'PHP' },
    { nome: 'Git', icone: 'Git' },
    { nome: 'Figma', icone: 'Figma' },
];

const HabilidadesPage: React.FC = () => {
    return (
        <PaginaLayout titulo='Habilidade' subtitulo='Tecnologias dominadas' className='pagina-habilidades' mostrarBotaoVoltar>
            <section className='habilidades-lista' aria-label='Tecnologias dominadas'>
                { tecnologias.map(({ nome, icone }) => (
                    <article className='habilidade' key={ nome }>
                        <div className='habilidade-cartao'>
                            <span
                                className='habilidade-marca'
                                aria-hidden='true'
                                dangerouslySetInnerHTML={{ __html: iconesPorTecnologia[icone] }}
                            />
                        </div>
                        <h3>{ nome }</h3>
                    </article>
                )) }
            </section>
        </PaginaLayout>
    );
};

export { HabilidadesPage };
