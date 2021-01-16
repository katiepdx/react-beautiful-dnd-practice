import './App.css';
import WordsList from './components/WordList';
import { draggableList } from './data/mock-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          <WordsList wordsList={draggableList} />
        </ol>
      </header>
    </div>
  );
}

export default App;
