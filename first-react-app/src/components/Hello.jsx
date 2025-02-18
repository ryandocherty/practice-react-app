function Hello({ greeting, name, emoji }) {
  return (
    <div>
      <h1>
        {greeting}, {name} {emoji}
      </h1>
    </div>
  );
}

export default Hello;
