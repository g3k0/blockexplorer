import { ExplorerProvider } from './explorerContext';
import { 
  BlockWithTransactions, 
  TransactionReceipts,
  Head 
} from './components'

import './App.css';


function App() {


  return (
    <ExplorerProvider>
      <Head></Head>
      <div className="App">
        <BlockWithTransactions></BlockWithTransactions>
        <TransactionReceipts></TransactionReceipts>
      </div>
    </ExplorerProvider>
  );
}

export default App;
