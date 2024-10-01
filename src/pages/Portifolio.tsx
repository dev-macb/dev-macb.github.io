import React from 'react';

import { ButaoVoltar } from '../components/ButaoVoltar/ButaoVoltar';
import { Caixa } from '../components/Caixa/Caixa';
import { Interruptor } from '../components/Interruptor/Interruptor';
import { Pagina } from '../components/Pagina/Pagina';
import { usarTema } from '../contexts/TemaContext';
import { Carrossel } from '../components/Carrossel/Carrossel';

const listaProjetos = [
    {
      titulo: "MacB Theme",
      descricao: "O MacB é um tema minimalista que não só oferece uma estética limpa e moderna, mas também proporciona facilidade de personalização e realce de sintaxe avançado. Projetado para elevar a produtividade e a qualidade do código, o MacB é a escolha ideal para desenvolvedores que buscam uma experiência de desenvolvimento superior no Visual Studio Code.",
      tags: ['tema', 'vs-code']
    },
    {
      titulo: "Ambivar",
      descricao: "O Ambivar é um pacote em PHP que tem como objetivo facilitar a gestão de variáveis de ambiente em projetos. Esse pacote permite carregar essas variáveis através de um arquivo .env, que é lido automaticamente ou especificando o diretório do arquivo.",
      tags: ['pacote']
    },
    {
      titulo: "Braz",
      descricao: "O Braz é uma aplicação que disponibiliza diversas funcionalidades com o intuito de auxiliar os desenvolvedores nos projetos que necessitam da geração de dados randômicos válidos dos principais documentos pessoais do Brasil, bem como sua validação.",
      tags: ['pacote', 'cli']
    },
    {
        titulo: "Poderoso",
        descricao: "O Poderoso é um pacote PHP que oferece uma abstração de banco de dados completa e fácil de usar. Com funções simples para configurar e conectar, é possível criar, ler, atualizar e excluir registros do banco de dados em poucos minutos.",
        tags: ['']
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
