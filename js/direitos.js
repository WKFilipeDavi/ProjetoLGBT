
/*
let page1Base = document.getElementById('pag1');
page1Base.style.zIndex = 5;

let page3Base = document.getElementById('pag3');
page3Base.style.zIndex = 5;

// página 2 Animações ----------------------------------------------------

//pegando colunas para saber posição do usuário
let coluna1 = document.querySelector('#pag2 .fixo');
let coluna2 = document.querySelector('#pag2 .fixo2');
let coluna3 = document.querySelector('#pag2 .fixo3');

//pegando objetos/ divs que vou reposicionar;
let objeto1 = document.getElementById('pag2Objeto1');
objeto1.style.zIndex = 2;

let objeto2 = document.getElementById('pag2Objeto2');
objeto2.style.zIndex = 1;

let objeto3 = document.getElementById('pag2Objeto3');

//pegando tamanho dos objetos e valores
let tamanhoObj1 = objeto1.offsetWidth;
let metadeObj1 = objeto1.offsetWidth * (1 / 2);

let tamanhoObj2 = objeto2.offsetWidth;
let metadeObj2 = objeto2.offsetWidth * (1 / 2);

let tamanhoObj3 = objeto3.offsetWidth;
let metadeObj3 = objeto3.offsetWidth * (1 / 2);


//escondendo objetos com base nos tamanhos
objeto1.style.transform = 'translateX(' + -(tamanhoObj1) + 'px)';
objeto2.style.transform = 'translateX(' + (tamanhoObj2) + 'px)';
objeto3.style.transform = 'translateX(' + -(tamanhoObj3) + 'px)';

//funções do mouse
let pag2AddBloco1 = true;
let pag2AddBloco2 = true;


coluna1.addEventListener('mouseover', function () {
    console.log('mouse passou no 1');
    objeto1.style.transform = 'translateX(' + -(tamanhoObj1) + 'px)';
    objeto2.style.transform = 'translateX(' + (tamanhoObj2) + 'px)';
    objeto3.style.transform = 'translateX(' + -(tamanhoObj3) + 'px)';
    pag2AddBloco1 = true;
    pag2AddBloco2 = true;
});




coluna2.addEventListener('mouseout', function () {
    console.log('mouse passou no 2');
    if (pag2AddBloco1 == true) {
        objeto1.style.transform += "translateX(" + (metadeObj1) + "px)";
        objeto2.style.transform += "translateX(" + (-metadeObj2) + "px)";
        objeto3.style.transform += "translateX(" + (metadeObj3) + "px)";
        pag2AddBloco1 = !pag2AddBloco1;
        //      console.log(addbloco1);
    }

    else if (pag2AddBloco1 == false && pag2AddBloco2 == false) {
        objeto1.style.transform = "translateX(" + (-metadeObj1) + "px)";
        objeto2.style.transform = "translateX(" + (metadeObj2) + "px)";
        objeto3.style.transform = "translateX(" + (-metadeObj3) + "px)";
        pag2AddBloco2 = true;
    }


});

coluna3.addEventListener('mouseover', function () {
    console.log('mouse passou no 3');
    if (pag2AddBloco2 == true) {
        objeto1.style.transform += "translateX(" + (metadeObj1) + "px)";
        objeto2.style.transform += "translateX(" + (-metadeObj2) + "px)";
        objeto3.style.transform += "translateX(" + (metadeObj3) + "px)";
        pag2AddBloco2 = !pag2AddBloco2;

    }
});

*/


/*$(function () {
    var waypoint = new Waypoint({
        element: document.getElementById('pag4'),
        handler: function (direction) {
            console.log("aeee")
        },
        context: document.getElementById('emb'),
        horizontal: true,
        offset: 'bottom-in-view'
    })
}); */

/*var waypoint = new Waypoint({
    element: document.getElementById('fixo'),
    handler: function (direction) {
        console.log('waypoint');
    },
    context: document.getElementById('emb'),
    horizontal: true
})*/
