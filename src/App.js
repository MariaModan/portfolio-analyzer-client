import './App.css';
import AddSymbol from './components/AddSymbol'
import PortfolioSummaryTable from './components/PortfolioSummaryTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddSymbol />
        <PortfolioSummaryTable />
      </header>
    </div>
  );
}

export default App;
