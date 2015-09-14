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
    //var wordLength = words.length;
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
      }


    $(".original").text(R);

    $('#originalMessege').show();
    event.preventDefault();
  });
});

//(+3, +3)
/*
    var temparray = wordsArray.slice(0, 1);
    R.push(temparray);
    var temparray = wordsArray.slice(3, 4);
    R.push(temparray);
    var temparray = wordsArray.slice(6, 7);
    R.push(temparray);

    var temparray = wordsArray.slice(1, 2);
    R.push(temparray);
    var temparray = wordsArray.slice(4, 5);
    R.push(temparray);
    var temparray = wordsArray.slice(7, 8);

    R.push(temparray);
    var temparray = wordsArray.slice(2, 3);
    R.push(temparray);
    var temparray = wordsArray.slice(5, 6);
    R.push(temparray);
    var temparray = wordsArray.slice(8, 9);
    R.push(temparray);

*/




  //  var temparray = wordsArray.slice(0, 3);

    /*
    var R = [];

    var i, j, x = 0, temparray, idx, spot, chunk = numCols;
    //iterates the number of rows, starts i at start of next row each time:
    for (i = 0, i < 1; i += numCols) {

        for(idx = 0, idx < numRows, idx++){
           temparray = wordsArray.slice(i, i + idx);
        }
        R.push(temparray);
      }
*/



/*
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

*/



/*
    for (i = 0, j = wordsArray.length; i < j; i += chunk) {
        temparray = wordsArray.slice(i, i + chunk);
        //have an array of numCols in length
        //now, numCols times, push tempArray[i] onto it

        for(idx = 0, idx < numCols, idx++){
          R.push()
        }
        R.push

        if(x === 0){
          R[x] = temparray;
          x++;
        }
        else{
          R.push(temparray);
        }
        $(".original").text(R[1][1]);

        $('#originalMessege').show();
    }
*/




     //$(".original").text(words);

  //   $('#originalMessege').show();
