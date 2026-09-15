import React, { useState } from 'react';
import './carrossel.style.css';

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
    const itemAtual = itens[indiceAtual];

    if (!itemAtual) {
        return null;
    }

    return (
        <section className='carrossel' aria-roledescription='carrossel' aria-label='Projetos realizados'>
            <article className='carrossel-item'>
                <div>
                    <div className='carrossel-cabecalho'>
                        <h3>{ itemAtual.titulo }</h3>
                        <span>{ indiceAtual + 1 } de { itens.length }</span>
                    </div>
                    <div className='carrossel-tags'>
                        { itemAtual.tags.map((tag) => <span key={ tag }>#{ tag }</span>) }
                    </div>
                    <p>{ itemAtual.descricao }</p>
                </div>
                <a className='carrossel-visitar' href={ itemAtual.link } target='_blank' rel='noreferrer'>Visitar projeto <span aria-hidden='true'>↗</span></a>
            </article>
            <div className='carrossel-controles'>
                <button type='button' onClick={ () => definirIndiceAtual(indiceAtual - 1) } disabled={ indiceAtual === 0 }>Anterior</button>
                <div className='carrossel-paginacao' aria-label='Selecionar projeto'>
                    { itens.map((item, indice) => (
                        <button key={ item.titulo } type='button' aria-label={ `Ver ${item.titulo}` } aria-current={ indiceAtual === indice ? 'true' : undefined } onClick={ () => definirIndiceAtual(indice) } />
                    )) }
                </div>
                <button type='button' onClick={ () => definirIndiceAtual(indiceAtual + 1) } disabled={ indiceAtual === itens.length - 1 }>Próximo</button>
            </div>
        </section>
    );
};

export { CarrosselComponent };
