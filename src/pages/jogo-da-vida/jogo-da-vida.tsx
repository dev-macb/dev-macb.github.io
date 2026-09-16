import React, { FC, PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RodapeComponent } from '../../app/layouts/rodape/rodape.component';
import {
    alternarCelula,
    contarCelulasVivas,
    criarGrid,
    gerarGridAleatorio,
    GRID_COLUNAS,
    GRID_LINHAS,
    proximaGeracao,
    type Grid,
} from './gameHelpers';
import './jogo-da-vida.style.css';

const VELOCIDADE_INICIAL = 180;

const Icone: FC<{ nome: 'play' | 'pause' | 'step' | 'clear' | 'random' | 'info' | 'speed'; }> = ({ nome }) => {
    const icones = { play: '▶', pause: 'Ⅱ', step: '▸|', clear: '×', random: '✦', info: '?', speed: '↯' };
    return <span aria-hidden='true'>{icones[nome]}</span>;
};

const JogoDaVida: FC = () => {
    const [grid, definirGrid] = useState<Grid>(() => criarGrid());
    const [emExecucao, definirEmExecucao] = useState(false);
    const [velocidade, definirVelocidade] = useState(VELOCIDADE_INICIAL);
    const [geracao, definirGeracao] = useState(0);
    const [mostrarAjuda, definirMostrarAjuda] = useState(false);
    const animacaoRef = useRef<number>();
    const ultimaAtualizacaoRef = useRef(0);
    const desenhandoRef = useRef(false);
    const estadoDesenhoRef = useRef(true);
    const ultimaCelulaRef = useRef('');

    const avancarGeracao = useCallback(() => {
        definirGrid((gridAtual) => proximaGeracao(gridAtual));
        definirGeracao((valor) => valor + 1);
    }, []);

    useEffect(() => {
        if (!emExecucao) return undefined;

        const animar = (tempo: number) => {
            if (tempo - ultimaAtualizacaoRef.current >= velocidade) {
                avancarGeracao();
                ultimaAtualizacaoRef.current = tempo;
            }
            animacaoRef.current = requestAnimationFrame(animar);
        };

        animacaoRef.current = requestAnimationFrame(animar);
        return () => {
            if (animacaoRef.current) cancelAnimationFrame(animacaoRef.current);
        };
    }, [avancarGeracao, emExecucao, velocidade]);

    const limpar = useCallback(() => {
        definirEmExecucao(false);
        definirGrid(criarGrid());
        definirGeracao(0);
    }, []);

    const aleatorizar = useCallback(() => {
        definirEmExecucao(false);
        definirGrid(gerarGridAleatorio());
        definirGeracao(0);
    }, []);

    const alternarVelocidade = useCallback(() => {
        const velocidades = [80, 180, 320, 520];
        definirVelocidade((valorAtual) => velocidades[(velocidades.indexOf(valorAtual) + 1) % velocidades.length]);
    }, []);

    useEffect(() => {
        const aoPressionarTecla = (evento: KeyboardEvent) => {
            if ((evento.target as HTMLElement).tagName === 'INPUT') return;
            if (evento.code === 'Space') { evento.preventDefault(); definirEmExecucao((ativo) => !ativo); }
            if (evento.key.toLowerCase() === 'n') avancarGeracao();
            if (evento.key.toLowerCase() === 'c') limpar();
            if (evento.key.toLowerCase() === 'r') aleatorizar();
            if (evento.key === 'Escape') definirMostrarAjuda(false);
        };

        window.addEventListener('keydown', aoPressionarTecla);
        return () => window.removeEventListener('keydown', aoPressionarTecla);
    }, [aleatorizar, avancarGeracao, limpar]);

    const pintarCelula = useCallback((linha: number, coluna: number, viva: boolean) => {
        definirGrid((gridAtual) => alternarCelula(gridAtual, linha, coluna, viva));
    }, []);

    const iniciarDesenho = (evento: PointerEvent<HTMLButtonElement>, linha: number, coluna: number, viva: boolean) => {
        evento.currentTarget.setPointerCapture(evento.pointerId);
        desenhandoRef.current = true;
        estadoDesenhoRef.current = !viva;
        ultimaCelulaRef.current = `${linha}-${coluna}`;
        pintarCelula(linha, coluna, !viva);
    };

    const continuarDesenho = (evento: PointerEvent<HTMLDivElement>) => {
        if (!desenhandoRef.current) return;

        const celula = document.elementFromPoint(evento.clientX, evento.clientY) as HTMLElement | null;
        const linha = Number(celula?.dataset.linha);
        const coluna = Number(celula?.dataset.coluna);
        const chave = `${linha}-${coluna}`;

        if (!Number.isNaN(linha) && !Number.isNaN(coluna) && ultimaCelulaRef.current !== chave) {
            ultimaCelulaRef.current = chave;
            pintarCelula(linha, coluna, estadoDesenhoRef.current);
        }
    };

    const pararDesenho = () => { desenhandoRef.current = false; ultimaCelulaRef.current = ''; };

    return (
        <div className='jogo-da-vida-pagina'>
            <header className='jogo-da-vida-topo'>
                <p>Jogo da Vida <span>· Conway</span></p>
                <Link className='jogo-da-vida-marca' to='/' aria-label='Voltar à página inicial' />
                <div className='jogo-da-vida-estatisticas' aria-label='Estatísticas da simulação'>
                    <div><span>GERAÇÃO</span><strong>{geracao}</strong></div>
                    <div><span>VIVAS</span><strong>{contarCelulasVivas(grid)}</strong></div>
                </div>
            </header>
            <main className='jogo-da-vida-janela'>
                <aside className='jogo-da-vida-menu' aria-label='Controles do Jogo da Vida'>
                    <div className='jogo-da-vida-menu-grupo'>
                        <button className='jogo-da-vida-botao-icone destaque' type='button' onClick={() => definirEmExecucao((ativo) => !ativo)} aria-label={emExecucao ? 'Pausar simulação' : 'Iniciar simulação'} title={emExecucao ? 'Pausar (Espaço)' : 'Iniciar (Espaço)'}><Icone nome={emExecucao ? 'pause' : 'play'} /></button>
                        <button className='jogo-da-vida-botao-icone' type='button' onClick={avancarGeracao} aria-label='Avançar uma geração' title='Próximo passo (N)'><Icone nome='step' /></button>
                        <button className='jogo-da-vida-botao-icone' type='button' onClick={aleatorizar} aria-label='Gerar estado aleatório' title='Aleatorizar (R)'><Icone nome='random' /></button>
                        <button className='jogo-da-vida-botao-icone' type='button' onClick={limpar} aria-label='Limpar grid' title='Limpar (C)'><Icone nome='clear' /></button>
                        <button className='jogo-da-vida-botao-icone' type='button' onClick={alternarVelocidade} aria-label={`Alternar velocidade: ${velocidade} milissegundos`} title={`Velocidade: ${velocidade} ms`}><Icone nome='speed' /></button>
                    </div>
                    <div className='jogo-da-vida-menu-grupo jogo-da-vida-menu-rodape'>
                        <button className={`jogo-da-vida-botao-icone ${mostrarAjuda ? 'ativo' : ''}`} type='button' onClick={() => definirMostrarAjuda((ativo) => !ativo)} aria-label='Mostrar regras e atalhos' title='Regras e atalhos'><Icone nome='info' /></button>
                    </div>
                </aside>

                <section className='jogo-da-vida' onPointerUp={pararDesenho} onPointerLeave={pararDesenho}>
                    <section className='jogo-da-vida-painel'>
                        <div className='jogo-da-vida-tabuleiro-wrap'>
                            <div className='jogo-da-vida-tabuleiro' role='grid' aria-label={`${GRID_LINHAS} linhas por ${GRID_COLUNAS} colunas`} style={{ '--linhas': GRID_LINHAS, '--colunas': GRID_COLUNAS } as React.CSSProperties} onPointerMove={continuarDesenho}>
                                {grid.map((linha, indiceLinha) => linha.map((viva, indiceColuna) => (
                                    <button type='button' role='gridcell' className={`jogo-da-vida-celula ${viva ? 'viva' : ''}`} aria-label={`Célula ${indiceLinha + 1}, ${indiceColuna + 1}: ${viva ? 'viva' : 'morta'}`} aria-pressed={viva} key={`${indiceLinha}-${indiceColuna}`} data-linha={indiceLinha} data-coluna={indiceColuna} onPointerDown={(evento) => iniciarDesenho(evento, indiceLinha, indiceColuna, viva)} />
                                )))}
                            </div>
                        </div>
                    </section>
                </section>

                {mostrarAjuda && (
                    <section className='jogo-da-vida-ajuda' aria-live='polite'>
                        <button type='button' onClick={() => definirMostrarAjuda(false)} aria-label='Fechar ajuda'>×</button>
                        <p className='jogo-da-vida-sobretitulo'>REGRAS</p>
                        <h2>A vida se reorganiza a cada geração.</h2>
                        <p className='jogo-da-vida-ajuda-introducao'>O Jogo da Vida é um autômato celular: não há jogador ou objetivo final. A evolução depende apenas do estado inicial criado no tabuleiro.</p>
                        <ul>
                            <li>Uma célula viva sobrevive com 2 ou 3 vizinhas.</li>
                            <li>Uma célula morta nasce com exatamente 3 vizinhas.</li>
                            <li>Nos demais casos, a célula morre ou permanece morta.</li>
                        </ul>
                        <div className='jogo-da-vida-ajuda-interacao'>
                            <h3>Como interagir</h3>
                            <p>Clique e arraste sobre as células para desenhar ou apagar uma área. Use <kbd>Espaço</kbd> para reproduzir/pausar, <kbd>N</kbd> para avançar, <kbd>R</kbd> para aleatorizar e <kbd>C</kbd> para limpar.</p>
                        </div>
                    </section>
                )}
            </main>
            <RodapeComponent textoCopyright='@dev-macb' linkCopyright='https://github.com/dev-macb' />
        </div>
    );
};

export { JogoDaVida };
