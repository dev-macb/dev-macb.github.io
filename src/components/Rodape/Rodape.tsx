import './Rodape.css';
import React from 'react';


interface IRodape {
    textoCopyright: string;
    linkCopyright: string;
}


const Rodape: React.FC<IRodape> = ({ textoCopyright, linkCopyright }) => {
    return (
        <footer className='rodape-container'>
            <address>
                <a href={ linkCopyright } target="_blank" rel="noopener noreferrer" className='rodape-link'>
                    { textoCopyright }
                </a>
            </address>
        </footer>
    );
}


export { Rodape };
