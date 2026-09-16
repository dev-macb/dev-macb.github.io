import React from 'react';
import './aviso-orientacao.style.css';


interface IAvisoOrientacao {
    direcao: 'vertical' | 'horizontal';
}


const AvisoOrientacaoComponent: React.FC<IAvisoOrientacao> = ({ direcao }) => {
    const orientacaoVertical = direcao === 'vertical';

    return (
        <aside className={ `aviso-orientacao aviso-orientacao--${direcao}` } role='status'>
            <div className='aviso-orientacao-ilustracao' aria-hidden='true'>
                <span className='aviso-orientacao-celular'>
                    <span className='aviso-orientacao-tela' />
                    <span className='aviso-orientacao-botao-principal' />
                </span>
                <svg className='aviso-orientacao-seta' viewBox='0 0 72 72'>
                    <path d='M56 36a22 22 0 1 1-12-20' />
                    <path d='m44 7 2 11-11 2' />
                </svg>
            </div>
            <h1>Gire seu celular</h1>
            <p>
                { orientacaoVertical
                    ? 'Para continuar, volte o aparelho para a posição vertical.'
                    : 'O Jogo da Vida funciona melhor com o aparelho na horizontal.' }
            </p>
        </aside>
    );
};


export { AvisoOrientacaoComponent };
