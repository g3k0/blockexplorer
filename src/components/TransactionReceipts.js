import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';
import { DataGrid } from '@mui/x-data-grid';

function TransactionReceipts() {
    const { transactionReceipts } = useContext(ExplorerContext);


    const columns = [
        { field: 'id', headerName: 'Id', width: 40 },
        { field: 'blockHash', headerName: 'Block Hash', width: 80 },
        { field: 'blockNumber', headerName: 'Block Number', width: 80 },
        { field: 'contractAddress', headerName: 'Contract Address', width: 80 },
        { field: 'cumulativeGasUsed', headerName: 'Cumulative Gas Used', width: 80 },
        { field: 'effectiveGasPrice', headerName: 'Effective Gas Price', width: 80 },
        { field: 'from', headerName: 'From', width: 80 },
        { field: 'gasUsed', headerName: 'Gas Used', width: 80 },
        { field: 'status', headerName: 'Status', width: 80 },
        { field: 'to', headerName: 'To', width: 80 },
        { field: 'transactionHash', headerName: 'Transaction Hash', width: 80 },
        { field: 'transactionIndex', headerName: 'TransactionIndex', width: 80 },
        { field: 'type', headerName: 'Type', width: 80 },
    ];

    let rows = [];
    
    if (transactionReceipts && transactionReceipts.receipts.length) {
        rows = transactionReceipts.receipts.map((receipt, index) => {
            return {
                id: index,
                blockHash: receipt.blockHash,
                blockNumber: receipt.blockNumber,
                contractAddress: receipt.contractAddress,
                cumulativeGasUsed :receipt.cumulativeGasUsed,
                effectiveGasPrice: receipt.effectiveGasPrice,
                from: receipt.from,
                gasUsed: receipt.gasUsed,
                status: receipt.status,
                to: receipt.to,
                transactionHash: receipt.transactionHash,
                transactionIndex: receipt.transactionIndex,
                type: receipt.type,
            }
        });
    }

    return (
        <div className="transaction-receipts">
            <h3>Transaction Recepits</h3>

            {rows.length > 0 ? (
                <DataGrid
                    className="datagrid"
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                />
                ) : (
                <p>No transactions available</p>
                )
            }
        </div>
    )
}

export default TransactionReceipts;