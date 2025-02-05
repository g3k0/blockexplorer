import React, { useEffect, createContext, useState } from 'react';
import {
    getBlockNumberService,
    getBlockWithTransactionsService,
    getTransactionReceiptsService,
    getGasPriceService,
  } from './services';

const ExplorerContext = createContext();

const ExplorerProvider = ({ children }) => {
  const [blockNumber, setBlockNumber] = useState('');
  const [blockWithTransactions, setBlockWithTransactions] = useState('');
  const [transactionReceipts, setTransactionReceipts] = useState('');
  const [gasPrice, setGasPrice] = useState('')

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

    async function getGasPrice() {
      setGasPrice(await getGasPriceService());
    }

    getGasPrice()

  }, [blockWithTransactions.hash]);

  return (
    <ExplorerContext.Provider value={{
        blockNumber,
        blockWithTransactions,
        transactionReceipts,
        gasPrice,
    }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export { ExplorerProvider, ExplorerContext };