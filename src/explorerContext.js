import React, { useEffect, createContext, useState } from 'react';
import {
    getBlockNumberService,
    getBlockWithTransactionsService
  } from './services';

const ExplorerContext = createContext();

const ExplorerProvider = ({ children }) => {
  const [blockNumber, setBlockNumber] = useState('');
  const [block, setBlock] = useState('');

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await getBlockNumberService());
    }

    getBlockNumber();

    async function getBlockWithTransaction() {
      setBlock(await getBlockWithTransactionsService('latest'));
    }

    getBlockWithTransaction();
  });

  return (
    <ExplorerContext.Provider value={{
        blockNumber,
        block
    }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export { ExplorerProvider, ExplorerContext };