import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UPCOLOR バージョンアップ
        </p>
        <p>言語技術 : Reactjs</p>
        <a
          className="App-link"
          href="https://github.com/0Neokun0/GTM-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          進級制作
        </a>
      </header>
    </div>
  );
}

export default App;
