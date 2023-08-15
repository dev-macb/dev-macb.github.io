// Importação de módulos
import { Rotiador } from './routes';
import { Cabecalho, Rodape } from './shared/components';


const App = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Cabecalho />
            <Rotiador />
            <Rodape />
        </div>
    );
}


export { App };
