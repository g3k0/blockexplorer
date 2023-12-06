import React, { useContext } from 'react';
import { ExplorerContext } from '../explorerContext';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DoneIcon from '@mui/icons-material/Done';
import StorageIcon from '@mui/icons-material/Storage';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TagIcon from '@mui/icons-material/Tag';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function BlockWithTransactions(props) {
    const { blockWithTransactions } = useContext(ExplorerContext);

    const items = [
        {
            key: 0,
            icon: <ViewWeekIcon />,
            text: <ListItemText primary={`Number: ${blockWithTransactions.number}`} />
        },
        {
            key: 1,
            icon: <TagIcon />,
            text: <ListItemText primary={`Hash: ${blockWithTransactions.hash}`} />
        },
        {
            key: 2,
            icon: <TagIcon />,
            text: <ListItemText primary={`Parent hash: ${blockWithTransactions.parentHash}`} />
        },
        {
            key: 3,
            icon: <DoneIcon />,
            text: <ListItemText primary={`Difficulty: ${blockWithTransactions.difficulty}`} />
        },
        {
            key: 4,
            icon: <MonetizationOnIcon />,
            text: <ListItemText primary={`Base fee per gas: ${parseInt(blockWithTransactions.baseFeePerGas, 16)}`} />
        },
        {
            key: 5,
            icon: <LocalGasStationIcon />,
            text: <ListItemText primary={`Gas Used: ${parseInt(blockWithTransactions.gasUsed, 16)}`} />
        },
        {
            key: 6,
            icon: <LocalGasStationIcon />,
            text: <ListItemText primary={`Gas Limit: ${parseInt(blockWithTransactions.gasLimit, 16)}`} />
        },
        {
            key: 7,
            icon: <EngineeringIcon />,
            text: <ListItemText primary={`Miner: ${blockWithTransactions.miner}`} />
        },
        {
            key: 8,
            icon: <StorageIcon />,
            text: <ListItemText primary={`Extra data: ${blockWithTransactions.extraData}`} />
        },
        {
            key: 9,
            icon: <QueryBuilderIcon />,
            text: <ListItemText primary={`Timestamp: ${blockWithTransactions.timestamp}`} />
        }
    ];

    const columns = [
        { field: 'id', headerName: 'Id', width: 40 },
        { field: 'chainId', headerName: 'Chain Id', width: 70 },
        { field: 'confirmations', headerName: 'Confirmations', width: 110 },
        { field: 'from', headerName: 'From', width: 130 },
        { field: 'to', headerName: 'To', width: 130 },
        { field: 'maxPriorityFeePerGas', headerName: 'Max Priority Fee Per Gas', width: 130 },
        { field: 'nonce', headerName: 'Nonce', width: 130 },
    ];

    const rows = blockWithTransactions?.transactions?.map((transaction, index) => {
        return {
            id: index,
            chainId: transaction.chainId,
            confirmations: transaction.confirmations,
            from: transaction.from,
            to: transaction.to,
            maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
            nonce: transaction.nonce
        };
    });


    return (
        <div className="block-with-transactions">
            <h3>Latest Block data</h3>

            <List component="nav" aria-label="main mailbox folders">
                {items.map((item) => (
                    <ListItemButton key={item.key}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        {item.text}
                    </ListItemButton>
                ))}
            </List>

            <Divider className="divider" />

            {blockWithTransactions?.transactions?.length > 0 ? (
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
                )}
        </div>
    )

}

export default BlockWithTransactions