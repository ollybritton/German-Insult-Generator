var directive = $('.directive'),
    adjective = $('.adjective'),
    noun = $('.noun')

var genders = [
  "ein",
  "eine",
  "einen"
]

var directives = [
  "Du Bist ",
  "Du Hast "
]

var areAdjectives = [
  "Doof",
  "Dick",
  "Schlechtgelaunt",
  "Jähzornig",
  "Gemein",
  "Faul",
  "Eitel",
  "Gerissen",
  "Ungeduldig",
  "Traurig",
  "Veraltet",
  "Böse",
  "Schrecklich",
  "Hässlich",
  "Blass",
  "Gräuel"
]

var areNouns = [
  ["Schwein", "Ein"], // das
  ["Mutter", "Eine"], // die
  ["Walfisch", "Eine"], // die
  ["Fisch", "Einen"], // der
  ["Hund", "Einen"], // der
  ["Pinguin", "Einen"], // der
  ["Bär", "Einen"], // der
  ["Affe", "Einen"], // der
  ["Gorilla", "Einen"], // der
  ["Hautausschlag", "Einen"] // der
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
