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

  for (var row = 0; row < n; row++) {
    for ( var col = 0; col < n; col++) {
      board.togglePiece(row, col);

      if (board.hasRowConflictAt(row) || board.hasColConflictAt(col)) {
        board.togglePiece(row,col);
      }
      else {
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  console.log(n);
  var solution = blah(0,0,n);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


window.blah = function(startRow, startCol, n) {
  var count = 1;
  var board = new Board({"n":n});

  board.togglePiece(startRow, startCol);
  for (var row = 0; row < n; row++) {
    for ( var col = 0; col < n; col++) {
      if (row === startRow && col === startCol) {
        continue;
      }

      board.togglePiece(row, col);
      count++;

      if (board.hasAnyQueenConflictsOn(row, col)) {
        board.togglePiece(row,col);
        count--;
      }
      else {
        break;
      }

    }
  }

  console.log("Solution count: " + count + " for row: " + startRow + " col: " + startCol);
  if (n === 6) {debugger;}
  if (count ===n) {
    return board.rows();
  }
  if (startCol < n) {
    return blah(startRow, startCol+1, n);
  }
}

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
