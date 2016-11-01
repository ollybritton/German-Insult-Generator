function change() {
  var currentNoun = randomAreNoun()
  var currentAdjective = randomAreAdj()
  directiveText.fadeOut(function() {
    directiveText.html('Du bist ' + currentNoun[1]).fadeIn()
  });
  adjectiveText.fadeOut(function() {
    adjectiveText.html(currentAdjective).fadeIn()
  });
  nounText.fadeOut(function() {
    nounText.html(currentNoun[0]+".").fadeIn()
  });
}

$('.button-cta').click(function() {

  $('.button-cta').addClass('animated tada')
  setTimeout(function(){ $('.button-cta').removeClass('tada') }, 1000)
  change()

});
