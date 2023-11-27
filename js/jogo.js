let $divs = $('div');
let $primeiroJogador = $('.primeiro-jogador');
let $avatar = $('.avatar');

$('#botao-um-jogador').click (() => {
    let $defineNumeroDeJogadores = $($divs[0]);
    $defineNumeroDeJogadores.css ('display', 'none');
    $avatar.removeClass ('ocultar');
    $primeiroJogador.removeClass ('ocultar');
});