import React, { useEffect, createContext, useState } from 'react';
import {
    getBlockNumberService,
    getBlockWithTransactionsService,
    getTransactionReceiptsService,
  } from './services';

const ExplorerContext = createContext();

const ExplorerProvider = ({ children }) => {
  const [blockNumber, setBlockNumber] = useState('');
  const [blockWithTransactions, setBlockWithTransactions] = useState('');
  const [transactionReceipts, setTransactionReceipts] = useState('');

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await getBlockNumberService());
    };

    getBlockNumber();

    async function getBlockWithTransaction() {
      setBlockWithTransactions(await getBlockWithTransactionsService('latest'));
    };

    getBlockWithTransaction();

    async function getTransactionReceipts() {
      setTransactionReceipts(await getTransactionReceiptsService({ blockHash: blockWithTransactions.hash }));
    };

    getTransactionReceipts();

  });

  return (
    <ExplorerContext.Provider value={{
        blockNumber,
        blockWithTransactions,
        transactionReceipts
    }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export { ExplorerProvider, ExplorerContext };