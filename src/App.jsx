import './App.css';
import allerLogo from "./assets/allerLogo.png"

function App() {
  return (
    <div className="App">
      <header></header>
      <main></main>
      <footer>
        Aller Media <br />
        Test Oppgave

        <div>
          <img src={allerLogo} alt="Aller Media" />
          <a href="#">Github kildekode</a>
          <a href="#">Vilde G.B. Epost</a>
        </div> 
      </footer>
    </div>
  );
}

export default App;
