Dino = require('./../js/dino-game.js').dinoModule;
var shuffle = require('shuffle-array');

$(document).ready(function() {
   var dinoArray = "";
   var dino = [];
   var letArray = [];

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
    dino = dino.split("");
    $('#get-dinos').hide();
    $('#letter-input').show();
    dino.forEach(function(i) {
      $('#some-awesome-container').append( i );

    });
  });

  $('#input-button').click(function(e){
    e.preventDefault();
    var letter = $('#guess-letter').val();
    letArray.push(letter);
    // dino.forEach(function(i) {
    //   $('#some-awesome-container').text(i);
    // });

  });
});
