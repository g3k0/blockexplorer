import {
  getBlockNumberService
} from './services'
import { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await getBlockNumberService());
    }

    getBlockNumber();
  });

  return <div className="App">Block Number: {blockNumber}</div>;
}

export default App;
