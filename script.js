let header = document.getElementById('header')
let a = document.querySelectorAll('#nav-a')
let headerStatus = 'unscrolled'
let img = document.getElementById('btn-cor')
let statusCor = ''

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    statusCor = 'claro'
    img.className = 'claro'
} else {
    statusCor = 'escuro'
    img.className = 'escuro'
}
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.className = "header";
        headerStatus = 'scrolled'

        if (img.className === 'escuro') {
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-escuro';
            });
        } else if (img.className === 'claro') {
            img.src = './img/modo_claro.png'
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-scrolled';
            });
        }
    } else {
        header.className = "scrolled";
        headerStatus = 'unscrolled'
        if (img.className === 'escuro') {
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-escuro';
            });
        } else if (img.className === 'claro') {
            img.src = './img/modo_claro_unscrolled.png'
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-claro';
            });
        }
    }
};
function trocarcor(){
    let a = document.querySelectorAll('a')
    let selecao = img.src
    if (selecao.includes('modo_escuro' || statusCor == 'escuro')){
        if (headerStatus === 'unscrolled'){
            img.src = './img/modo_claro_unscrolled.png'
            img.className = 'claro'
            statusCor = 'claro'
            invertercor(statusCor)
        }else{    
        img.src = './img/modo_claro.png'
        img.className = 'claro'
        statusCor = 'claro'
        invertercor(statusCor)
        }
    }else if (selecao.includes('modo_claro') || statusCor == 'claro') {
        img.src = './img/modo_escuro.png'
        img.className = 'escuro'
        statusCor = 'escuro'
        invertercor(statusCor)
    }

}
function invertercor(statusCor){
    let body = document.querySelector('body')
    let p = document.querySelectorAll('p')
    let h3 = document.querySelectorAll('h3')
    let projeto = document.querySelectorAll('.projeto')
    let imgproj = document.querySelectorAll('.img-proj')
    let githubbtn = document.querySelectorAll('.githubbtn')
    let sitebtn = document.querySelectorAll('.sitebtn')

    if (statusCor === 'claro'){
        if(headerStatus === 'unscrolled'){
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-claro';
            });
        }else{
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-scrolled';
            });
        }
        body.style.backgroundColor = 'var(--cor-background-claro)'
        forColor(p, 'var(--cor-texto-claro)')
        forColor(h3, 'var(--cor-texto-claro)')
        forShadow(projeto, '0px 2px 2px 2px var(--cor-sombra-claro)')
        forShadow(imgproj, '0px 2px 2px 2px var(--cor-sombra-claro)')
        forImg(githubbtn, 'url(./img/github_claro.png)')
        forImg(sitebtn, 'url(./img/site_claro.png)')
    }else if (statusCor === 'escuro'){
        if(headerStatus === 'unscrolled'){
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-escuro';
            });
        }else{
            a.forEach(function(elemento) {
                elemento.className = 'nav-a-scrolled';
            });
        }
        body.style.backgroundColor = 'var(--cor-background-escuro)'
        forColor(p, 'var(--cor-texto-escuro)')
        forColor(h3, 'var(--cor-texto-escuro)')
        forShadow(projeto, '0px 2px 2px 2px var(--cor-sombra-escuro)')
        forShadow(imgproj, '0px 2px 2px 2px var(--cor-sombra-escuro)')
        forImg(githubbtn, 'url(./img/github_logo.png)')
        forImg(sitebtn, 'url(./img/site.png)')
    }
}
function forColor(elementos, cor){
    elementos.forEach(function(elemento) {
        elemento.style.color = cor
    });
}
function forShadow(elementos, cor){
    elementos.forEach(function(elemento) {
        elemento.style.boxShadow = cor
    });
}
function forImg(elementos, img){
    elementos.forEach(function(elemento) {
        elemento.style.content = img
    });
}

invertercor(statusCor)
