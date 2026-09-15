import { useContext } from 'react';
import { TemaContext } from './tema.context';


const useTema = () => {
    const contexto = useContext(TemaContext);

    if (!contexto) {
        throw new Error('O hook useTema deve ser usado dentro de um TemaProvider.');
    }

    return contexto;
};


export { useTema };
