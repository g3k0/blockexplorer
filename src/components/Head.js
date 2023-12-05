import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function Head() {
    const { blockNumber } = useContext(ExplorerContext);


    return (
        <div>
            <div>Latest Block number: {blockNumber}</div>
        </div>
    )
}

export default Head;