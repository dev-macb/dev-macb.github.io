import React, { ReactNode, useEffect, useState } from 'react';
import { TemaContext } from './tema.context';


interface ITemaProvider {
    children: ReactNode;
}

const TemaProvider: React.FC<ITemaProvider> = ({ children }) => {
    const [tema, definirTema] = useState<'claro' | 'escuro'>(() => {
        return localStorage.getItem('tema') === 'escuro' ? 'escuro' : 'claro';
    });

    const alterarTema = () => {
        definirTema((temaAtual) => temaAtual === 'claro' ? 'escuro' : 'claro');
    };

    useEffect(() => {
        document.body.classList.toggle('tema-escuro', tema === 'escuro');
        localStorage.setItem('tema', tema);
    }, [tema]);

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            { children }
        </TemaContext.Provider>
    );
};


export { TemaProvider };
