// Importação de módulos
import './Cabecalho.css';
import React from 'react';


const Cabecalho: React.FC = () => {
    return (
        <header>
            <a href="/">
                <div className='icone-losangulo'/>
            </a>
        </header>
    );
}

export { Cabecalho };
