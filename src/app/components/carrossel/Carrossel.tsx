// Importação de módulos
import './Carrossel.css';
import React, { useState } from 'react';


interface IProjeto {
    titulo: string;
    categoria: string;
    texto: string;
    link: string;
}
  
interface IDadosCarrossel {
    dados: IProjeto[];
}


const Carrossel : React.FC<IDadosCarrossel> = ({ dados }) => {
    const [indice, definirIndice] = useState(0);

    const itemPosterior = () => { definirIndice((indice + 1) % dados.length); };
    const itemAnterior = () => { definirIndice((indice - 1 + dados.length) % dados.length); };
  
    const projeto = dados[indice];


    return (
        <div className='carrossel-conteiner'>
            <div className='carrossel-conteudo'>
                <div className='carrossel-butao-voltar'>
                    <button onClick={itemAnterior} className='carrossel-link'>
                        <img width='50px' src={process.env.PUBLIC_URL + 'images/icone-seta.png'} alt='Voltar' />
                    </button>
                </div>


                <div className='carrossel-cartao-conteiner'>
                    <div className='carrossel-cartao-conteudo'>
                        <div className='carrossel-cabecalho'>
                            <h3 className='carrossel-titulo'>{projeto.titulo}</h3>
                            <span className='carrossel-categoria'>{projeto.categoria}</span>
                        </div>
                        
                        <p className='carrossel-texto'>{projeto.texto}</p>
                        <a href={projeto.link} target='_blank' rel='noopener noreferrer'>
                            <button className='carrossel-butao'>Visitar</button>
                        </a>
                    </div>
                </div>


                <div className='carrossel-butao-avancar'>
                    <button onClick={itemPosterior} className='carrossel-link'>
                        <img width='50px' src={process.env.PUBLIC_URL + 'images/icone-seta.png'} alt='Voltar' />
                    </button>
                </div> 
            </div>
            <div className='carrossel-paginas'>
                <br />
            </div>
        </div>
    );
}

export { Carrossel };
