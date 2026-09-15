import React from 'react';
import './rodape.style.css';


interface IRodape {
    textoCopyright?: string;
    linkCopyright?: string;
}

const RodapeComponent: React.FC<IRodape> = ({ textoCopyright = '', linkCopyright = '#' }) => {
    return (
        <footer className='rodape-container'>
            <address>
                <a href={ linkCopyright } target='_blank' rel='noopener noreferrer' className='rodape-link'>
                    { textoCopyright }
                </a>
            </address>
        </footer>
    );
}


export { RodapeComponent };
