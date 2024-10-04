import './Pagina.css';
import React, { ReactNode } from 'react';


interface ISecao {
    children: ReactNode;
}


const Pagina: React.FC<ISecao> = ({ children }) => {
    return (
        <main className='pagina'>
            <section className='principal'>
                { children }
            </section>
        </main>    
    );
}


export { Pagina };
