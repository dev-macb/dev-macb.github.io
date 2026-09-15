import type { RouteObject } from 'react-router-dom';
import { ContatoPage, HabilidadesPage, InicioPage, PortifolioPage, SobrePage } from '../pages';

const rotas: RouteObject[] = [
    {
        path: '/',
        children: [
            { index: true, element: <InicioPage /> },
            { path: 'sobre', element: <SobrePage /> },
            { path: 'habilidades', element: <HabilidadesPage /> },
            { path: 'portifolio', element: <PortifolioPage /> },
            { path: 'contato', element: <ContatoPage /> },
        ],
    },
];

export { rotas };
