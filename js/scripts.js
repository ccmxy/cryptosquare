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

var getNumRows = function(howManyChars, numCols) {
  var numRows = (howManyChars / numCols);
  if(numRows % 1 === 0){
    return numRows;
  }
  else{
    numRows = Math.floor(howManyChars / numCols);
    numRows = (numRows + 1);
    return numCols;
  }
};


$(document).ready(function() {
  $("form#get-messege").submit(function(event) {
    var words = $("input#messege").val();
    words = words.toLowerCase();
    words = words.replace(/\s+/g, '');
    words = words.replace(/&/g, '');
    words = words.replace(/!/g, '');
    words = words.replace(/[.]/g, '');
    var wordsArray = words.split("");
    var numCols = getNumCols(wordsArray.length);
    var numRows = getNumRows(wordsArray.length, numCols);
    var iterations = (numCols * numRows);
    var R = [];
    var i, idx, temparray;
      for(idx=0; idx < numCols; idx++){
        for(i = 0; i < wordsArray.length; i = i+numCols){
          temparray = wordsArray.slice(i+idx, i+idx+1);
          R.push(temparray);
        }
        R.push(" ");
      }

      R.toString();
    $(".original").text(R.join(''));

    $('#originalMessege').show();
    event.preventDefault();
  });
});






     //$(".original").text(words);

  //   $('#originalMessege').show();
