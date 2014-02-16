function coinGet() {
  var $coinBlock = $('.coin-block');
  $('img', $coinBlock).attr('src', 'data/img/coinget.gif');
  var coin = parseInt($('#coin_num').html(), 10);
  coin++;
  $('#coin_num').html(coin);

  var score = parseInt($('#score').html(), 10);
  score = score + 200;
  $('#score').html(score);

}
function grow() {
  var $mamenokiBlock = $('.mamenoki-block');
  $('img', $mamenokiBlock).attr('src', 'data/img/mamenoki.gif');
}
