import './styles/Global.css';

import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Rodape } from './components/Rodape/Rodape';
import { Rotiador } from './routes/Rotiador';
import { TemaProvider } from './contexts/TemaContext';


const App = () => {
    return (
        <TemaProvider>
            <Cabecalho link='#/inicio'/>
            <Rotiador />
            <Rodape textoCopyright='@dev-macb' linkCopyright='https://github.com/dev-macb' />
        </TemaProvider>
    );
}


export { App };
