import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Square extends React.Component {
//         render() {
//           return (
//             <button 
//                 className="square"
//                 onClick={() => this.props.onClick({value: 'X'})}
//                 >
//               {this.props.value}
//             </button>
//           );
//         }
// }
function Square(props) {
        return (
                <buton className="square" onClick={props.onClick}>
                        {props.value}
                </buton>
        )
}
      
class Board extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        sqaures: Array(9).fill(null),
                        xIsNext: true,
                };
        }
        handleClick(i) {
                const sqaures = this.state.sqaures.slice();
                sqaures[i] = this.state.xIsNext ? 'X' : 'O';
                // sqaures[i] = 'X';
                this.setState({
                        sqaures: sqaures,
                        xIsNext: !this.state.xIsNext,
                });
        }
        renderSquare(i) {
          return <Square 
                value={this.state.sqaures[i]}
                onClick={() => this.handleClick(i)}
           />;
        }
      
        render() {
          const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      
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
      