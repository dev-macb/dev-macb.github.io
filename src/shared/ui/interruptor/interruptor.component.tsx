import './interruptor.style.css';
import React from 'react';


interface IInterruptor {
    acao: () => void;
    marcado?: boolean;
}


const InterruptorComponent: React.FC<IInterruptor> = ({ acao, marcado = false }) => {
    const tratarAlteracao = () => {
        acao();
    };

    return (
        <label className='interruptor'>
            <input type='checkbox' checked={ marcado } onChange={ tratarAlteracao } className='interruptor-checkbox' />
            <span className='interruptor-chave' />
        </label>
    );
};


export { InterruptorComponent };
