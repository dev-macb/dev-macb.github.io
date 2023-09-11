// Importação de módulos
import './App.css';
import { Rotiador } from './routes';
import { Cabecalho, Rodape } from './components';


const App = () => {
    return (
        <div className='conteiner'>
            <Cabecalho />
            <Rotiador />
            <Rodape />
        </div>
    );
}


export { App };
