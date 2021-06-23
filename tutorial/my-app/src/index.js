import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  constructor(props) {
    // in JS class, always call super when define constr of subclass.
    // all React comp classes w/constr should start with call below.
    super(props);
    this.state = {
      value: null,
    };
  }


  render() {
    return (
      // `function()` is equivalent to `() =>` in React
      // onClick, sets state from empty to X then displays X
      <button
        className="square"
        onClick={() => { this.setState({ value: 'X' }) }}
      >
        {this.state.value}
      </button>
    );
  }
}



class Board extends React.Component {
  renderSquare(i) {
    return <Square value = { i } />;
  }

  render() {
    const status = 'Next player: X';

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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

