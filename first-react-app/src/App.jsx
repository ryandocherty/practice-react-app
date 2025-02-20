import Hello from "./components/Hello";

function App() {
  class DefaultPerson {
    constructor(name, greeting, emoji, queueNumbers = []) {
      this.name = name;
      this.greeting = greeting;
      this.emoji = emoji;
      this.queueNumbers = queueNumbers;
    }
  }

  const Jim = new DefaultPerson("Jim", "Hey", "👋", [1, 3, 5, 7, 9]);
  const Bob = new DefaultPerson("Bob", "Yo", "👍", [1, 2, 3, 4, 5]);
  const Tom = new DefaultPerson("Jim", "Hi", "🤘", [0, 2, 4, 6, 8]);

  return (
    <div className="App">
      <Hello person={Jim} />
      <Hello person={Bob} />
      <Hello person={Tom} />
    </div>
  );
}

export default App;
