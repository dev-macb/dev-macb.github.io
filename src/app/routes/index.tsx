// Importação de módulos
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Inicio, Sobre, Habilidades, Portifolio, Contato } from '../pages';


const Rotiador = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/inicio'      element={<Inicio />}/>
                <Route path='/sobre'       element={<Sobre />}/>
                <Route path='/habilidades' element={<Habilidades />}/>
                <Route path='/portifolio'  element={<Portifolio />}/>
                <Route path='/contato'     element={<Contato />}/>

                <Route path='*'            element={<Navigate to='/inicio' />}/>
            </Routes>
        </BrowserRouter>
    );
}


export { Rotiador };
