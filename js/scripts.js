var getNumCols = function(howManyChars) {
  var numCols = Math.sqrt(howManyChars);
  //Case is perfect square:
  if(numCols % 1 === 0){
    return numCols;
  }
  //Case it is not a perfect square:
  else{
    numCols = Math.floor(Math.sqrt(howManyChars));
    numCols = (numCols + 1);
    return numCols;
  }
};


$(document).ready(function() {
  $("form#get-messege").submit(function(event) {
    var words = $("input#messege").val();
    //var wordLength = words.length;
    var wordsArray = words.split("");
    var numCols = getNumCols(wordsArray.length);
    var chunksArray;
    var i, j, x, temparray, chunk = numCols;
    for (i = 0, j = wordsArray.length; i < j; i += chunk) {
        temparray = wordsArray.slice(i, i + chunk);
        chunksArray = temparray;
        $(".original").text(temparray);

        $('#originalMessege').show();
    }




     //$(".original").text(words);

  //   $('#originalMessege').show();

   event.preventDefault();
  });
});
