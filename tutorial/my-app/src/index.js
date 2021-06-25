import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// altered to be function component
// simple component, only render method, no state
function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick} //changed from old way
    >
      {props.value}
    </button>
  );
}

// OLD CLASS METHOD
// class Square extends React.Component {
//   constructor(props) {
//     // in JS class, always call super when define constr of subclass.
//     // all React comp classes w/constr should start with call below.
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       // `function()` is equivalent to `() =>` in React
//       // onClick, sets state from empty to X then displays X
//       <button
//         className="square"
//         onClick={() => { this.props.onClick()} }
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
//


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  // Square components no longer maintain state
  // recieve values from Board component
  // Square components are now 'controlled components'
  handleClick(i) {
    // copy arr not modify for simplicity, change detection, re-redering
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : '0';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

