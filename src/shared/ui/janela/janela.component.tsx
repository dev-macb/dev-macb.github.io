import './janela.style.css';
import React, { ReactNode } from 'react';


interface IJanelaComponent {
    children: ReactNode;
    className?: string;
}


const JanelaComponent: React.FC<IJanelaComponent> = ({ children, className = '' }) => {
    return (
        <main className={ `janela-conteiner ${className}`.trim() }>
            <section className='janela-conteudo'>
                { children }
            </section>
        </main>    
    );
}


export { JanelaComponent };
