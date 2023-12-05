import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function BlockWithTransactions(props) {
    const { blockWithTransactions } = useContext(ExplorerContext);

    return (
        <div>
            Latest Block data:
            <ul>
                <li>Base fee per gas: {parseInt(blockWithTransactions.baseFeePerGas, 16)}</li>
                <li>Difficulty: {blockWithTransactions.difficulty}</li>
                <li>Extra data: {blockWithTransactions.extraData}</li>
                <li>Gas Limit: {parseInt(blockWithTransactions.gasLimit, 16)}</li>
                <li>Gas Used: {parseInt(blockWithTransactions.gasUsed, 16)}</li>
                <li>Hash: {blockWithTransactions.hash}</li>
                <li>Miner: {blockWithTransactions.miner}</li>
                <li>Nonce: {blockWithTransactions.nonce}</li>
                <li>Number: {blockWithTransactions.number}</li>
                <li>Parent hash: {blockWithTransactions.parentHash}</li>
                <li>Timestamp: {blockWithTransactions.timestamp}</li>
                {/*<li>{blockWithTransactions.transactions}</li>*/}
            </ul>
        </div>
    )

}

export default BlockWithTransactions