let antButton = document.getElementById('ant')
let proButton = document.getElementById('pro')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.lista .item')
let indicador = document.querySelector('.indicadores')
let dots = indicador.querySelectorAll('ul li')
let lista = container.querySelector('.lista')

let ativo = 0
let primeiraPosicao = 0
let ultimaPosicao = itens.length - 1

proButton.onclick = () => {
    lista.style.setProperty('--calculation', 1)
    let itemVelho = container.querySelector('.lista .item.ativo')
    itemVelho.classList.remove('ativo')

    ativo = ativo + 1 > ultimaPosicao ? 0 : ativo + 1
    itens[ativo].classList.add('ativo')

    let dotsVelho = indicador.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    let dots = indicador.querySelectorAll('ul li')
    dots[ativo].classList.add('ativo')

    indicador.querySelector('.numero').innerHTML = '0' + (ativo + 1)

}

antButton.onclick = () => {
    lista.style.setProperty('--calculation', -1)
    let itemVelho = container.querySelector('.lista .item.ativo')
    itemVelho.classList.remove('ativo')

    ativo = ativo - 1 < primeiraPosicao ? ultimaPosicao : ativo - 1
    itens[ativo].classList.add('ativo')

    let dotsVelho = indicador.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    let dots = indicador.querySelectorAll('ul li')
    dots[ativo].classList.add('ativo')

    indicador.querySelector('.numero').innerHTML = '0' + (ativo + 1)
}