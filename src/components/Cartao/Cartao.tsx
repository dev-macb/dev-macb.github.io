import React, { ReactNode } from 'react';
import './Cartao.css';


interface ICartao { 
    titulo: string;
    children: ReactNode;
}


const Cartao: React.FC<ICartao> = ({ titulo, children }) => {
    return (
        <div className='cartao-conteiner'>
            <div className='cartao-conteudo'>
                { children }
            </div>
            <h5>{ titulo }</h5>
        </div>
    );
}

export { Cartao };