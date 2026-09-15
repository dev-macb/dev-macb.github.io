import React from 'react';
import imagemMiguelAlves from '../../assets/MiguelAlves.jpg';
import curriculo from '../../assets/CV-MiguelAlves.pdf';
import { PaginaLayout } from '../../app/layouts';
import './sobre.style.css';

const SobrePage: React.FC = () => {
    return (
        <PaginaLayout titulo='Sobre' subtitulo='Miguel Alves Cordeiro Braz' className='pagina-sobre' mostrarBotaoVoltar>
            <div className='sobre-conteudo'>
                <section className='sobre-apresentacao'>
                    <p>
                        Meu nome é Miguel Alves, sou desenvolvedor de software com formação 
                        em <strong>Sistemas de Informação</strong> pela Universidade Federal 
                        de Goiás (UFG). Possuo experiência sólida em desenvolvimento web, 
                        utilizando linguagens como C#, Python, JavaScript/TypeScript e Node.js.
                    </p>

                    <p>
                        Estou em constante atualização quanto às mais recentes tecnologias e 
                        práticas, visando fornecer soluções eficazes e personalizadas para cada 
                        projeto. Meu foco é estabelecer relacionamentos de longo prazo com os 
                        clientes, oferecendo um serviço de excelência e soluções eficientes.
                    </p>

                    <a className='sobre-curriculo' href={ curriculo } download='MiguelAlves-Curriculo.pdf'>
                        Baixar currículo <span aria-hidden='true'>↓</span>
                    </a>
                </section>
                
                <section className='sobre-foto'>
                    <img src={ imagemMiguelAlves } alt='Miguel Alves Cordeiro Braz' />
                </section>
            </div>
        </PaginaLayout>
    );
};

export { SobrePage };
