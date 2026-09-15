import React from 'react';
import { Link } from 'react-router-dom';
import './cabecalho.style.css';


interface ICabecalho {
    link?: string;
    animado?: boolean;
}

const CabecalhoComponent: React.FC<ICabecalho> = ({ link = '/', animado = false }) => {
    return (
        <header className='cabecalho-conteiner'>
            <Link to={ link } aria-label='Ir para a página inicial'>
                <div className={ `icone-losangulo ${animado ? 'animado' : ''}` }/>
            </Link>
        </header>
    );
};


export { CabecalhoComponent };
