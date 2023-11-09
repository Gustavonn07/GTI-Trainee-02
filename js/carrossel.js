const dir = document.querySelector('.direita');
const esq = document.querySelector('.esquerda');
const header = document.getElementById('header');
let c = 1;

const atualizarClassesHeader = () => {
    if (c == 1) {
        header.classList.add('banner-1');
        header.classList.remove('banner-2');
        header.classList.remove('banner-3');
    } else if (c == 2) {
        header.classList.remove('banner-1');
        header.classList.add('banner-2');
        header.classList.remove('banner-3');
    } else {
        header.classList.remove('banner-1');
        header.classList.remove('banner-2');
        header.classList.add('banner-3');
    }
    console.log(c);
}

const clicadoDir = () => {
    c++;
    c > 3 && (c = 3);
    atualizarClassesHeader();
}

const clicadoEsq = () => {
    c--;
    c < 1 && (c = 1);
    atualizarClassesHeader();
}
