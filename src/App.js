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
      <div className="App">
        <Head></Head>
        <BlockWithTransactions></BlockWithTransactions>
        <TransactionReceipts></TransactionReceipts>
      </div>
    </ExplorerProvider>
  );
}

export default App;
