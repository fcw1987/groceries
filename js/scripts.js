$(document).ready(function(){



    $("#groceries form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4"];
    var input = blanks.map(function(blank) {
      var userInput = $("input#" + blank).val();

        return userInput
    });
    input.sort();
    var j = 1;
    input.forEach(function(blank) {
      $('#finalItem' + j).text(blank);
        j += 1;
    });
  $('.jumbotron').hide();
  $('.well').show();
event.preventDefault();
});
});
