import './janela.style.css';
import React, { ReactNode } from 'react';


interface IJanelaComponent {
    children: ReactNode;
}


const JanelaComponent: React.FC<IJanelaComponent> = ({ children }) => {
    return (
        <main className='janela-conteiner'>
            <section className='janela-conteudo'>
                { children }
            </section>
        </main>    
    );
}


export { JanelaComponent };
