// This entire thing is just me proving that we can create SVG text dynamically
/*var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('xlink','http://www.w3.org/1999/xlink');
svg.setAttribute('width','187');
svg.setAttribute('height','234');

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '10');
text.setAttribute('y', '20');
text.setAttribute('fill', '#000');
text.textContent = '2345678909';

svg.appendChild(text); 

var wp = document.getElementById('canvas'); // Id previously wrapper
wp.appendChild(text); // Previously appended svg*/

const canvas = document.getElementById("svgCanvas");
const checkDiv = document.getElementById("wrapper");
//checkDiv.innerHTML = "Check";

const hpInfo = document.getElementById("hpInfo");
const attackInfo = document.getElementById("attackInfo");

// Initial states at the start of the game
hpInfo.innerHTML = "N/A";
attackInfo.innerHTML = "N/A";

/* How to move pieces tutorial sponsored by SkillShare
var blackQueen = document.getElementById("blackQueen");
blackQueen.setAttribute("x", 300);
blackQueen.setAttribute("y", 250);
*/

// Square coordinates
const a8 = ["156", "107"];

const a7 = ["156", "168"];

const a6 = ["156", "229"];

const a5 = ["156", "290"];

const a4 = ["156", "351"];

const a3 = ["156", "412"];

const a2 = ["156", "473"];

const a1 = ["156", "534"];

const b8 = ["217", "107"];

const b7 = ["217", "168"];

const b6 = ["217", "229"];

const b5 = ["217", "290"];

const b4 = ["217", "351"];

const b3 = ["217", "412"];

const b2 = ["217", "473"];

const b1 = ["217", "534"];

const c8 = ["278", "107"];

const c7 = ["278", "168"];

const c6 = ["278", "229"];

const c5 = ["278", "290"];

const c4 = ["278", "351"];

const c3 = ["278", "412"];

const c2 = ["278", "473"];

const c1 = ["278", "534"];

const d8 = ["339", "107"];

const d7 = ["339", "168"];

const d6 = ["339", "229"];

const d5 = ["339", "290"];

const d4 = ["339", "351"];

const d3 = ["339", "412"];

const d2 = ["339", "473"];

const d1 = ["339", "534"];

const e8 = ["400", "107"];

const e7 = ["400", "168"];

const e6 = ["400", "229"];

const e5 = ["400", "290"];

const e4 = ["400", "351"];

const e3 = ["400", "412"];

const e2 = ["400", "473"];

const e1 = ["400", "534"];

const f8 = ["461", "107"];

const f7 = ["461", "168"];

const f6 = ["461", "229"];

const f5 = ["461", "290"];
  
const f4 = ["461", "351"];

const f3 = ["461", "412"];

const f2 = ["461", "473"];

const f1 = ["461", "534"];

const g8 = ["522", "107"];

const g7 = ["522", "168"];

const g6 = ["522", "229"];

const g5 = ["522", "290"];

const g4 = ["522", "351"];

const g3 = ["522", "412"];

const g2 = ["522", "473"];

const g1 = ["522", "534"];

const h8 = ["583", "107"];

const h7 = ["583", "168"];

const h6 = ["583", "229"];

const h5 = ["583", "290"];

const h4 = ["583", "351"];

const h3 = ["583", "412"];

const h2 = ["583", "473"];

const h1 = ["583", "534"];

const leftSquare1 = ["5", "107"];
const leftSquare2 = ["5", "168"];
const leftSquare3 = ["5", "229"];
const leftSquare4 = ["5", "290"];
const leftSquare5 = ["5", "351"];
const leftSquare6 = ["5", "412"];
const leftSquare7 = ["5", "473"];
const leftSquare8 = ["5", "534"];
const leftSquare9 = ["84", "107"];
const leftSquare10 = ["84", "168"];
const leftSquare11 = ["84", "229"];
const leftSquare12 = ["84", "290"];
const leftSquare13 = ["84", "351"];
const leftSquare14 = ["84", "412"];
const leftSquare15 = ["84", "473"];
const leftSquare16 = ["84", "534"];

const rightSquare1 = ["655", "107"];
const rightSquare2 = ["655", "168"];
const rightSquare3 = ["655", "229"];
const rightSquare4 = ["655", "290"];
const rightSquare5 = ["655", "351"];
const rightSquare6 = ["655", "412"];
const rightSquare7 = ["655", "473"];
const rightSquare8 = ["655", "534"];
const rightSquare9 = ["734", "107"];
const rightSquare10 = ["734", "168"];
const rightSquare11 = ["734", "229"];
const rightSquare12 = ["734", "290"];
const rightSquare13 = ["734", "351"];
const rightSquare14 = ["734", "412"];
const rightSquare15 = ["734", "473"];
const rightSquare16 = ["734", "534"];

const whiteCaptureCase = [leftSquare1, leftSquare2, leftSquare3, leftSquare4, leftSquare5, leftSquare6, leftSquare7, leftSquare8, leftSquare9, leftSquare10, leftSquare11, leftSquare12, leftSquare13, leftSquare14, leftSquare15, leftSquare16];
const blackCaptureCase = [rightSquare1, rightSquare2, rightSquare3, rightSquare4, rightSquare5, rightSquare6, rightSquare7, rightSquare8, rightSquare9, rightSquare10, rightSquare11, rightSquare12, rightSquare13, rightSquare14, rightSquare15, rightSquare16];
var whiteCaseIndex = 0;
var blackCaseIndex = 0;

var circleQueue = [];
var queue;
var playerTurn = "white";
var gameOver = false;
// Maybe add a few other count variables to track things like the number of queens of each colour on the board?
var whiteBishopNum = 2;
var blackBishopNum = 2;
var whiteKnightNum = 2;
var blackKnightNum = 2;
var whiteRookNum = 2;
var blackRookNum = 2;
var whiteQueenNum = 1;
var blackQueenNum = 1;


var whitePiecePositions = new Map();
whitePiecePositions.set("whiteRook1", "a1");
whitePiecePositions.set("whitePawn1", "a2");
whitePiecePositions.set("whiteKnight1", "b1");
whitePiecePositions.set("whitePawn2", "b2");
whitePiecePositions.set("whiteBishop1", "c1");
whitePiecePositions.set("whitePawn3", "c2");
whitePiecePositions.set("whiteQueen", "d1");
whitePiecePositions.set("whitePawn4", "d2");
whitePiecePositions.set("whiteKing", "e1");
whitePiecePositions.set("whitePawn5", "e2");
whitePiecePositions.set("whiteBishop2", "f1");
whitePiecePositions.set("whitePawn6", "f2");
whitePiecePositions.set("whiteKnight2", "g1");
whitePiecePositions.set("whitePawn7", "g2");
whitePiecePositions.set("whiteRook2", "h1");
whitePiecePositions.set("whitePawn8", "h2");

var blackPiecePositions = new Map();
blackPiecePositions.set("blackRook1", "a8");
blackPiecePositions.set("blackPawn1", "a7")
blackPiecePositions.set("blackKnight1", "b8");
blackPiecePositions.set("blackPawn2", "b7");
blackPiecePositions.set("blackBishop1", "c8");
blackPiecePositions.set("blackPawn3", "c7");
blackPiecePositions.set("blackQueen", "d8");
blackPiecePositions.set("blackPawn4", "d7");
blackPiecePositions.set("blackKing", "e8");
blackPiecePositions.set("blackPawn5", "e7");
blackPiecePositions.set("blackBishop2", "f8");
blackPiecePositions.set("blackPawn6", "f7");
blackPiecePositions.set("blackKnight2", "g8");
blackPiecePositions.set("blackPawn7", "g7");
blackPiecePositions.set("blackRook2", "h8");
blackPiecePositions.set("blackPawn8", "h7");

// Attack Damage and HP of each piece
// Goes HP, Damage
var whitePieceInfo = new Map();
whitePieceInfo.set("whiteRook1", [16, "d12"]);
whitePieceInfo.set("whitePawn1", [4, "d4"]);
whitePieceInfo.set("whiteKnight1", [10, "d6"]);
whitePieceInfo.set("whitePawn2", [4, "d4"]);
whitePieceInfo.set("whiteBishop1", [6, "d10"]);
whitePieceInfo.set("whitePawn3", [4, "d4"]);
whitePieceInfo.set("whiteQueen", [24, "d20"]);
whitePieceInfo.set("whitePawn4", [4, "d4"]);
whitePieceInfo.set("whiteKing", [2, "24d1"]);
whitePieceInfo.set("whitePawn5", [4, "d4"]);
whitePieceInfo.set("whiteBishop2", [6, "d10"]);
whitePieceInfo.set("whitePawn6", [4, "d4"]);
whitePieceInfo.set("whiteKnight2", [10, "d6"]);
whitePieceInfo.set("whitePawn7", [4, "d4"]);
whitePieceInfo.set("whiteRook2", [16, "d12"]);
whitePieceInfo.set("whitePawn8", [4, "d4"]);

var blackPieceInfo = new Map();
blackPieceInfo.set("blackRook1", [16, "d12"]);
blackPieceInfo.set("blackPawn1", [4, "d4"]);
blackPieceInfo.set("blackKnight1", [10, "d6"]);
blackPieceInfo.set("blackPawn2", [4, "d4"]);
blackPieceInfo.set("blackBishop1", [6, "d10"]);
blackPieceInfo.set("blackPawn3", [4, "d4"]);
blackPieceInfo.set("blackQueen", [24, "d20"]);
blackPieceInfo.set("blackPawn4", [4, "d4"]);
blackPieceInfo.set("blackKing", [2, "24d1"]);
blackPieceInfo.set("blackPawn5", [4, "d4"]);
blackPieceInfo.set("blackBishop2", [6, "d10"]);
blackPieceInfo.set("blackPawn6", [4, "d4"]);
blackPieceInfo.set("blackKnight2", [10, "d6"]);
blackPieceInfo.set("blackPawn7", [4, "d4"]);
blackPieceInfo.set("blackRook2", [16, "d12"]);
blackPieceInfo.set("blackPawn8", [4, "d4"]);

var wkingside=true;
var wqueenside=true;
var bkingside=true;
var bqueenside=true;

//console.log(whitePieceInfo.get("whiteRook1")[0]); // We can make the maps multidimensional and get single values from the value component of each key (if the value is an array)

function isSquareOccupied(square, colour) {
  if (colour == "white") {
    for (const [key, value] of whitePiecePositions.entries()) {
      if (value === square) {
        return key;
      }
    }
  } else if (colour == "black") {
    for (const [key, value] of blackPiecePositions.entries()) {
      if (value === square) {
        return key;
      }
    }
  }
}

//isSquareOccupied("F2", "white");

function pawn(piece) {

//promotion(piece);
  if (!gameOver) {
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
    circleQueue.splice(0, 1);
    }



    if (queue === piece) {
      queue = "";
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }
    } else if (piece.includes("white") && playerTurn == "white") {
    var c = whitePiecePositions.get(piece);
    var cN = c.replace(/\D/g, "");
    var cL = c.replace(/[0-9]/g,"").charCodeAt(0);
    var cNI = parseInt(cN);
    var cLI = parseInt(cL);
    var cLIL = cLI-1;
    var cLIR = cLI+1;

    if (cNI < 8) {
    var cNIM = cNI+1;
    var cNLIM = String.fromCharCode(cLI)+cNIM;
    if (isSquareOccupied(cNLIM, "white")) {   

    } else if (isSquareOccupied(cNLIM, "black")) {

    } else {
      displayCircle(eval(cNLIM), cNLIM);
      if(cNI==2) {
    var pTM = cNI+2;
    var pTMS = String.fromCharCode(cLI) + pTM;
    if (isSquareOccupied(pTMS, "white")) { 

    } else if (isSquareOccupied(pTMS, "black")) { 

    } else {
    displayCircle(eval(pTMS), pTMS);
    }

    }
    }
    }

    if (cNI < 8 && cLI > 97) {
    var pUL = String.fromCharCode(cLIL)+cNIM;

    if (isSquareOccupied(pUL, "black")) {
      displayCircle(eval(pUL), pUL);
    }
    else {

    }
    }

    if(cNI < 8 && cLI < 104){
    var pUR = String.fromCharCode(cLIR)+cNIM;

    if (isSquareOccupied(pUR, "black")) {
      displayCircle(eval(pUR), pUR)
    } else {

    }
    }

    queue = piece;

    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];

    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];

    } else if (piece.includes("black") && playerTurn == "black") {
    var c = blackPiecePositions.get(piece);
    var cN = c.replace(/\D/g, "");
    var cL = c.replace(/[0-9]/g,"").charCodeAt(0);
    var cNI = parseInt(cN);
    var cLI = parseInt(cL);
    var cLIL = cLI-1;
    var cLIR = cLI+1;

    if (cNI > 1) {
    var cNIM = cNI-1;
    var cNLIM = String.fromCharCode(cLI)+cNIM;
    if (isSquareOccupied(cNLIM, "white")) {   

    } else if (isSquareOccupied(cNLIM, "black")) { 
    } else {
    displayCircle(eval(cNLIM), cNLIM);
    if(cNI==7) {
    var pTM = cNI-2;
    var pTMS = String.fromCharCode(cLI) + pTM;
    if (isSquareOccupied(pTMS, "white")) { 

    } else if (isSquareOccupied(pTMS, "black")) { 

    } else {
    displayCircle(eval(pTMS), pTMS);
    }
    }
    }
    }

    if (cNI > 1 && cLI > 97) {
    var pUL = String.fromCharCode(cLIL)+cNIM;

    if (isSquareOccupied(pUL, "white")) {
    displayCircle(eval(pUL), pUL);
    }
    else {

    }
    }

    if(cNI > 1 && cLI < 104){
    var pUR = String.fromCharCode(cLIR)+cNIM;

    if (isSquareOccupied(pUR, "white")) {
    displayCircle(eval(pUR), pUR)
    }
    else {

    }
    }


    queue = piece;

    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];

    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    } else if (piece.includes("white") && playerTurn == "black"){
    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    } else if (piece.includes("black") && playerTurn == "white") {
    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    }
  }
}



function bishop(piece) {
  if (!gameOver) {
    if (queue === piece) {
      queue = "";
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }
    } else if (piece.includes("white") && playerTurn == "white") {
      var coordinates = whitePiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var upperLeft = [];
      var lowerLeft = [];
      var upperRight = [];
      var lowerRight = [];

      // Placing in the upper left diagonal positions
      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
      while (coordinateNumberIndex < 8 && coordinateLetterIndex > 97) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex -= 1;
        upperLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the indices
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in upper right diagonal positions
      while (coordinateNumberIndex < 8 && coordinateLetterIndex < 104) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex += 1;
        upperRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting again
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower left diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex > 97) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex -= 1;
        lowerLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting a final time
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower right diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex < 104) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex += 1;
        lowerRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the circleQueue (and circles on the board)
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }    
      // Placing in the upper left diagonal circles
      for (var i = 0; i < upperLeft.length; i++) {
        if (isSquareOccupied(upperLeft[i], "white")) {
          break;
        } else if (isSquareOccupied(upperLeft[i], "black")) {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
          break;
        } else {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
        }
      }
      // Placing in the upper right diagonal circles
      for (var i = 0; i < upperRight.length; i++) {
        if (isSquareOccupied(upperRight[i], "white")) {
          break;
        } else if (isSquareOccupied(upperRight[i], "black")) {
          displayCircle(eval(upperRight[i]), upperRight[i]);
          break;
        } else {
          displayCircle(eval(upperRight[i]), upperRight[i]);
        }
      }
      // Placing in the lower left diagonal circles
      for (var i = 0; i < lowerLeft.length; i++) {
        if (isSquareOccupied(lowerLeft[i], "white")) {
          break;
        } else if (isSquareOccupied(lowerLeft[i], "black")) {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
          break;
        } else {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
        }
      }
      // Placing in the lower right diagonal circles
      for (var i = 0; i < lowerRight.length; i++) {
        if (isSquareOccupied(lowerRight[i], "white")) {
          break;
        } else if (isSquareOccupied(lowerRight[i], "black")) {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
          break;
        } else {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
        }
      }
      // Placing bishop in queue
      queue = piece;
      // Displaying bishop stats
      hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
      attackInfo.innerHTML = whitePieceInfo.get(piece)[1];

    } else if (piece.includes("black") && playerTurn == "black") {
      var coordinates = blackPiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var upperLeft = [];
      var lowerLeft = [];
      var upperRight = [];
      var lowerRight = [];

      // Placing in the upper left diagonal positions
      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
      while (coordinateNumberIndex < 8 && coordinateLetterIndex > 97) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex -= 1;
        upperLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the indices
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in upper right diagonal positions
      while (coordinateNumberIndex < 8 && coordinateLetterIndex < 104) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex += 1;
        upperRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting again
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower left diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex > 97) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex -= 1;
        lowerLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting a final time
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower right diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex < 104) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex += 1;
        lowerRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the circleQueue (and circles on the board)
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }
      // Placing in the upper left diagonal circles
      for (var i = 0; i < upperLeft.length; i++) {
        if (isSquareOccupied(upperLeft[i], "black")) {
          break;
        } else if (isSquareOccupied(upperLeft[i], "white")) {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
          break;
        } else {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
        }
      }
      // Placing in the upper right diagonal circles
      for (var i = 0; i < upperRight.length; i++) {
        if (isSquareOccupied(upperRight[i], "black")) {
          break;
        } else if (isSquareOccupied(upperRight[i], "white")) {
          displayCircle(eval(upperRight[i]), upperRight[i]);
          break;
        } else {
          displayCircle(eval(upperRight[i]), upperRight[i]);
        }
      }
      // Placing in the lower left diagonal circles
      for (var i = 0; i < lowerLeft.length; i++) {
        if (isSquareOccupied(lowerLeft[i], "black")) {
          break;
        } else if (isSquareOccupied(lowerLeft[i], "white")) {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
          break;
        } else {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
        }
      }
      // Placing in the lower right diagonal circles
      for (var i = 0; i < lowerRight.length; i++) {
        if (isSquareOccupied(lowerRight[i], "black")) {
          break;
        } else if (isSquareOccupied(lowerRight[i], "white")) {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
          break;
        } else {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
        }
      }
      // Placing bishop in queue
      queue = piece;
      // Displaying bishop stats
      hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
      attackInfo.innerHTML = blackPieceInfo.get(piece)[1];

    } else if (piece.includes("white") && playerTurn == "black") {
      hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
      attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    } else if (piece.includes("black") && playerTurn == "white") {
      hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
      attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    }
  }
}

function knight(piece) {
  if(!gameOver) {
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }

    if (queue === piece) {
    queue = "";
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    } else if (piece.includes("white") && playerTurn == "white") {

    var coordinates = whitePiecePositions.get(piece);
    var coordinateNumber = coordinates.replace(/\D/g, "");
    var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);
    var coordinateNumberIndex = parseInt(coordinateNumber);
    var coordinateLetterIndex = parseInt(coordinateLetter);
    var verticalUpNumber = coordinateNumberIndex + 2;
    var verticalDownNumber = coordinateNumberIndex - 2;
    var verticalLeftLetter = coordinateLetterIndex - 1;
    var verticalRightLetter = coordinateLetterIndex + 1;
    var horizontalLeftLetter = coordinateLetterIndex - 2;
    var horizontalRightLetter = coordinateLetterIndex + 2;
    var horizontalUpNumber = coordinateNumberIndex + 1;
    var horizontalDownNumber = coordinateNumberIndex - 1;

    if (verticalUpNumber <= 8 && verticalLeftLetter >= 97) {
    var verticalUpLeft = String.fromCharCode(verticalLeftLetter)+verticalUpNumber;
    console.log("dm")
    if (isSquareOccupied(verticalUpLeft, "white")) {

    } else {
    displayCircle(eval(verticalUpLeft),verticalUpLeft);
    }
    }
    if (verticalUpNumber <= 8 && verticalRightLetter <= 104) {
    var verticalUpRight = String.fromCharCode(verticalRightLetter)+verticalUpNumber;
    if (isSquareOccupied(verticalUpRight, "white")) {

    } else {
    displayCircle(eval(verticalUpRight),verticalUpRight);
    }
    }
    if (horizontalRightLetter <= 104 && horizontalUpNumber <=8) {
    var horizontalUpRight = String.fromCharCode(horizontalRightLetter)+horizontalUpNumber;
    if (isSquareOccupied(horizontalUpRight, "white")) {

    } else {
    displayCircle(eval(horizontalUpRight),horizontalUpRight);
    }    
    }
    if (horizontalRightLetter <= 104 && horizontalDownNumber >= 1) {
    var horizontalDownRight = String.fromCharCode(horizontalRightLetter)+horizontalDownNumber
    if (isSquareOccupied(horizontalDownRight, "white")) {

    } else {
    displayCircle(eval(horizontalDownRight),horizontalDownRight);
    }
    }
    if (verticalDownNumber >= 1 && verticalRightLetter <=104) {
    var verticalDownRight = String.fromCharCode(verticalRightLetter)+verticalDownNumber;
    if (isSquareOccupied(verticalDownRight, "white")) {

    } else {
    displayCircle(eval(verticalDownRight),verticalDownRight);
    }
    }
    if (verticalDownNumber >= 1 && verticalLeftLetter >= 97) {
    var verticalDownLeft = String.fromCharCode(verticalLeftLetter)+verticalDownNumber;
    if (isSquareOccupied(verticalDownLeft, "white")) {

    } else {
    displayCircle(eval(verticalDownLeft),verticalDownLeft);
    }
    }
    if (horizontalLeftLetter >= 97 && horizontalDownNumber >=1) {
    var horizontalDownLeft = String.fromCharCode(horizontalLeftLetter)+horizontalDownNumber;
    if (isSquareOccupied(horizontalDownLeft, "white")) {

    } else {
    displayCircle(eval(horizontalDownLeft),horizontalDownLeft);
    }
    }
    if (horizontalLeftLetter >= 97 && horizontalUpNumber <=8) {
    var horizontalUpLeft = String.fromCharCode(horizontalLeftLetter)+horizontalUpNumber;
    if (!isSquareOccupied(horizontalUpLeft, "white")) {
      displayCircle(eval(horizontalUpLeft),horizontalUpLeft);
    }
    } 
    // Below is faulty code
    // if (horizontalLeftLetter >= 97 && horizontalUpNumber >=1) {
    //  var horizontalUpLeft = String.fromCharCode(horizontalLeftLetter)+horizontalUpNumber;
    //   if (isSquareOccupied(horizontalUpLeft, "white")) {

    //   } else {
    //     displayCircle(eval(horizontalUpLeft),horizontalUpLeft);
    //   }
    // } 
    queue = piece;

    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];

    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];

    } 
    else if(piece.includes("black") && playerTurn == "black") {

    var coordinates = blackPiecePositions.get(piece);
    var coordinateNumber = coordinates.replace(/\D/g, "");
    var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);
    var coordinateNumberIndex = parseInt(coordinateNumber);
    var coordinateLetterIndex = parseInt(coordinateLetter);
    var verticalUpNumber = coordinateNumberIndex + 2;
    var verticalDownNumber = coordinateNumberIndex - 2;
    var verticalLeftLetter = coordinateLetterIndex - 1;
    var verticalRightLetter = coordinateLetterIndex + 1;
    var horizontalLeftLetter = coordinateLetterIndex - 2;
    var horizontalRightLetter = coordinateLetterIndex + 2;
    var horizontalUpNumber = coordinateNumberIndex + 1;
    var horizontalDownNumber = coordinateNumberIndex - 1;

    if (verticalUpNumber <= 8 && verticalLeftLetter >= 97) {
    var verticalUpLeft = String.fromCharCode(verticalLeftLetter)+verticalUpNumber;
    console.log("dm")
    if (isSquareOccupied(verticalUpLeft, "black")) {

    } else {
    displayCircle(eval(verticalUpLeft),verticalUpLeft);
    }
    }
    if (verticalUpNumber <= 8 && verticalRightLetter <= 104) {
    var verticalUpRight = String.fromCharCode(verticalRightLetter)+verticalUpNumber;
    if (isSquareOccupied(verticalUpRight, "black")) {

    } else {
    displayCircle(eval(verticalUpRight),verticalUpRight);
    }
    }
    if (horizontalRightLetter <= 104 && horizontalUpNumber <=8) {
    var horizontalUpRight = String.fromCharCode(horizontalRightLetter)+horizontalUpNumber;
    if (isSquareOccupied(horizontalUpRight, "black")) {

    } else {
    displayCircle(eval(horizontalUpRight),horizontalUpRight);
    }    
    }
    if (horizontalRightLetter <= 104 && horizontalDownNumber >= 1) {
    var horizontalDownRight = String.fromCharCode(horizontalRightLetter)+horizontalDownNumber
    if (isSquareOccupied(horizontalDownRight, "black")) {

    } else {
    displayCircle(eval(horizontalDownRight),horizontalDownRight);
    }
    }
    if (verticalDownNumber >= 1 && verticalRightLetter <=104) {
    var verticalDownRight = String.fromCharCode(verticalRightLetter)+verticalDownNumber;
    if (isSquareOccupied(verticalDownRight, "black")) {

    } else {
    displayCircle(eval(verticalDownRight),verticalDownRight);
    }
    }
    if (verticalDownNumber >= 1 && verticalLeftLetter >= 97) {
    var verticalDownLeft = String.fromCharCode(verticalLeftLetter)+verticalDownNumber;
    if (isSquareOccupied(verticalDownLeft, "black")) {

    } else {
    displayCircle(eval(verticalDownLeft),verticalDownLeft);
    }
    }
    if (horizontalLeftLetter >= 97 && horizontalDownNumber >=1) {
    var horizontalDownLeft = String.fromCharCode(horizontalLeftLetter)+horizontalDownNumber;
    if (isSquareOccupied(horizontalDownLeft, "black")) {

    } else {
    displayCircle(eval(horizontalDownLeft),horizontalDownLeft);
    }
    }

    if (horizontalLeftLetter >= 97 && horizontalUpNumber <=8) {
    var horizontalUpLeft = String.fromCharCode(horizontalLeftLetter)+horizontalUpNumber;
    if (!isSquareOccupied(horizontalUpLeft, "black")) {
    displayCircle(eval(horizontalUpLeft),horizontalUpLeft);
    }
    } 
    queue = piece;

    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];

    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];

    }
  }
}

function rook(piece) {
  if (!gameOver) {
    if (queue === piece) {
      queue = "";
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }
    } else if (piece.includes("white") && playerTurn == "white") {
      var coordinates = whitePiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var up = [];
      var down = [];
      var right = [];
      var left = [];

      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
      // up code
      while(coordinateNumberIndex < 8) {
        coordinateNumberIndex += 1;
        up.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // down code
      while(coordinateNumberIndex > 1) {
        coordinateNumberIndex -= 1;
        down.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      //left code
      while(coordinateLetterIndex > 97) {
        coordinateLetterIndex -= 1;
        left.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // right code
      while(coordinateLetterIndex < 104) {
        coordinateLetterIndex += 1;
        right.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }

      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }

      for (var i = 0; i < up.length; i++) {
        if (isSquareOccupied(up[i], "white")) {
          break;
        } else if (isSquareOccupied(up[i], "black")) {
          displayCircle(eval(up[i]), up[i]);
          break;
        } else {
          displayCircle(eval(up[i]), up[i]);
        }
      }

      for (var i = 0; i < down.length; i++) {
        if (isSquareOccupied(down[i], "white")) {
          break;
        } else if (isSquareOccupied(down[i], "black")) {
          displayCircle(eval(down[i]), down[i]);
          break;
        } else {
          displayCircle(eval(down[i]), down[i]);
        }
      }

        for (var i = 0; i < left.length; i++) {
        if (isSquareOccupied(left[i], "white")) {
          break;
        } else if (isSquareOccupied(left[i], "black")) {
          displayCircle(eval(left[i]), left[i]);
          break;
        } else {
          displayCircle(eval(left[i]), left[i]);
        }
      }

      for (var i = 0; i < right.length; i++) {
        if (isSquareOccupied(right[i], "white")) {
          break;
        } else if (isSquareOccupied(right[i], "black")) {
          displayCircle(eval(right[i]), right[i]);
          break;
        } else {
          displayCircle(eval(right[i]), right[i]);
        }
      }

       queue = piece;
      hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
      attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    }
    else if(piece.includes("black") && playerTurn == "black"){
      var coordinates = blackPiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var up = [];
      var down = [];
      var right = [];
      var left = [];

      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
      while(coordinateNumberIndex < 8) {
        coordinateNumberIndex += 1
        up.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);

      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      while(coordinateNumberIndex > 1) {
        coordinateNumberIndex -= 1
        down.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      while(coordinateLetterIndex > 97) {
        coordinateLetterIndex -= 1
        left.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      while(coordinateLetterIndex < 104) {
        coordinateLetterIndex += 1
        right.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }

      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }

      for (var i = 0; i < up.length; i++) {
        if (isSquareOccupied(up[i], "black")) {
          break;
        } else if (isSquareOccupied(up[i], "white")) {
          displayCircle(eval(up[i]), up[i]);
          break;
        } else {
          displayCircle(eval(up[i]), up[i]);
        }
      }

      for (var i = 0; i < down.length; i++) {
        if (isSquareOccupied(down[i], "black")) {
          break;
        } else if (isSquareOccupied(down[i], "white")) {
          displayCircle(eval(down[i]), down[i]);
          break;
        } else {
          displayCircle(eval(down[i]), down[i]);
        }
      }

        for (var i = 0; i < left.length; i++) {
        if (isSquareOccupied(left[i], "black")) {
          break;
        } else if (isSquareOccupied(left[i], "white")) {
          displayCircle(eval(left[i]), left[i]);
          break;
        } else {
          displayCircle(eval(left[i]), left[i]);
        }
      }

      for (var i = 0; i < right.length; i++) {
        if (isSquareOccupied(right[i], "black")) {
          break;
        } else if (isSquareOccupied(right[i], "white")) {
          displayCircle(eval(right[i]), right[i]);
          break;
        } else {
          displayCircle(eval(right[i]), right[i]);
        }
    }
    queue = piece;
      hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
      attackInfo.innerHTML = blackPieceInfo.get(piece)[1];

    }
      else if (piece.includes("white") && playerTurn == "black") {
      hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
      attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    } else if (piece.includes("black") && playerTurn == "white") {
      hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
      attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    }
  }
}

function king(piece) {
  if (!gameOver) {
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }

    if (queue === piece) {
    queue = "";
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    } else if (piece.includes("white") && playerTurn == "white") {
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
   

    var coordinates = whitePiecePositions.get(piece);
    var coordinateNumber = coordinates.replace(/\D/g, "");
    var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);
    var coordinateNumberIndex = parseInt(coordinateNumber);
    var coordinateLetterIndex = parseInt(coordinateLetter);
    var up = coordinateNumberIndex + 1;
    var down = coordinateNumberIndex - 1;
    var right = coordinateLetterIndex + 1;
    var left = coordinateLetterIndex -1;
    var upperLeft = String.fromCharCode(left)+up;
    var lowerLeft = String.fromCharCode(left)+down;
    var upperRight = String.fromCharCode(right)+up;
    var lowerRight = String.fromCharCode(right)+down;
    if (up <=8) {
    var upcoords = String.fromCharCode(coordinateLetterIndex)+up
    if (isSquareOccupied(upcoords, "white")) {

    } else {
    displayCircle(eval(upcoords),upcoords);
    }
    } if (down >= 1) {
    var downcoords = String.fromCharCode(coordinateLetterIndex)+down
    if (isSquareOccupied(downcoords, "white")) {

    } else {
    displayCircle(eval(downcoords),downcoords);
    }
    } if (left >=97) {
    var leftcoords = String.fromCharCode(left)+coordinateNumberIndex
    if (isSquareOccupied(leftcoords, "white")) {

    } else {
    displayCircle(eval(leftcoords),leftcoords);
    }
    } if (right <=104) {
    var rightcoords = String.fromCharCode(right)+coordinateNumberIndex
    if (isSquareOccupied(rightcoords, "white")) {

    } else {
    displayCircle(eval(rightcoords),rightcoords);
    }
    } if (up <= 8 && right <=104) {
    if (isSquareOccupied(upperRight, "white")) {

    } else {
    displayCircle(eval(upperRight),upperRight)
    }
    }  if (up <= 8 && left >=94) {
    if (isSquareOccupied(upperLeft, "white")) {

    } else {
    displayCircle(eval(upperLeft),upperLeft)
    }
    }  if (down >= 1 && left >=94) {
    if (isSquareOccupied(lowerLeft, "white")) {

    } else {
    displayCircle(eval(lowerLeft),lowerLeft)
    }
    } if (down >= 1 && right <=104) {
    if (isSquareOccupied(lowerRight, "white")) {

    } else {
    displayCircle(eval(lowerRight),lowerRight)
    }
    }
    if (wkingside==true){
      console.log("nf");
      if (!(isSquareOccupied("f1","white") && isSquareOccupied("g1","white") && isSquareOccupied("f1","black")&& isSquareOccupied("g1","black"))){
        console.log("lf");
        displayCircle(eval(g1),"g1");
        whitePiecePositions.set("whiteRook2","f1")
        document.getElementById("whiteRook2").setAttribute("x",f1[0])
        document.getElementById("whiteRook2").setAttribute("y",f1[1])
      }
    }
    if (wqueenside==true){
      if(!(isSquareOccupied("d1","white")&& isSquareOccupied("c1","white")&& isSquareOccupied("b1","white")&& isSquareOccupied("d1","black")&& isSquareOccupied("c1","black")&& isSquareOccupied("b1","black"))){
        displayCircle(eval(c1),"c1");
      }
    }
     queue = piece;
    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    } else if (piece.includes("black") && playerTurn == "black") {
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }

    var coordinates = blackPiecePositions.get(piece);
    var coordinateNumber = coordinates.replace(/\D/g, "");
    var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);
    var coordinateNumberIndex = parseInt(coordinateNumber);
    var coordinateLetterIndex = parseInt(coordinateLetter);
    var up = coordinateNumberIndex + 1;
    var down = coordinateNumberIndex - 1;
    var right = coordinateLetterIndex + 1;
    var left = coordinateLetterIndex -1;
    var upperLeft = String.fromCharCode(left)+up;
    var lowerLeft = String.fromCharCode(left)+down;
    var upperRight = String.fromCharCode(right)+up;
    var lowerRight = String.fromCharCode(right)+down;
    if (up <=8) {
    var upcoords = String.fromCharCode(coordinateLetterIndex)+up
    if (isSquareOccupied(upcoords, "black")) {

    } else {
    displayCircle(eval(upcoords),upcoords);
    }
    } if (down >= 1) {
    var downcoords = String.fromCharCode(coordinateLetterIndex)+down
    if (isSquareOccupied(downcoords, "black")) {

    } else {
    displayCircle(eval(downcoords),downcoords);
    }
    } if (left >=97) {
    var leftcoords = String.fromCharCode(left)+coordinateNumberIndex
    if (isSquareOccupied(leftcoords, "black")) {

    } else {
    displayCircle(eval(leftcoords),leftcoords);
    }
    } if (right <=104) {
    var rightcoords = String.fromCharCode(right)+coordinateNumberIndex
    if (isSquareOccupied(rightcoords, "black")) {

    } else {
    displayCircle(eval(rightcoords),rightcoords);
    }
    } if (up <= 8 && right <=104) {
    if (isSquareOccupied(upperRight, "black")) {

    } else {
    displayCircle(eval(upperRight),upperRight)
    }
    }  if (up <= 8 && left >=94) {
    if (isSquareOccupied(upperLeft, "black")) {

    } else {
    displayCircle(eval(upperLeft),upperLeft)
    }
    }  if (down >= 1 && left >=94) {
    if (isSquareOccupied(lowerLeft, "black")) {

    } else {
    displayCircle(eval(lowerLeft),lowerLeft)
    }
    } if (down >= 1 && right <=104) {
    if (isSquareOccupied(lowerRight, "black")) {

    } else {
    displayCircle(eval(lowerRight),lowerRight)
    }
    }
    

     queue = piece;
    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    } 
    if (piece.includes("black") && playerTurn == "white") {
    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    } if (piece.includes("white") && playerTurn == "black") {
    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    }
  }
  
}


function queen(piece) {
  if (!gameOver) {
    if (queue === piece) {
      queue = "";
      for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }
    } else if (piece.includes("white") && playerTurn == "white") {
      var coordinates = whitePiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var up = [];
      var down = [];
      var right = [];
      var left = [];  
      var upperLeft = [];
      var lowerLeft = [];
      var upperRight = [];
      var lowerRight = [];

      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
    //some Rook code
    // up code
      while(coordinateNumberIndex < 8) {
        coordinateNumberIndex += 1;
        up.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // down code
      while(coordinateNumberIndex > 1) {
        coordinateNumberIndex -= 1;
        down.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      //left code
      while(coordinateLetterIndex > 97) {
        coordinateLetterIndex -= 1;
        left.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // right code
      while(coordinateLetterIndex < 104) {
        coordinateLetterIndex += 1;
        right.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
    //reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
    //some Bishop code
    while (coordinateNumberIndex < 8 && coordinateLetterIndex > 97) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex -= 1;
        upperLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the indices
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in upper right diagonal positions
      while (coordinateNumberIndex < 8 && coordinateLetterIndex < 104) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex += 1;
        upperRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting again
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower left diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex > 97) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex -= 1;
        lowerLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting a final time
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower right diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex < 104) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex += 1;
        lowerRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
    // some more Rook code
        for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }

      for (var i = 0; i < up.length; i++) {
        if (isSquareOccupied(up[i], "white")) {
          break;
        } else if (isSquareOccupied(up[i], "black")) {
          displayCircle(eval(up[i]), up[i]);
          break;
        } else {
          displayCircle(eval(up[i]), up[i]);
        }
      }

      for (var i = 0; i < down.length; i++) {
        if (isSquareOccupied(down[i], "white")) {
          break;
        } else if (isSquareOccupied(down[i], "black")) {
          displayCircle(eval(down[i]), down[i]);
          break;
        } else {
          displayCircle(eval(down[i]), down[i]);
        }
      }

        for (var i = 0; i < left.length; i++) {
        if (isSquareOccupied(left[i], "white")) {
          break;
        } else if (isSquareOccupied(left[i], "black")) {
          displayCircle(eval(left[i]), left[i]);
          break;
        } else {
          displayCircle(eval(left[i]), left[i]);
        }
      }

      for (var i = 0; i < right.length; i++) {
        if (isSquareOccupied(right[i], "white")) {
          break;
        } else if (isSquareOccupied(right[i], "black")) {
          displayCircle(eval(right[i]), right[i]);
          break;
        } else {
          displayCircle(eval(right[i]), right[i]);
        }
      }
    //some more Bishop code 
        // Placing in the upper left diagonal circles
      for (var i = 0; i < upperLeft.length; i++) {
        if (isSquareOccupied(upperLeft[i], "white")) {
          break;
        } else if (isSquareOccupied(upperLeft[i], "black")) {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
          break;
        } else {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
        }
      }
      // Placing in the upper right diagonal circles
      for (var i = 0; i < upperRight.length; i++) {
        if (isSquareOccupied(upperRight[i], "white")) {
          break;
        } else if (isSquareOccupied(upperRight[i], "black")) {
          displayCircle(eval(upperRight[i]), upperRight[i]);
          break;
        } else {
          displayCircle(eval(upperRight[i]), upperRight[i]);
        }
      }
      // Placing in the lower left diagonal circles
      for (var i = 0; i < lowerLeft.length; i++) {
        if (isSquareOccupied(lowerLeft[i], "white")) {
          break;
        } else if (isSquareOccupied(lowerLeft[i], "black")) {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
          break;
        } else {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
        }
      }
      // Placing in the lower right diagonal circles
      for (var i = 0; i < lowerRight.length; i++) {
        if (isSquareOccupied(lowerRight[i], "white")) {
          break;
        } else if (isSquareOccupied(lowerRight[i], "black")) {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
          break;
        } else {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
        }
      }
    // done with circles for now...
    queue = piece;

    hpInfo.innerHTML = whitePieceInfo.get(piece)[0];

    attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    }
    else if (piece.includes("black") && playerTurn == "black") {
        var coordinates = blackPiecePositions.get(piece);
      var coordinateNumber = coordinates.replace(/\D/g, "");
      var coordinateLetter = coordinates.replace(/[0-9]/g, "").charCodeAt(0);

      var up = [];
      var down = [];
      var right = [];
      var left = [];  
      var upperLeft = [];
      var lowerLeft = [];
      var upperRight = [];
      var lowerRight = [];

      var coordinateNumberIndex = parseInt(coordinateNumber);
      var coordinateLetterIndex = parseInt(coordinateLetter);
    //some Rook code
    // up code
      while(coordinateNumberIndex < 8) {
        coordinateNumberIndex += 1;
        up.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // down code
      while(coordinateNumberIndex > 1) {
        coordinateNumberIndex -= 1;
        down.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      } 
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      //left code
      while(coordinateLetterIndex > 97) {
        coordinateLetterIndex -= 1;
        left.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // right code
      while(coordinateLetterIndex < 104) {
        coordinateLetterIndex += 1;
        right.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
    //reseting
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
    //some Bishop code
    while (coordinateNumberIndex < 8 && coordinateLetterIndex > 97) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex -= 1;
        upperLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting the indices
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in upper right diagonal positions
      while (coordinateNumberIndex < 8 && coordinateLetterIndex < 104) {
        coordinateNumberIndex += 1;
        coordinateLetterIndex += 1;
        upperRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting again
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower left diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex > 97) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex -= 1;
        lowerLeft.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
      // Resetting a final time
      coordinateNumberIndex = parseInt(coordinateNumber);
      coordinateLetterIndex = parseInt(coordinateLetter);
      // Placing in lower right diagonal positions
      while (coordinateNumberIndex > 1 && coordinateLetterIndex < 104) {
        coordinateNumberIndex -= 1;
        coordinateLetterIndex += 1;
        lowerRight.push(String.fromCharCode(coordinateLetterIndex) + coordinateNumberIndex);
      }
    // some more Rook code
        for (var i = 0; i < circleQueue.length; i++) {
        document.getElementById(circleQueue[i]).remove();
      }
      for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
        circleQueue.splice(0, 1);
      }

      for (var i = 0; i < up.length; i++) {
        if (isSquareOccupied(up[i], "black")) {
          break;
        } else if (isSquareOccupied(up[i], "white")) {
          displayCircle(eval(up[i]), up[i]);
          break;
        } else {
          displayCircle(eval(up[i]), up[i]);
        }
      }

      for (var i = 0; i < down.length; i++) {
        if (isSquareOccupied(down[i], "black")) {
          break;
        } else if (isSquareOccupied(down[i], "white")) {
          displayCircle(eval(down[i]), down[i]);
          break;
        } else {
          displayCircle(eval(down[i]), down[i]);
        }
      }

        for (var i = 0; i < left.length; i++) {
        if (isSquareOccupied(left[i], "black")) {
          break;
        } else if (isSquareOccupied(left[i], "white")) {
          displayCircle(eval(left[i]), left[i]);
          break;
        } else {
          displayCircle(eval(left[i]), left[i]);
        }
      }

      for (var i = 0; i < right.length; i++) {
        if (isSquareOccupied(right[i], "black")) {
          break;
        } else if (isSquareOccupied(right[i], "white")) {
          displayCircle(eval(right[i]), right[i]);
          break;
        } else {
          displayCircle(eval(right[i]), right[i]);
        }
      }
    //some more Bishop code 
        // Placing in the upper left diagonal circles
      for (var i = 0; i < upperLeft.length; i++) {
        if (isSquareOccupied(upperLeft[i], "black")) {
          break;
        } else if (isSquareOccupied(upperLeft[i], "white")) {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
          break;
        } else {
          displayCircle(eval(upperLeft[i]), upperLeft[i]);
        }
      }
      // Placing in the upper right diagonal circles
      for (var i = 0; i < upperRight.length; i++) {
        if (isSquareOccupied(upperRight[i], "black")) {
          break;
        } else if (isSquareOccupied(upperRight[i], "white")) {
          displayCircle(eval(upperRight[i]), upperRight[i]);
          break;
        } else {
          displayCircle(eval(upperRight[i]), upperRight[i]);
        }
      }
      // Placing in the lower left diagonal circles
      for (var i = 0; i < lowerLeft.length; i++) {
        if (isSquareOccupied(lowerLeft[i], "black")) {
          break;
        } else if (isSquareOccupied(lowerLeft[i], "white")) {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
          break;
        } else {
          displayCircle(eval(lowerLeft[i]), lowerLeft[i]);
        }
      }
      // Placing in the lower right diagonal circles
      for (var i = 0; i < lowerRight.length; i++) {
        if (isSquareOccupied(lowerRight[i], "black")) {
          break;
        } else if (isSquareOccupied(lowerRight[i], "white")) {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
          break;
        } else {
          displayCircle(eval(lowerRight[i]), lowerRight[i]);
        }
      }
    // done with circles for now...
    queue = piece;

    hpInfo.innerHTML = blackPieceInfo.get(piece)[0];

    attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    }

    else if (piece.includes("white") && playerTurn == "black") {
      hpInfo.innerHTML = whitePieceInfo.get(piece)[0];
      attackInfo.innerHTML = whitePieceInfo.get(piece)[1];
    } else if (piece.includes("black") && playerTurn == "white") {
      hpInfo.innerHTML = blackPieceInfo.get(piece)[0];
      attackInfo.innerHTML = blackPieceInfo.get(piece)[1];
    }
  }
}

function displayCircle(squareCoordinates, square) { // We're just going to use the square constant for the coordinates (get coords by array index)
  //console.log("Here");
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "image");
  circle.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/blueRing.png");
  circle.setAttribute("height", "60");
  circle.setAttribute("width", "60");
  circle.setAttribute("x", squareCoordinates[0]); // This means we'll need to add 2 to both dimensions when converting back in the move function // Actually maybe not now...
  circle.setAttribute("y", squareCoordinates[1]);
  var id = "circle" + square;
  circle.setAttribute("id", id);
  circle.setAttribute("onclick", "move(id)");
  canvas.appendChild(circle);
  circleQueue.push(id);
}


// Two separate functions, check and kingDeath/gameOver will be called from inside the movement function
// Same with promotion
function move(space) {
  // First part of the code of the move function, switching the turn of the players
  // In retrospect, this shouldn't be the first part of the function
  // In retro-retrospect, it might actually be fine
  if (queue=="whiteKing"){
    console.log("please work");
    console.log(wkingside);
    wkingside=false;
    wqueenside=false;
    console.log(wkingside);
  }
  var square = space.replace("circle", "")
  if (playerTurn == "white" && isSquareOccupied(space.replace("circle", ""), "black")) {
    playerTurn = "black";
    var enemy = isSquareOccupied(space.replace("circle", ""), "black");
    var dice = "roll" + whitePieceInfo.get(queue)[1] + "()";
    var damage = eval(dice);
    blackPieceInfo.set(enemy, [blackPieceInfo.get(enemy)[0] - damage, blackPieceInfo.get(enemy)[1]]);
    
    // Sound effect
    if (blackPieceInfo.get(enemy)[0] > 0) {
      var sound = new Audio("sword-hit-double.mp3");
      sound.play();
    } else {
      var sound = new Audio("knife-thrust-into-wall-new.mp3");
      sound.play();
    }
    
    // Letting the player know that they did some damage by creating some text; A story in lines of code
    // Creating text element
    var damageText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // Defining it's position (relative to the position of the enemy piece so it looks cool and stuff)
    damageText.setAttribute("x", (parseFloat(document.getElementById(enemy).getAttribute("x")) + 48));
    damageText.setAttribute("y", parseFloat(document.getElementById(enemy).getAttribute("y")) + 20);
    // Defining other stuff
    damageText.setAttribute("fill", "#ff0000"); // Original: #c92516
    damageText.setAttribute("font-family", "'Alumni Sans'");
    damageText.setAttribute("font-size", "30");
    damageText.textContent = damage;
    var canvas = document.getElementById("svgCanvas");
    canvas.appendChild(damageText);
    // Adding animate element for fade
    var fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("dur", "1s");
    fade.setAttribute("values", "0;1;0");
    damageText.appendChild(fade);
    fade.beginElement();
    damageText.setAttribute("opacity", "0")
    
    if (blackPieceInfo.get(enemy)[0] <= 0) {
      // Moving image to capture area
      var removedPiece = document.getElementById(enemy);
      removedPiece.setAttribute("x", whiteCaptureCase[whiteCaseIndex][0]);
      removedPiece.setAttribute("y", whiteCaptureCase[whiteCaseIndex][1]);
      whiteCaseIndex += 1;
      // Checking if killed piece is king
      if (enemy == "blackKing") {
        endgame(); // We're in the endgame now
      }
      // Voiding piece position
      blackPiecePositions.set(enemy, "N/A");
      // Deleting onclick function
      removedPiece.setAttribute("onclick", "");
      // Moving piece image to new position
      var movedPiece = document.getElementById(queue);
      movedPiece.setAttribute("x", eval(square)[0]);
      movedPiece.setAttribute("y", eval(square)[1]);
      // Setting new piece coordinates
      whitePiecePositions.set(queue, square);
      whitePieceInfo.set(movedPiece, square);

      // Promotion stuff
      var backRank = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
      if (backRank.includes(whitePiecePositions.get(movedPiece.id)) && movedPiece.id.includes("whitePawn")) {
        promotion(movedPiece.id, square);
      }
    }
    
    // Removing circles
    queue = "";
    //whitePieceInfo.set(movedPiece, square);
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    
    // Making the pawn do the promotion stuff (but only if it wants to)
    //var backRank = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
    // Previous Code Below
    // if (backRank.includes(whitePiecePositions.get(movedPiece.id))) {
    //   promotion();
    // }
    // var backRank = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
    // if (backRank.includes(whitePiecePositions.get(movedPiece.id)) && movedPiece.id.includes("whitePawn")) {
    //   promotion(movedPiece.id);
    // }
    
  } else if (playerTurn == "black" && isSquareOccupied(space.replace("circle", ""), "white")) {
    playerTurn = "white";
    var enemy = isSquareOccupied(space.replace("circle", ""), "white");
    console.log(enemy)
    var dice = "roll" + blackPieceInfo.get(queue)[1] + "()";
    var damage = eval(dice);
    whitePieceInfo.set(enemy, [whitePieceInfo.get(enemy)[0] - damage, whitePieceInfo.get(enemy)[1]]);
     // Sound effect
    if (whitePieceInfo.get(enemy)[0] > 0) {
      var sound = new Audio("sword-hit-double.mp3");
      sound.play();
    } else {
      var sound = new Audio("knife-thrust-into-wall-new.mp3");
      sound.play();
    }
    // Letting the player know that they did some damage by creating some text; A story in lines of code
    // Creating text element
    var damageText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // Defining it's position (relative to the position of the enemy piece so it looks cool and stuff)
    damageText.setAttribute("x", parseFloat(document.getElementById(enemy).getAttribute("x")) + 48);
    damageText.setAttribute("y", parseFloat(document.getElementById(enemy).getAttribute("y")) + 20);
    // Defining other stuff
    damageText.setAttribute("fill", "#ff0000"); // Original color #c92516
    damageText.setAttribute("font-family", "'Alumni Sans'");
    damageText.setAttribute("font-size", "30");
    damageText.textContent = damage;
    var canvas = document.getElementById("svgCanvas");
    canvas.appendChild(damageText);
    // Adding animate element for fade
    var fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("dur", "1s");
    fade.setAttribute("values", "0;1;0");
    damageText.appendChild(fade);
    fade.beginElement();
    damageText.setAttribute("opacity", "0")
    if (whitePieceInfo.get(enemy)[0] <= 0) {
      // Moving image to capture area
      var removedPiece = document.getElementById(enemy);
      removedPiece.setAttribute("x", blackCaptureCase[blackCaseIndex][0]);
      removedPiece.setAttribute("y", blackCaptureCase[blackCaseIndex][1]);
      blackCaseIndex += 1;
      // Checking if killed piece is king
      if (enemy == "whiteKing") {
        endgame(); // We're in the endgame now
      }
      // Voiding piece position
      whitePiecePositions.set(enemy, "N/A");
      // Deleting onclick function
      removedPiece.setAttribute("onclick", "");
      // Moving piece to new position
      var movedPiece = document.getElementById(queue);
      movedPiece.setAttribute("x", eval(square)[0]);
      movedPiece.setAttribute("y", eval(square)[1]);
      // Setting new piece coordinates
      blackPiecePositions.set(queue, square);
      blackPieceInfo.set(movedPiece, square);

      // Promotion stuff
      var backRank = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
      if (backRank.includes(blackPiecePositions.get(movedPiece.id)) && movedPiece.id.includes("blackPawn")) {
        promotion(movedPiece.id, square);
      }
    }
    // Removing circles
    queue = "";
    //blackPieceInfo.set(movedPiece, square);
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    // var backRank = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    // if (backRank.includes(blackPiecePositions.get(movedPiece.id)) && movedPiece.id.includes("blackPawn")) {
    //   promotion(movedPiece.id);
    // }
    
  } else if (playerTurn == "white" && !isSquareOccupied(space.replace("circle", ""), "black")) {
    playerTurn = "black";
    // Moving piece to new position
    var movedPiece = document.getElementById(queue);
    movedPiece.setAttribute("x", eval(square)[0]);
    movedPiece.setAttribute("y", eval(square)[1]);
    // Setting new piece coordinates
    whitePiecePositions.set(queue, square);
    // Removing circles
    queue = "";
    whitePieceInfo.set(movedPiece, square);
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    var backRank = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
    if (backRank.includes(whitePiecePositions.get(movedPiece.id)) && movedPiece.id.includes("whitePawn")) {
      promotion(movedPiece.id, square);
    }
  } else if (playerTurn == "black" && !isSquareOccupied(space.replace("circle", ""), "white")) {
    playerTurn = "white";
    // Moving piece to new position
    var movedPiece = document.getElementById(queue);
    movedPiece.setAttribute("x", eval(square)[0]);
    movedPiece.setAttribute("y", eval(square)[1]);
    // Setting new piece coordinates
    blackPiecePositions.set(queue, square);
    // Removing circles
    queue = "";
    blackPieceInfo.set(movedPiece, square);
    for (var i = 0; i < circleQueue.length; i++) {
      document.getElementById(circleQueue[i]).remove();
    }
    for (var i = circleQueue.length; i == circleQueue.length; i-= 1) {
      circleQueue.splice(0, 1);
    }
    var backRank = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    if (backRank.includes(blackPiecePositions.get(movedPiece.id)) && movedPiece.id.includes("blackPawn")) {
      promotion(movedPiece.id, square);
    }
  }
  
  // Proof of concept, not not inaccurate code
  // Gets name of piece (if applicable) whereeever a circle is
  console.log(space.replace("circle", ""));
  isSquareOccupied(space.replace("circle", ""), "white");
  isSquareOccupied(space.replace("circle", ""), "black");
console.log(isSquareOccupied("d2","black"));
//console.log(getElementById(right));
/* How to move pieces tutorial sponsored by SkillShare
var blackQueen = document.getElementById("blackQueen");
blackQueen.setAttribute("x", 300);
blackQueen.setAttribute("y", 250);
*/
  
  // Piece being moved will be placed at the coordinates of the circle (by getting the circle id and x and y attributes of it) plus two for the x and y values

  // If there is a piece where the circle being moved to/activated is, we will remove the piece and then place the queued piece (piece the player whose turn it is wanted to move) there
  // Okay, scratch that, it won't actually be removed because of hit points and stuff. Instead it'll just have damage dealt to it and, if it does not die, basically nothing on the board will change besides the piece that was being attacked's health points. However, if it is killed, it will need to be removed and the other piece that killed it will need to take its place
}

//displayCircle(a7, "a7");
//displayCircle(e1, "e1");
//displayCircle(eval("e2"), "e2"); // Convert ASCII from movement algorithms into letters then combine string with number string (the second part of the square nomenclature) and create the circles using an eval command.
// This should allow us to use simple operations to calculate each of the possible squares a piece can move to (left upper diagonal, left lower diagonal, right upper diagonal, right lower diagonal, up vertical, down vertical, left horizontal, right horizontal) and then create squares wherever they are needed based off of the available movement options. Also important to remember that each of these movement directions will likely be saved in an array so that the value can be iterated through easily, and that the array will stop at the first obstacle to movement (inclusive to enemy pieces, exclusive to friendly pieces).



/*
var test = document.getElementById("whitePawn4");
var test1 = test.getAttribute("x";
console.log(test1);)
*/

function rolld4 () {
  var roll = Math.floor(Math.random() * 4) + 1;
  return roll;
}

function rolld6 () {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function rolld10 () {
  var roll = Math.floor(Math.random() * 10) + 1;
  return roll;
}

function rolld12 () {
  var roll = Math.floor(Math.random() * 12) + 1;
  return roll;
}

function rolld20 () {
  var roll = Math.floor(Math.random() * 20) + 1;
  return roll;
}

function roll24d1() {
  var roll = 24;
  return roll;
}

// I can't think of a better solution to the problem of having to pass information between three functions (including one that's an onclick event) to get the promotion SVG box stuff to work properly, so we're using global variables. Technically we could store data inside the ids for the various SVG components of the promotion UI box, but that's kind of stupid. So we'll use global variables instead. The promotion function will create the SVG box and store the piece and square values. Each component of the box will have an onclick event that calls the actual promotion logic and returns the chosen piece. But even that may not work unless I can get the onlick part of each box to return a specific parameter. And if I can store a string as a parameter for the event, maybe we can store the piece and square information too?


function promotion(piece, square) {
  //const img = document.createElement("img")
  //img.src = "Images/whitePawn.png";
  // Make the SVG stuff here
  var queenRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  queenRect.setAttribute("x",  247.5);
  queenRect.setAttribute("y", 229);
  queenRect.setAttribute("fill", "#4c4c4c");
  queenRect.setAttribute("stroke", "#000");
  queenRect.setAttribute("width", "309");
  queenRect.setAttribute("height", "61");
  queenRect.textContent = damage;
  var canvas = document.getElementById("svgCanvas");
  canvas.appendChild(queenRect);
  // This below is for your future use and convenience. Use it wisely... or not at all
  /* var damageText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // Defining it's position (relative to the position of the enemy piece so it looks cool and stuff)
    damageText.setAttribute("x", (parseFloat(document.getElementById(enemy).getAttribute("x")) + 48));
    damageText.setAttribute("y", parseFloat(document.getElementById(enemy).getAttribute("y")) + 20);
    // Defining other stuff
    damageText.setAttribute("fill", "#ff0000"); // Original: #c92516
    damageText.setAttribute("font-family", "'Alumni Sans'");
    damageText.setAttribute("font-size", "30");
    damageText.textContent = damage;
    var canvas = document.getElementById("svgCanvas");
    canvas.appendChild(damageText);*/
  var promotedTo = prompt("Enter b, k, q, or r");
  // Step 1: Remove the pawn image
  var pawn = document.getElementById(piece);
  pawn.remove();
  // Step 2: Create the chosen piece image and sets its coordinates to the pawn's square
  // Step 3: Set the bishop information and position
  // Step 4: Pray
  if (promotedTo == "b") {
    if (piece.includes("whitePawn")) {
      whiteBishopNum++;
      var bishop = document.createElementNS("http://www.w3.org/2000/svg", "image");
      bishop.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/whiteBishop.png");
      bishop.setAttribute("height", "60");
      bishop.setAttribute("width", "60");
      bishop.id="whiteBishop"+whiteBishopNum;
      bishop.setAttribute("onclick", "bishop(id)");
      bishop.setAttribute("x", eval(square)[0]);
      bishop.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(bishop);
      whitePiecePositions.set(bishop.id, whitePiecePositions.get(piece));
      whitePiecePositions.set(piece, null);
      whitePieceInfo.set(bishop.id, [6, "d10"]);
    } else {
      blackBishopNum++;
      var bishop = document.createElementNS("http://www.w3.org/2000/svg", "image");
      bishop.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/blackBishop.png");
      bishop.setAttribute("height", "60");
      bishop.setAttribute("width", "60");
      bishop.id="blackBishop"+blackBishopNum;
      bishop.setAttribute("onclick", "bishop(id)");
      bishop.setAttribute("x", eval(square)[0]);
      bishop.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(bishop);
      blackPiecePositions.set(bishop.id, blackPiecePositions.get(piece));
      blackPiecePositions.set(piece, null);
      blackPieceInfo.set(bishop.id, [6, "d10"]);
    }
    //console.log(promotedTo)
    //console.log("Pawn Square: ", whitePiecePositions.get(piece));
  } else if (promotedTo == "k") {
    if (piece.includes("whitePawn")) {
      whiteKnightNum++;
      var knight = document.createElementNS("http://www.w3.org/2000/svg", "image");
      knight.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/whiteKnight.png");
      knight.setAttribute("height", "60");
      knight.setAttribute("width", "60");
      knight.id="whiteKnight"+whiteKnightNum;
      knight.setAttribute("onclick", "knight(id)");
      knight.setAttribute("x", eval(square)[0]);
      knight.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(knight);
      whitePiecePositions.set(knight.id, whitePiecePositions.get(piece));
      whitePiecePositions.set(piece, null);
      whitePieceInfo.set(knight.id, [10, "d6"]);
    } else {
      blackKnightNum++;
      var knight = document.createElementNS("http://www.w3.org/2000/svg", "image");
      knight.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/blackKnight.png");
      knight.setAttribute("height", "60");
      knight.setAttribute("width", "60");
      knight.id="blackKnight"+blackKnightNum;
      knight.setAttribute("onclick", "knight(id)");
      knight.setAttribute("x", eval(square)[0]);
      knight.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(knight);
      blackPiecePositions.set(knight.id, blackPiecePositions.get(piece));
      blackPiecePositions.set(piece, null);
      blackPieceInfo.set(knight.id, [10, "d6"]);
    }
  } else if (promotedTo == "q") {
    if (piece.includes("whitePawn")) {
      whiteQueenNum++;
      var queen = document.createElementNS("http://www.w3.org/2000/svg", "image");
      queen.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/whiteQueen.png");
      queen.setAttribute("height", "60");
      queen.setAttribute("width", "60");
      queen.id="whiteQueen"+whiteQueenNum;
      queen.setAttribute("onclick", "queen(id)");
      queen.setAttribute("x", eval(square)[0]);
      queen.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(queen);
      whitePiecePositions.set(queen.id, whitePiecePositions.get(piece));
      whitePiecePositions.set(piece, null);
      whitePieceInfo.set(queen.id, [24, "d20"]);
    } else {
      blackQueenNum++;
      var queen = document.createElementNS("http://www.w3.org/2000/svg", "image");
      queen.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/blackQueen.png");
      queen.setAttribute("height", "60");
      queen.setAttribute("width", "60");
      queen.id="blackQueen"+blackQueenNum;
      queen.setAttribute("onclick", "queen(id)");
      queen.setAttribute("x", eval(square)[0]);
      queen.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(queen);
      blackPiecePositions.set(queen.id, blackPiecePositions.get(piece));
      blackPiecePositions.set(piece, null);
      blackPieceInfo.set(queen.id, [24, "d20"]);
    } 
  } else if (promotedTo == "r") {
    if (piece.includes("whitePawn")) {
      whiteRookNum++;
      var rook = document.createElementNS("http://www.w3.org/2000/svg", "image");
      rook.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/whiteRook.png");
      rook.setAttribute("height", "60");
      rook.setAttribute("width", "60");
      rook.id="whiteRook"+whiteRookNum;
      rook.setAttribute("onclick", "rook(id)");
      rook.setAttribute("x", eval(square)[0]);
      rook.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(rook);
      whitePiecePositions.set(rook.id, whitePiecePositions.get(piece));
      whitePiecePositions.set(piece, null);
      whitePieceInfo.set(rook.id, [24, "d20"]);
    } else {
      blackRookNum++;
      var rook = document.createElementNS("http://www.w3.org/2000/svg", "image");
      rook.setAttributeNS("http://www.w3.org/1999/xlink", "href", "Images/blackRook.png");
      rook.setAttribute("height", "60");
      rook.setAttribute("width", "60");
      rook.id="blackRook"+blackRookNum;
      rook.setAttribute("onclick", "rook(id)");
      rook.setAttribute("x", eval(square)[0]);
      rook.setAttribute("y", eval(square)[1]);
      var canvas = document.getElementById("svgCanvas");
      canvas.appendChild(rook);
      blackPiecePositions.set(rook.id, blackPiecePositions.get(piece));
      blackPiecePositions.set(piece, null);
      blackPieceInfo.set(rook.id, [24, "d20"]);
    }
  }
}

function castling(piece) {
  
}

function endgame() {
  gameOver = true;
  // blackRook1.setAttribute("onclick", "");
  // blackRook2.setAttribute("onclick", "");
  // blackKnight1.setAttribute("onclick", "");
  // blackKnight2.setAttribute("onclick", "");
  // blackBishop1.setAttribute("onclick", "");
  // blackBishop2.setAttribute("onclick", "");
  // blackKing.setAttribute("onclick", "");
  // blackQueen.setAttribute("onclick", "");
  // blackPawn1.setAttribute("onclick", "");
  // blackPawn2.setAttribute("onclick", "");
  // blackPawn3.setAttribute("onclick", "");
  // blackPawn4.setAttribute("onclick", "");
  // blackPawn5.setAttribute("onclick", "");
  // blackPawn6.setAttribute("onclick", "");
  // blackPawn7.setAttribute("onclick", "");
  // blackPawn8.setAttribute("onclick", "");
  // whiteRook1.setAttribute("onclick", "");
  // whiteRook2.setAttribute("onclick", "");
  // whiteKnight1.setAttribute("onclick", "");
  // whiteKnight2.setAttribute("onclick", "");
  // whiteBishop1.setAttribute("onclick", "");
  // whiteBishop2.setAttribute("onclick", "");
  // whiteKing.setAttribute("onclick", "");
  // whiteQueen.setAttribute("onclick", "");
  // whitePawn1.setAttribute("onclick", "");
  // whitePawn2.setAttribute("onclick", "");
  // whitePawn3.setAttribute("onclick", "");
  // whitePawn4.setAttribute("onclick", "");
  // whitePawn5.setAttribute("onclick", "");
  // whitePawn6.setAttribute("onclick", "");
  // whitePawn7.setAttribute("onclick", "");
  // whitePawn8.setAttribute("onclick", "");

  var sound = new Audio("mixkit-game-level-completed-2059.wav")
  sound.play();

  gameOverText.setAttribute("font-size", "29");
}