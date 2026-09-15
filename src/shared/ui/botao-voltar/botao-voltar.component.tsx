import React from 'react';
import { Link } from 'react-router-dom';
import './botao-voltar.style.css';

const BotaoVoltarComponent: React.FC = () => {
    return (
        <Link className='botao-voltar' to='/' aria-label='Voltar para a página inicial'>
            <svg width='32' height='32' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M19 11H7.83l4.59-4.59L11 5l-7 7 7 7 1.41-1.41L7.83 13H19v-2Z' fill='currentColor' />
            </svg>
            <span>Voltar</span>
        </Link>
    );
};

export { BotaoVoltarComponent };
