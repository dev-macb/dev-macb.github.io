import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';

import { Inicio } from '../pages/Inicio';
import { Sobre } from '../pages/Sobre';
import { Habilidades } from '../pages/Habilidades';
import { Portifolio } from '../pages/Portifolio';
import { Contato } from '../pages/Contato';


const Rotiador = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/inicio'      element={ <Inicio /> }/>
                <Route path='/sobre'       element={ <Sobre /> }/>
                <Route path='/habilidades' element={ <Habilidades /> }/>
                <Route path='/portifolio'  element={ <Portifolio /> }/>
                <Route path='/contato'     element={ <Contato /> }/>

                <Route path='*'            element={ <Navigate to='/inicio' /> }/>
            </Routes>
        </HashRouter>
    );
}


export { Rotiador };
