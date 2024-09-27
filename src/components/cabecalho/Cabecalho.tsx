import './Cabecalho.css';
import React, { ReactNode } from 'react';


interface ICabecalho {
    divisor?: boolean;
    children: ReactNode;
}


const Cabecalho: React.FC<ICabecalho> = ({ divisor = true, children }) => {
    return (
        <header style={{ borderBottom: divisor ? '' : 'none' }} className='cabecalho-conteiner'>
            <div className='cabecalho-conteudo'>
                { children }
            </div>
        </header>
    );
};


export { Cabecalho };