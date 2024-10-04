import './Interruptor.css';
import React from 'react';


interface IInterruptor {
    acao: () => void;
}


const Interruptor: React.FC<IInterruptor> = ({ acao }) => {
    const tratarAlteracao = () => {
        acao();
    };

    return (
        <label className='interruptor'>
            <input type='checkbox' onChange={ tratarAlteracao } className='interruptor-checkbox' />
            <span className='interruptor-chave' />
        </label>
    );
};


export { Interruptor };
