// Importação de módulos
import './Voltar.css'


const Voltar = () => {
    return (
        <a className='butao-voltar' href='/inicio'>
            <img src={process.env.PUBLIC_URL + 'images/icone-voltar.png'} alt="cubo-tema-claro" />
            <h3>Voltar</h3>
        </a>
    );
};


export { Voltar };
