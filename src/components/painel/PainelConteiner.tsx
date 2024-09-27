import React, { ReactNode } from 'react';


interface IPainelConteiner {
    children: ReactNode;
}


const PainelConteiner: React.FC<IPainelConteiner> = ({ children }) => {
    return (
        <div className='painel-conteiner'>
            { children }
        </div>
    );
};


export { PainelConteiner };
