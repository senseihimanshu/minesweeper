import React from 'react';
import PropTypes from 'prop-types'
import './Board.css'
import Block from './Block';

function Board({ board, bombsCount, size }){
    const [isEnded, setIsEnded] = React.useState(false);
    const [isWinner, setIsWinner] = React.useState(false);

    var correctClicked = 0;

    console.log(board);

    function checkIsEnded(row, col){
        console.log(correctClicked, size*size - bombsCount);
        board[row][col] === -1 && setIsEnded(true);
        if(correctClicked+1 === size*size - bombsCount) {
            setIsWinner(true);
            setIsEnded(true);
        }
        
        correctClicked++;
        return isEnded;
    }

    const boardUi = board.map((row, rIdx) => {
        return(
            <div key={`row-${rIdx}`} className="row">
                { 
                    row.map((col, cIdx) => {
                        return <Block key={`row-${rIdx}#col-${cIdx}`} className="cell" value={col} rowIdx={rIdx} colIdx={cIdx} checkIsEnded={checkIsEnded} isEnded={isEnded} />
                    })
                }
            </div>
        )
    });

    return(
        <div className="Board">
            { boardUi }
            <div className="Result" style={{ display: isEnded ? "block" : "none" }}>
                { "You " + (isWinner ? "Win!" : "Lose!") }
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