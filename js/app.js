var nav = document.getElementById('q-burger'),
    body = document.body;

nav.addEventListener('click', function (e) {
    body.className = body.className ? '' : 'with_nav';
    e.preventDefault();
});

document.getElementById('brainboy').addEventListener('click', function (event) {
    let div = document.getElementById('caixainfo')
    div.innerHTML = "<center><img src='./img/card1.png' width=\"90%\"></center>"
})

document.getElementById('heartboy').addEventListener('click', function (event) {
    let div = document.getElementById('caixainfo')
    div.innerHTML = "<center><img src='./img/card2.png' width=\"90%\"></center>"
})

document.getElementById('buddyicon').addEventListener('click', function (event) {
    let div = document.getElementById('caixainfo')
    div.innerHTML = "<center><img src='./img/card4.png' width=\"90%\"></center>"
})

document.getElementById('genderboy').addEventListener('click', function (event) {
    let div = document.getElementById('caixainfo')
    div.innerHTML = "<center><img src='./img/card3.png' width=\"90%\"></center>"
})

document.getElementById('edtitu').addEventListener('click', function (event) {
    let div = document.getElementById('caixainfo')
    div.innerHTML = "<center><img src='./img/card0.png' width=\"90%\"></center>"
})

//let div = document.getElementById('caixainfo')
//div.innerHTML = 'Voce clicou'

//brainboy.onclick = function () {
    //<div class="caixainfo">
        //<center>
            //Clicou brain
        //</center>
    //</div>
//}