import React, { useEffect, useState } from 'react';
import './carrossel.style.css';

const ESPACAMENTO_ENTRE_CARDS = 20;

export interface IItemCarrossel {
    titulo: string;
    descricao: string;
    tags: string[];
    link: string;
}

interface ICarrossel {
    itens: IItemCarrossel[];
}

const CarrosselComponent: React.FC<ICarrossel> = ({ itens }) => {
    const [indiceAtual, definirIndiceAtual] = useState(0);
    const [pausado, definirPausado] = useState(false);

    const irParaProximo = () => {
        definirIndiceAtual((indice) => (indice + 1) % itens.length);
    };

    const irParaAnterior = () => {
        definirIndiceAtual((indice) => (indice - 1 + itens.length) % itens.length);
    };

    useEffect(() => {
        const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (itens.length < 2 || pausado || movimentoReduzido) {
            return undefined;
        }

        const intervalo = window.setInterval(() => {
            definirIndiceAtual((indice) => (indice + 1) % itens.length);
        }, 6000);
        return () => window.clearInterval(intervalo);
    }, [itens.length, pausado]);

    if (itens.length === 0) {
        return null;
    }

    return (
        <section
            className='carrossel'
            aria-roledescription='carrossel'
            aria-label='Projetos realizados'
            onMouseEnter={ () => definirPausado(true) }
            onMouseLeave={ () => definirPausado(false) }
            onFocus={ () => definirPausado(true) }
            onBlur={ (evento) => {
                if (!evento.currentTarget.contains(evento.relatedTarget)) {
                    definirPausado(false);
                }
            } }
        >
            <div className='carrossel-painel'>
                <div className='carrossel-faixa' style={{ transform: `translateX(calc(-${indiceAtual * 100}% - ${indiceAtual * ESPACAMENTO_ENTRE_CARDS}px))` }}>
                    { itens.map((item) => (
                        <article className='carrossel-item' key={ item.titulo } aria-hidden={ item !== itens[indiceAtual] }>
                            <div>
                                <div className='carrossel-cabecalho'>
                                    <h3>{ item.titulo }</h3>
                                </div>
                                <div className='carrossel-tags'>
                                    { item.tags.map((tag) => <span key={ tag }>#{ tag }</span>) }
                                </div>
                                <p>{ item.descricao }</p>
                            </div>
                            <a className='carrossel-visitar' href={ item.link } target='_blank' rel='noreferrer' tabIndex={ item === itens[indiceAtual] ? 0 : -1 }>Visitar <span aria-hidden='true'>↗</span></a>
                        </article>
                    )) }
                </div>
            </div>
            <p className='carrossel-status' aria-live='polite'>Projeto { indiceAtual + 1 } de { itens.length }</p>
            <div className='carrossel-controles'>
                <button type='button' className='carrossel-navegacao' aria-label='Projeto anterior' onClick={ irParaAnterior }>‹</button>
                <div className='carrossel-paginacao' aria-label='Selecionar projeto'>
                    { itens.map((item, indice) => (
                        <button key={ item.titulo } type='button' aria-label={ `Ver ${item.titulo}` } aria-current={ indiceAtual === indice ? 'true' : undefined } onClick={ () => definirIndiceAtual(indice) } />
                    )) }
                </div>
                <button type='button' className='carrossel-navegacao' aria-label='Próximo projeto' onClick={ irParaProximo }>›</button>
            </div>
        </section>
    );
};

export { CarrosselComponent };
