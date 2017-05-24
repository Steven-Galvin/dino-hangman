Dino = require('./../js/dino-game.js').dinoModule;
var shuffle = require('shuffle-array');

$(document).ready(function() {
   var dinoArray = "";

  $('#get-dinos').click(function(event) {
    event.preventDefault();
    var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=5'),
        fillContainer = function(d) {
          var dinos = (d).trim().replace(".", "").split(" ");
          dinoArray = dinos;
        };

    getDinos.then(fillContainer);
    var dinosShuffle = shuffle(dinoArray);
    var dino = (dinosShuffle[0]);
    dino = dino.split("")
    $('#some-awesome-container').text(dino);
    console.log(dinosShuffle);
  });
});
