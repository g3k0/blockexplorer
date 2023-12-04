import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function BlockWithTransactions(props) {
    const { blockNumber, block } = useContext(ExplorerContext);

    return (
        <div>
            <div>Block number: {blockNumber}</div>
            <div>
                Block data:
                <ul>
                    <li>Base fee per gas: {parseInt(block.baseFeePerGas, 16)}</li>
                    <li>Difficulty: {block.difficulty}</li>
                    <li>Extra data: {block.extraData}</li>
                    <li>Gas Limit: {parseInt(block.gasLimit, 16)}</li>
                    <li>Gas Used: {parseInt(block.gasUsed, 16)}</li>
                    <li>Hash: {block.hash}</li>
                    <li>Miner: {block.miner}</li>
                    <li>Nonce: {block.nonce}</li>
                    <li>Number: {block.number}</li>
                    <li>Parent hash: {block.parentHash}</li>
                    <li>Timestamp: {block.timestamp}</li>
                    {/*<li>{block.transactions}</li>*/}
                </ul>
            </div>
        </div>
    )

}

export default BlockWithTransactions