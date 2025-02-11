import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello greeting="Hey" name="Jim" />
      <Hello greeting="Hello" name="Bob" />
      <Hello greeting="Hi" name="Tom" />
    </div>
  );
}

export default App;
