$(document).ready(function() {

    var owl = $('.owl-top-home');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        items: 1,
        navText: ["<img src='./img/ico-seta-esq.png'>", "<img src='./img/ico-seta-dir.png'>"]
    })

    var owl = $('.owl-videos');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        items: 4,
        navText: ["<img src='./img/ico-seta-esq.png'>", "<img src='./img/ico-seta-dir.png'>"]
    })

    $('[data-toggle="tooltip"]').tooltip()

})