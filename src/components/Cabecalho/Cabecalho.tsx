import './Cabecalho.css';
import React from 'react';


interface ICabecalho {
    link?: string;
    animado?: boolean;
}


const Cabecalho: React.FC<ICabecalho> = ({ link = '#/inicio', animado = false }) => {
    return (
        <header className='cabecalho-conteiner'>
            <a href={ link }>
                <div className={ `icone-losangulo ${animado ? 'animado' : ''}` }/>
            </a>
        </header>
    );
};


export { Cabecalho };
