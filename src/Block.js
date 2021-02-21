import React from 'react';
import PropTypes from 'prop-types'

import './Block.css';

function Block({ value, checkIsEnded, rowIdx, colIdx }){
    const [isClicked, setIsClicked] = React.useState(false);

    function handleClick(){
        setIsClicked(true);
        checkIsEnded(rowIdx, colIdx);
    }

    return(
        <div className="Block" onClick={!isClicked ? handleClick : undefined}>
            { isClicked ? value : '' }
        </div>
    );
}

Block.propTypes = {
    value: PropTypes.number,
    checkIsEnded: PropTypes.func,
    rowIdx: PropTypes.number,
    colIdx: PropTypes.number,
}

export default Block;