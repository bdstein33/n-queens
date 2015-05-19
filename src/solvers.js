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
  var solution;

  var board = new Board({"n":n});
  var startCol = 0;

  for (var row = 0; row < n; row++) {
    for ( var col = startCol; col < n; col++) {
      board.togglePiece(row, col);

      if (board.hasRowConflictAt(row) || board.hasColConflictAt(col)) {
        board.togglePiece(row,col);
      }
      else {
        startCol++;
        break;
      }

    }
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  return _.range(1,n+1).reduce(function(prevVal, curVal) {
    return prevVal * curVal;
  },1);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  // console.log(n);
  var solution = boardTraversal(new Board({"n":n}), 0, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var boards = boardGenerator(n);
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.boardTraversal = function(board, row, count) {
  // var solution = [];
  for (var col = 0; col < board.rows().length; col++ ) {
    board.togglePiece(row, col);

    console.log("Checking At: " + row + ":" + col + " - " + board.rows()[row][col])

    if (board.hasAnyQueensConflicts()) {
      board.togglePiece(row,col);
    }
    else {
      console.log("Pass At: " + row + ":" + col);
      count++;
      if ( count === board.rows().length) {
        return board.rows();
      }

      else if ( row < board.rows().length) {
        boardTraversal(board, row+1, count+1);
      }
    }
  }
  //if no conflict, then boardTraversal(board, row+1)
  //else move to next column




}
