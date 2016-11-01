var directive = $('.directive'),
    adjective = $('.adjective'),
    noun = $('.noun'),
    directiveText = $('.directive-text'),
    adjectiveText = $('.adjective-text'),
    nounText = $('.noun-text')

var genders = [
  "ein",
  "eine",
  "einen"
]

var directives = [
  "Du bist ",
  "Du hast "
]

var areAdjectives = [
  "doof",
  "dick",
  "schlechtgelaunt",
  "jähzornig",
  "gemein",
  "faul",
  "eitel",
  "gerissen",
  "ungeduldig",
  "traurig",
  "veraltet",
  "böse",
  "schrecklich",
  "hässlich",
  "blass",
  "gräuel"
]

var areNouns = [
  ["Schwein", "ein"], // das
  ["Mutter", "eine"], // die
  ["Walfisch", "eine"], // die
  ["Fisch", "einen"], // der
  ["Hund", "einen"], // der
  ["Pinguin", "einen"], // der
  ["Bär", "einen"], // der
  ["Affe", "einen"], // der
  ["Gorilla", "einen"], // der
  ["Hautausschlag", "einen"], // der
  ["Elefant", "einen"],
  ["Hamster", "einen"],
  ["Vogel","einen"],
  ["Goldfisch", "einen"],
  ["Katze", "eine"],
  ["Spinne", "eine"],
  ["Schlange", "eine"],
  ["Maus", "eine"],
  ["Schildkröte", "eine"],
  ["Kuh", "eine"],
  ["Meerschweinchen", "ein"],
  ["Kaninehen", "ein"],
  ["Pfelt", "ein"],
  ["Huhn", "ein"]
]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomAreAdj() {
  var randomInt = randomNumber(0, areAdjectives.length)
  return areAdjectives[randomInt]
}

function randomAreNoun() {
  var randomInt = randomNumber(0, areNouns.length)
  return [ areNouns[randomInt][0], areNouns[randomInt][1] ]
}
