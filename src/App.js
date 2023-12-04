import { ExplorerProvider } from './explorerContext';
import { BlockWithTransactions } from './components'

import './App.css';


function App() {


  return (
    <ExplorerProvider>
      <div className="App">
        <BlockWithTransactions></BlockWithTransactions>
      </div>
    </ExplorerProvider>
  );
}

export default App;
