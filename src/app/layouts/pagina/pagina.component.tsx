import React, { ReactNode } from 'react';
import { useTema } from '../../providers/theme/tema.hook';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { BotaoVoltarComponent, InterruptorComponent, JanelaComponent, TituloComponent } from '../../../shared/ui';
import './pagina.style.css';


interface IPaginaLayoutProps {
    children: ReactNode;
    titulo: string;
    subtitulo: string;
    className?: string;
    mostrarBotaoVoltar?: boolean;
}

const PaginaLayout: React.FC<IPaginaLayoutProps> = ({ children, titulo, subtitulo, className = '', mostrarBotaoVoltar = false }) => {
    const { alterarTema, tema } = useTema();

    return (
        <div className='pagina-aplicacao'>
            <CabecalhoComponent />
            <JanelaComponent>
                <div className='pagina-acoes'>
                    { mostrarBotaoVoltar && <BotaoVoltarComponent /> }
                    <InterruptorComponent acao={ alterarTema } marcado={ tema === 'escuro' } />
                </div>

                <article className={ `pagina-conteiner ${className}`.trim() }>
                    <TituloComponent titulo={ titulo } subtitulo={ subtitulo } />
                    { children }
                </article>
            </JanelaComponent>
            <RodapeComponent textoCopyright='@dev-macb' linkCopyright='https://github.com/dev-macb' />
        </div>
    );
};


export { PaginaLayout };
