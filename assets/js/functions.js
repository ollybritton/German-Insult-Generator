function change() {
  var currentNoun = randomAreNoun()
  var currentAdjective = randomAreAdj()
  directive.fadeOut(function() {
    directive.html('Du Bist ' + currentNoun[1]).fadeIn()
  });
  adjective.fadeOut(function() {
    adjective.html(currentAdjective).fadeIn()
  });
  noun.fadeOut(function() {
    noun.html(currentNoun[0]).fadeIn()
  });
}

$('.button-cta').click(function() {

  $('.button-cta').addClass('animated tada')
  setTimeout(function(){ $('.button-cta').removeClass('tada') }, 1000)
  change()

});
