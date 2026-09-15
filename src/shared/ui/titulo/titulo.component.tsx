import React from 'react';
import './titulo.style.css';


interface ITituloComponent {
    titulo?: string;
    subtitulo?: string;
}


const TituloComponent: React.FC<ITituloComponent> = ({ titulo = '', subtitulo = '' }) => {
    return (
        <header>
            <h1 className='titulo-principal'>{ titulo }</h1>
            <h2 className='titulo-secundario'>{ subtitulo }</h2>
        </header>
    );
}


export { TituloComponent };
