import React, { ReactNode } from 'react';


interface IPainelConteudo {
    children: ReactNode;
}


const PainelConteudo: React.FC<IPainelConteudo> = ({ children }) => {
    return (
        <div className='painel-conteudo'>
            { children }
        </div>
    );
};


export { PainelConteudo };
