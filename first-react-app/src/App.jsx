import Hello from "./components/Hello";

function App() {
  const queueNumbers = [1, 3, 5, 7, 9];

  return (
    <div className="App">
      <Hello greeting="Hey" name="Jim" emoji="👋" queueNumbers={queueNumbers} />
      <Hello greeting="Yo" name="Bob" emoji="👍" queueNumbers={queueNumbers} />
      <Hello greeting="Hi" name="Tom" emoji="🤘" queueNumbers={queueNumbers} />
    </div>
  );
}

export default App;
