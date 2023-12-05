import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';

function TransactionReceipts() {
    const { transactionReceipts } = useContext(ExplorerContext);

    console.log(transactionReceipts)

   /**
    * [{
    *   blockHash: "0x942d4e88d611d63a9c91751d5ef2e7463c6b80929bf3cf665d7fb64bd54cfeea"
        blockNumber: "0x11db152"
        contractAddress: null
        cumulativeGasUsed: "0x23489"
        effectiveGasPrice: "0x2dbe5f904a"
        from: "0xb0ba33566bd35bcb80738810b2868dc1ddd1f0e9"
        gasUsed: "0x23489"
        logs: (3) [{…}, {…}, {…}]
        logsBloom: "0x00000002000000000000000000000000000000000000000000000000000000000000000008000000000000000000004002000000080020000000000000000000000000000000000800000008000000000000000000000000000000000000000000000000000004000000100000080000000000000000000000000010000800000000000000000000000000000000000000000800000004000200004000000000000000000000000000000000a00000000000000000000000000000000000000000000002000000000000000000020000000000000000000000000400000000000000200000000000000000000000000000000000000000000000800000000000"
        status: "0x1"
        to: "0xe592427a0aece92de3edee1f18e0157c05861564"
        transactionHash: "0x5b06be68d027aa39028a45f4f7ad15f7b951ffa7027a0dfa57c2d32a5632ed3a"
        transactionIndex: "0x0"
        type: "0x2"
    * }]
    */

    return (
        <div className="transaction-receipts">
            Transaction Recepits
        </div>
    )
}

export default TransactionReceipts;