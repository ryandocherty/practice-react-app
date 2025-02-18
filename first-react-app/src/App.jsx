import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello greeting="Hey" name="Jim" emoji="👋" />
      <Hello greeting="Hello" name="Bob" emoji="👍" />
      <Hello greeting="Hi" name="Tom" emoji="🤘" />
    </div>
  );
}

export default App;
