function multiTable() {
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];

        for (let j = 0; j <= 10; j++) {
            x[i][j] = i * j
        }
    }
console.table(x)
}

function dynamicTable(n) {
    let tabela = [];

    for(let linha = 0; linha <= n; linha++) {
        tabela[linha] = []
        for(let coluna = 0; coluna <= n; coluna++) {
            tabela[linha][coluna] = linha * coluna
        }
    }
    console.table(tabela)
}