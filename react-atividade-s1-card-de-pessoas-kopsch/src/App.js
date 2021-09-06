import "./App.css";
import Developer from "./components/Developer";
function App() {
  return (
    <div className="App">
      <Developer name="Pedro" age="18" country="Brasil" />
      <Developer name="Mariana" age="25" country="Itália" />
      <Developer name="Prizza" age="21" country="Japão" />
    </div>
  );
}

export default App;
