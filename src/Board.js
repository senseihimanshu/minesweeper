import React from 'react';
import PropTypes from 'prop-types'
import './Board.css'
import Block from './Block';

function Board({ board, bombsCount, size }){
    const [isEnded, setIsEnded] = React.useState(false);
    console.log(board, bombsCount);
    var correctClicked = 0;
    var winner = false;

    function checkIsEnded(row, col){
        board[row][col] === -1 && setIsEnded(true);
        if(correctClicked === size*size - bombsCount) {
            setIsEnded(true);
            winner = true;
        }
        
        correctClicked++;
    }

    const boardUi = board.map((row, rIdx) => {
        return(
            <div key={`row-${rIdx}`} className="row">
                { 
                    row.map((col, cIdx) => {
                        return <Block key={`row-${rIdx}#col-${cIdx}`} className="cell" value={col} rowIdx={rIdx} colIdx={cIdx} checkIsEnded={checkIsEnded} />
                    })
                }
            </div>
        )
    });

    return(
        <div className="Board">
            { boardUi }
            <div className="Result" style={{ display: isEnded ? "block" : "none" }}>
                { "You " + (winner ? "Win!" : "Lose!") }
            </div>
        </div>
    );
}

Board.propTypes = {
    board: PropTypes.array,
    bombsCount: PropTypes.number,
    size: PropTypes.number
}

export default Board;