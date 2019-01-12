/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    solution.push(row);
  }
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var factorial = function(value){
    if(value === 0){
      return 1;
    }
    return value * factorial(value - 1);
  };
  solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solutionsArray = [];
  var currentSolution = [];
  var initialOptions = [];
  // looping through: create the list of options based on n
  for(var i = 0; i < n; i++){
    // create each row
    for(var j = 0; j < n; j++){
    // create each column
      // push [row, column] into optionsArray
      initialOptions.push([i, j]);
    }
  }

  // create recursive function that takes list of options and queen
  var recurseChessBoard = function(options, queen){
    // if queen > n
    if(queen > n){
      // push copy of current solution into solutions array
      solutionsArray.push(currentSolution.slice());
      return;
    }
    // if options.length === 0
    if(options.length === 0){
      return;
    }
    // loop through the optionsArray
    for(var i = 0; i < options.length; i++){
      // put optionsArray[i] into currentSolution[queen - 1]
      currentSolution[queen - 1] = options[i];
      // declare row and column variable
      var queenRow = options[i][0];
      var queenColumn = options[i][1];
      var newOptionsList = [];
      // loop through the options [row, column]
      for(var j = 0; j < options.length; j++){
        //initialize newOptionsList []
        var row = options[j][0];
        var column = options[j][1];
        // if row !== optionArray[i][0] && if column !== optionArray[i][1] && row - column !== (optionArray[i][0] -  optionArray[i][2]) && row + plus column !== optionArray[i][0] +  optionArray[i][2]
        if((row !== queenRow) && (column !== queenColumn) && (row - column !== queenRow - queenColumn) && row + column !== queenRow + queenColumn){
          // push it to newOptionsList
          newOptionsList.push([row, column]);
        }
      }
      // call recursive fn passing in newOptions and queen + 1
      recurseChessBoard(newOptionsList, queen + 1);
    }
  }
  // call recursive fn passing in initialOptions and 1
  recurseChessBoard(initialOptions, 1);
  console.log(solutionsArray);
  solutionCount = solutionsArray.length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
