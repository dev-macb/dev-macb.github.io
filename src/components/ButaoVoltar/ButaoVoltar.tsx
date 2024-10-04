import './ButaoVoltar.css';
import React from 'react';


const ButaoVoltar: React.FC = () => {
    return (
        <a href='#/inicio' className='butao-voltar'>
            <svg width='50' height='50' viewBox='0 0 50 50'>
                <path fill-rule='evenodd' clip-rule='evenodd' d='M21.9379 11.3951C22.5481 12.0053 22.5481 12.9947 21.9379 13.6049L12.1052 23.4375H41.6663C42.5293 23.4375 43.2288 24.1371 43.2288 25C43.2288 25.8629 42.5293 26.5625 41.6663 26.5625H12.1052L21.9379 36.3951C22.5481 37.0053 22.5481 37.9947 21.9379 38.6049C21.3277 39.215 20.3383 39.215 19.7282 38.6049L7.22815 26.1049C6.61796 25.4947 6.61796 24.5053 7.22815 23.8951L19.7282 11.3951C20.3383 10.785 21.3277 10.785 21.9379 11.3951Z' fill='var(--cor-primaria)'/>
            </svg>
            <span>Voltar</span>
        </a>
    );
};


export { ButaoVoltar };
