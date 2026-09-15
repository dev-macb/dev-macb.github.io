import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './styles/global.css';
import { rotas } from './routes';
import { TemaProvider } from './providers/theme/tema.provider';

const roteador = createBrowserRouter([
    ...rotas,
    { path: '*', element: <Navigate to='/' replace /> },
]);

function App() {
    return (
        <TemaProvider>
            <RouterProvider router={roteador} />
        </TemaProvider>
    );
}


export { App };
