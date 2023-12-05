import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function Head() {
    const { blockNumber, gasPrice } = useContext(ExplorerContext);


    return (
        <div className="App-header">
            <div>
                <img className="App-logo" src="ethereum.webp" alt="ethereum"></img>
                <h3 className="App-title">Ethereum Explorer</h3>
                <p>
                    Latest block number: {blockNumber}
                    <br/>
                    Gas price (Wei): {parseInt(gasPrice, 16)}
                </p>
            </div>
        </div>
    )
}

export default Head;