import React from 'react';

import { ButaoVoltar } from '../components/ButaoVoltar/ButaoVoltar';
import { Caixa } from '../components/Caixa/Caixa';
import { Interruptor } from '../components/Interruptor/Interruptor';
import { Pagina } from '../components/Pagina/Pagina';
import { usarTema } from '../contexts/TemaContext';
import { Carrossel } from '../components/Carrossel/Carrossel';


const listaProjetos = [
    {
      titulo: 'MacB Theme',
      descricao: 'MacB é um tema minimalista para o Visual Studio Code, focado na legibilidade do código e na personalização do ambiente de desenvolvimento.',
      tags: ['extenção', 'tema', 'vs-code'],
      link: 'https://marketplace.visualstudio.com/items?itemName=dev-macb.macb-vscode-theme'
    },
    {
      titulo: 'Ambivar',
      descricao: 'Ambivar é um pacote PHP que facilita o gerenciamento de variáveis de ambiente em arquivos `.env`, garantindo segurança e modularidade.',
      tags: ['pacote', 'env'],
      link: 'https://packagist.org/packages/dev-macb/ambivar'
    },
    {
      titulo: 'Braz',
      descricao: 'Braz é uma ferramenta CLI para geração e validação de dados randômicos, como CPF e CNPJ, com foco em automação de testes.',
      tags: ['pacote', 'cli'],
      link: 'https://pypi.org/project/braz/'
    },
    {
      titulo: 'Poderoso',
      descricao: 'Poderoso é um pacote PHP que abstrai operações CRUD com bancos de dados, facilitando a implementação de conexões e consultas.',
      tags: ['pacote', 'framework'],
      link: 'https://packagist.org/packages/dev-macb/poderoso'
    }
];


const Portifolio: React.FC = () => {
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
                        <h1>Portifólio</h1>
                        <h2>Projetos realizados</h2>
                    </div>
                </Caixa.Horizontal>
                
                <Caixa.Vertical style={{ width: '80%', height: '100%' }}>
                    <Carrossel itens={ listaProjetos } />
                </Caixa.Vertical>
            </Caixa.Vertical>
        </Pagina>
    );
}


export { Portifolio };
