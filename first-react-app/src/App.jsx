import Hello from "./components/Hello";

function App() {
  const Jim = {
    name: "Jim",
    greeting: "Hey",
    emoji: "👋",
    queueNumbers: [1, 3, 5, 7, 9],
  };

  const Bob = {
    name: "Bob",
    greeting: "Yo",
    emoji: "👍",
    queueNumbers: [1, 3, 5, 7, 9],
  };

  const Tom = {
    name: "Tom",
    greeting: "Hi",
    emoji: "🤘",
    queueNumbers: [1, 3, 5, 7, 9],
  };

  return (
    <div className="App">
      <Hello person={Jim} />
      <Hello person={Bob} />
      <Hello person={Tom} />
    </div>
  );
}

export default App;
