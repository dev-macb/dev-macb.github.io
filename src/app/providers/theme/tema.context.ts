import { createContext } from 'react';


interface ITemaContext {
    tema: string;
    alterarTema: () => void;
}

const TemaContext = createContext<ITemaContext | undefined>(undefined);


export { TemaContext };
