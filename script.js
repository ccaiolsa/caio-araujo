export function mudarEstilo1() {
    const botao = document.getElementById("circulo1")
    botao.addEventListener("click", () => {
        const root = document.documentElement
        root.style.setProperty('--cor-fundo', 'rgb(35, 16, 64)')
        root.style.setProperty('--cor-secundaria', 'rgb(240, 2, 141)')
        root.style.setProperty('--cor-destaque-1', 'rgb(37, 169, 130)')
        root.style.setProperty('--cor-destaque-2', 'rgb(31, 224, 224)')
        root.style.setProperty('--cor-sombra', 'rgb(255, 107, 222)')
        root.style.setProperty('--cor-texto-escuro', 'rgba(0, 0, 0, 0.25)')
        root.style.setProperty('--cor-texto-claro', '#ffff')
        root.style.setProperty('--sombra-h1', '0 0 30px var(--cor-destaque-2), 4px 4px 0 var(--cor-sombra)')
        root.style.setProperty('--sombra-h2', '0 0 10px var(--cor-destaque-1)')
        root.style.setProperty('--sombra-texto', '0 0 10px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-1', '0 0 36px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-2', '0 0px 36px var(--cor-destaque-1)')

    })
};
export function mudarEstilo2() {
    const botao = document.getElementById("circulo2")
    botao.addEventListener("click", () => {
        const root = document.documentElement
        root.style.setProperty('--cor-fundo', 'rgb(21, 12, 78)')
        root.style.setProperty('--cor-secundaria', 'rgb(242, 75, 75)')
        root.style.setProperty('--cor-destaque-1', 'rgb(55, 17, 191)')
        root.style.setProperty('--cor-destaque-2', 'rgb(158, 44, 240)')
        root.style.setProperty('--cor-sombra', 'rgb(247, 105, 105)')
        root.style.setProperty('--cor-texto-escuro', 'rgba(0, 0, 0, 0.25)')
        root.style.setProperty('--cor-texto-claro', '#ffff')
        root.style.setProperty('--sombra-h1', '0 0 30px var(--cor-destaque-2), 4px 4px 0 var(--cor-sombra)')
        root.style.setProperty('--sombra-h2', '0 0 10px var(--cor-destaque-1)')
        root.style.setProperty('--sombra-texto', '0 0 10px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-1', '0 0 36px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-2', '0 0px 36px var(--cor-destaque-1)')

    })
};
export function mudarEstilo3() {
    const botao = document.getElementById("circulo3")
    botao.addEventListener("click", () => {
        const root = document.documentElement
        root.style.setProperty('--cor-fundo', 'rgb(91, 2, 2)')
        root.style.setProperty('--cor-secundaria', 'rgb(107, 167, 191)')
        root.style.setProperty('--cor-destaque-1', 'rgb(242, 240, 235)')
        root.style.setProperty('--cor-destaque-2', 'rgb(242, 177, 56)')
        root.style.setProperty('--cor-sombra', 'rgb(242, 90, 56)')
        root.style.setProperty('--cor-texto-escuro', 'rgba(0, 0, 0, 0.25)')
        root.style.setProperty('--cor-texto-claro', '#ffff')
        root.style.setProperty('--sombra-h1', '0 0 30px var(--cor-destaque-1), 4px 4px 0 var(--cor-sombra)')
        root.style.setProperty('--sombra-h2', '0 0 10px var(--cor-destaque-1)')
        root.style.setProperty('--sombra-texto', '0 0 10px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-1', '0 0 36px var(--cor-secundaria)')
        root.style.setProperty('--sombra-bloco-2', '0 0px 36px var(--cor-destaque-1)')

    })
};

