import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

class Square extends React.Component {
 
  render() {
    return (
      <button 
        onClick={ ()=> this.props.onClick() }
        className="square"
        >
          {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
    console.log(this.state)
  }

  handleClick = i => {
    const squares = this.state.squares.slice()
    squares[i]
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={ () => this.handleClick(i)}
    />;
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
 

export default App;
