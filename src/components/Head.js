import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function Head() {
    const { blockNumber } = useContext(ExplorerContext);


    return (
        <div className="App-header">
            <div>
                <img className="App-logo" src="ethereum.webp" alt="ethereum"></img>
                <h3 className="App-title">Ethereum Explorer</h3>
                <p>
                    Latest Block number: {blockNumber}
                </p>
            </div>
        </div>
    )
}

export default Head;