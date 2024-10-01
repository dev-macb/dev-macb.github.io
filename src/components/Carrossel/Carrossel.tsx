import './Carrossel.css';
import React, { useState } from 'react';

interface IItemCarrossel {
    titulo: string;
    descricao: string;
    tags: string[];
}

interface ICarrossel {
    itens: IItemCarrossel[];
}

const Carrossel: React.FC<ICarrossel> = ({ itens }) => {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const irParaProximo = () => {
        setIndiceAtual((indiceAtual + 1) % itens.length);
    };

    const irParaAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + itens.length) % itens.length);
    };

    return (
        <div className="carrossel-conteiner">
            <button onClick={ irParaAnterior } className="carrossel-botao esquerdo">
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#303030" d="M32.2669 9.23019C32.9221 9.79179 32.9979 10.7782 32.4363 11.4334L20.8079 24.9999L32.4363 38.5663C32.9979 39.2215 32.9221 40.2079 32.2669 40.7695C31.6117 41.3311 30.6253 41.2553 30.0637 40.6001L17.5637 26.0167C17.0621 25.4316 17.0621 24.5681 17.5637 23.983L30.0637 9.39967C30.6253 8.74447 31.6117 8.6686 32.2669 9.23019Z" />
                </svg>
            </button>

            <div className="carrossel-painel">
                <div className="carrossel-lista" style={{ transform: `translateX(-${indiceAtual * 100}%)` }}>
                    {itens.map((item, indice) => (
                        <div key={ indice } className="carrossel-item">
                            <div className="carrossel-header">
                                <h3>{ item.titulo }</h3>
                                <div className="carrossel-tags">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="carrossel-tag">
                                            #{ tag }
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p>{ item.descricao }</p>
                            <button className="botao-item">
                                Visitar
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="var(--cor-texto-claro)"/>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                <div className="carrossel-paginacao">
                    {itens.map((_, index) => (
                        <span key={index} onClick={() => setIndiceAtual(index)} className={`bolinha ${indiceAtual === index ? 'ativa' : ''}`} />
                    ))}
                </div>
            </div>

            <button onClick={irParaProximo} className="carrossel-botao direito">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7332 9.23019C18.3884 8.6686 19.3748 8.74447 19.9364 9.39967L32.4364 23.983C32.9379 24.5681 32.9379 25.4316 32.4364 26.0167L19.9364 40.6001C19.3748 41.2553 18.3884 41.3311 17.7332 40.7695C17.078 40.2079 17.0021 39.2215 17.5637 38.5663L29.1921 24.9999L17.5637 11.4334C17.0021 10.7782 17.078 9.79179 17.7332 9.23019Z" fill="#303030"/>
                </svg>
            </button>
        </div>
    );
};

export { Carrossel };
