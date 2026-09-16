export type Grid = boolean[][];

export const GRID_LINHAS = 32;
export const GRID_COLUNAS = 64;

export const criarGrid = (linhas = GRID_LINHAS, colunas = GRID_COLUNAS): Grid => (
    Array.from({ length: linhas }, () => Array.from({ length: colunas }, () => false))
);

export const contarCelulasVivas = (grid: Grid): number => (
    grid.reduce((total, linha) => total + linha.filter(Boolean).length, 0)
);

export const proximaGeracao = (grid: Grid, bordasConectadas = true): Grid => {
    const linhas = grid.length;
    const colunas = grid[0]?.length ?? 0;

    return grid.map((linha, linhaAtual) => linha.map((viva, colunaAtual) => {
        let vizinhasVivas = 0;

        for (let deslocamentoLinha = -1; deslocamentoLinha <= 1; deslocamentoLinha += 1) {
            for (let deslocamentoColuna = -1; deslocamentoColuna <= 1; deslocamentoColuna += 1) {
                if (deslocamentoLinha === 0 && deslocamentoColuna === 0) continue;

                let linhaVizinha = linhaAtual + deslocamentoLinha;
                let colunaVizinha = colunaAtual + deslocamentoColuna;

                if (bordasConectadas) {
                    linhaVizinha = (linhaVizinha + linhas) % linhas;
                    colunaVizinha = (colunaVizinha + colunas) % colunas;
                }

                if (linhaVizinha >= 0 && linhaVizinha < linhas && colunaVizinha >= 0 && colunaVizinha < colunas && grid[linhaVizinha][colunaVizinha]) {
                    vizinhasVivas += 1;
                }
            }
        }

        return viva ? vizinhasVivas === 2 || vizinhasVivas === 3 : vizinhasVivas === 3;
    }));
};

export const alternarCelula = (grid: Grid, linha: number, coluna: number, viva?: boolean): Grid => (
    grid.map((celulas, indiceLinha) => (
        indiceLinha === linha
            ? celulas.map((celula, indiceColuna) => (indiceColuna === coluna ? viva ?? !celula : celula))
            : celulas
    ))
);

export const gerarGridAleatorio = (linhas = GRID_LINHAS, colunas = GRID_COLUNAS, chanceDeVida = 0.28): Grid => (
    Array.from({ length: linhas }, () => Array.from({ length: colunas }, () => Math.random() < chanceDeVida))
);
