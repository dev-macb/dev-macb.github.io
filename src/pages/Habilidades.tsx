import React from 'react';

import { ButaoVoltar } from '../components/ButaoVoltar/ButaoVoltar';
import { Caixa } from '../components/Caixa/Caixa';
import { Interruptor } from '../components/Interruptor/Interruptor';
import { Pagina } from '../components/Pagina/Pagina';
import { usarTema } from '../contexts/TemaContext';
import { Cartao } from '../components/Cartao/Cartao';

const Habilidades: React.FC = () => {
    const { alterarTema } = usarTema();

    return (
        <Pagina>
            <Caixa.Horizontal style={{ height: '10%' }}>
                <ButaoVoltar />
                <Interruptor acao={ alterarTema } />
            </Caixa.Horizontal>
            
            <Caixa.Vertical style={{ height: '90%' }}>
                <Caixa.Horizontal style={{ height: 'auto' }}>
                    <div>
                        <h1>Habilidade</h1>
                        <h2>Tecnologias dominadas</h2>
                    </div>
                </Caixa.Horizontal>
                
                <Caixa.Horizontal style={{ width: '80%', justifyContent: 'center' }}>
                    <Caixa.Vertical>
                        <Caixa.Horizontal>
                            <Cartao titulo='C#'>0</Cartao>
                            <Cartao titulo='Python' >1</Cartao>
                            <Cartao titulo='JavaScript'>2</Cartao>
                            <Cartao titulo='Typescript'>3</Cartao>
                            <Cartao titulo='Node.js'>4</Cartao>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal>
                            <Cartao titulo='React.js'>5</Cartao>
                            <Cartao titulo='UI5'>6</Cartao>
                            <Cartao titulo='PHP'>7</Cartao>
                            <Cartao titulo='Git'>8</Cartao>
                            <Cartao titulo='Figma'>9</Cartao>
                        </Caixa.Horizontal>
                    </Caixa.Vertical>
                </Caixa.Horizontal>
            </Caixa.Vertical>
        </Pagina>
    );
}


export { Habilidades };
