import React from 'react';
import { PaginaLayout } from '../../app/layouts';
import { Carrossel } from '../../shared/ui';
import './portifolio.style.css';

const projetos = [
    {
        titulo: 'MacB Theme',
        descricao: 'MacB é um tema minimalista para o Visual Studio Code, focado na legibilidade do código e na personalização do ambiente de desenvolvimento.',
        tags: ['extensão', 'tema', 'vs-code'],
        link: 'https://marketplace.visualstudio.com/items?itemName=dev-macb.macb-vscode-theme',
    },
    {
        titulo: 'Ambivar',
        descricao: 'Ambivar é um pacote PHP que facilita o gerenciamento de variáveis de ambiente em arquivos .env, garantindo segurança e modularidade.',
        tags: ['pacote', 'env'],
        link: 'https://packagist.org/packages/dev-macb/ambivar',
    },
    {
        titulo: 'Braz',
        descricao: 'Braz é uma ferramenta CLI para geração e validação de dados randômicos, como CPF e CNPJ, com foco em automação de testes.',
        tags: ['pacote', 'cli'],
        link: 'https://pypi.org/project/braz/',
    },
    {
        titulo: 'Poderoso',
        descricao: 'Poderoso é um pacote PHP que abstrai operações CRUD com bancos de dados, facilitando a implementação de conexões e consultas.',
        tags: ['pacote', 'framework'],
        link: 'https://packagist.org/packages/dev-macb/poderoso',
    },
];

const PortifolioPage: React.FC = () => {
    return (
        <PaginaLayout titulo='Portfólio' subtitulo='Projetos realizados' className='pagina-portifolio' mostrarBotaoVoltar>
            <Carrossel itens={ projetos } />
        </PaginaLayout>
    );
};

export { PortifolioPage };
