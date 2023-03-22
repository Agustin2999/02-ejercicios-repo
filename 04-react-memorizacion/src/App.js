import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <h3>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
        >
          memo 
          {/* Memo lo que hace basicamente es dejar en cache elementos que se renderizan una y otra vez pero no cambian de valor. es decir, es una manera de ahorrar energia incluso renderizando */}
        </a>
      </h3>
      <h3/>
      <Contador/>
    </div>
  );
}

export default App;
