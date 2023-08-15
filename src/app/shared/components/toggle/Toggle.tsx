// Importação de módulos
import './Toggle.css'


const Toggle = () => {
    return (
        <label className='btn-toggle'>
            <input className='input-toggle' type="checkbox" />
            <span className='interruptor'/>
        </label>
    );
};


export { Toggle };
