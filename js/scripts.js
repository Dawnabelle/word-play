$(document).ready(function(){
 $("#formOne").submit(function(event) {
event.preventDefault();
   var sentence = $("#inputSentence").val();
   var wordArray = sentence.split(" "); // ["hi", "mom"]

   wordArray.forEach(function(word) {
     if (word.length >= 3) {
       $(".output").append("<li>" + word + "</li>");

        // console.log(word.length);

     }

   });





    //   var wordArray = wordArray.map(function(number) { return number.substr(3,); });
    // console.log(wordArray)

});
});
