Dino = require('./../js/dino-game.js').dinoModule;
var shuffle = require('shuffle-array');

$(document).ready(function() {
   var dinoArray = "";
   var dino = [];
   var letInput = [];
   var letLoser = "";

  $('#get-dinos').click(function(event) {
    event.preventDefault();
    var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=5'),
        fillContainer = function(d) {
          var dinos = (d).trim().replace(".", "").split(" ");
          dinoArray = dinos;
        };

    getDinos.then(fillContainer);
    var dinosShuffle = shuffle(dinoArray);
    dino = (dinosShuffle[0]);
    // dino = dino.split("");
    $('#get-dinos').hide();
    $('#letter-input').show();
    $('#some-awesome-dino').text(dino);
  });

  $('#input-button').click(function(e){
    e.preventDefault();
    var letter = $('#guess-letter').val();
    letInput.push(letter);
    letInput.forEach(function(char) {
      if (dino.includes(char) === true) {
        var matchedChar = letInput.pop(char)
        $('#some-awesome-letters').append(matchedChar);
      } else {
          letLoser += char
        $('#some-loser-letters').text(letLoser);
      };
    });
    console.log(letInput);
    console.log(dino);
  });
});
