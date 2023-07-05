/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.makeBoard();
    this.players = []
    this.currPlayer = null;
    this.gameRunning = false;
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }

    const board = document.getElementById('board');
    board.innerHTML = '';

    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');

    this.handleGameClick = this.handleClick.bind(this);
    top.addEventListener('click', this.handleGameClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

      board.append(top);

      for (let y = 0; y < this.height; y++) {
        const row = document.createElement('tr');
    
        for (let x = 0; x < this.width; x++) {
          const cell = document.createElement('td');
          cell.setAttribute('id', `${y}-${x}`);
          row.append(cell);
        }
    
        board.append(row);
      }
  }

  handleClick(evt) {
    if (this.gameRunning === true) {
      // get x from ID of clicked cell
      const x = +evt.target.id;
      
      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }
    
      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);

      // check for win
      if (this.checkForWin()) {
        return this.endGame(`The ${this.currPlayer.color} player won!`);
      }

      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }

      // switch players
      this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
    }
  }


  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`${this.currPlayer.color}`);
    piece.style.top = -50 * (y + 2);
    piece.style.backgroundColor = this.currPlayer.color;
  
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  checkForWin() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (this.win(horiz) || this.win(vert) || this.win(diagDR) || this.win(diagDL)) {
          return true;
        }
      }
    }
  }

  win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] === this.currPlayer
    );
  }

  endGame(msg) {
    alert(msg);
    this.gameRunning = false;
  }
}

class Player {
  constructor(color) {
    this.color = color;
  }
}

const startGame = (e) => {
  e.preventDefault();
  const players = makePlayers();
  myGame.makeBoard();
  myGame.players = players;
  myGame.currPlayer = myGame.players[0];
  myGame.gameRunning = true;

  document.querySelector('#color-button').innerText = "Restart Game"
}

const makePlayers = () => {
  const p1 = document.querySelector("#p1").value;
  const p2 = document.querySelector("#p2").value;
  const player1 = new Player(p1);
  const player2 = new Player(p2);

  document.querySelector('#color-form').reset();

  return [player1, player2]
}

const colorForm = document.querySelector("#color-form");
colorForm.addEventListener("submit", startGame);

const myGame = new Game(7, 6);

