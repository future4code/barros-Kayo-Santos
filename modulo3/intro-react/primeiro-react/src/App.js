import logo from './download.png';
import './App.css';

function App() {
  function mensagem() {
    alert("Tenha uma ótima noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, tudo bem? Me chamo Kayo Céshar!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este é meu primeiro site React.
        </p>
        <button onClick={mensagem}>Aperte este botão!</button>
      </header>
    </div>
  );
}

export default App;
