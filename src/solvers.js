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
  var board = new Board({n:n})
  var solution = boardTraversal(board, 0, "hasAnyRooksConflicts", function() {
    return _.map(board.rows(), function (row){
      return row.slice();
    });
  }) || board.rows();

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var board = new Board({"n":n})
  var solutionCount = 0;
  boardTraversal(board, 0, "hasAnyRooksConflicts", function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n})
  var solution = boardTraversal(board, 0, "hasAnyQueensConflicts", function() {
    return _.map(board.rows(), function (row){
      return row.slice();
    });
  }) || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var board = new Board({"n":n})
  var solutionCount = 0;
  boardTraversal(board, 0, "hasAnyQueensConflicts", function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.boardTraversal = function(board, row, test, callback) {

  if (row === board.rows().length) {
    console.log("VICTORY");
    return callback();
  }

  for (var col = 0; col < board.rows().length; col++ ) {
    board.togglePiece(row, col);

    if (!board[test]()) {
      // console.log("Pass At: " + row + ":" + col);
      var result = boardTraversal(board, row+1, test, callback);

      if (result) {
        return result;
      }
    }

    board.togglePiece(row, col);
  }
};
