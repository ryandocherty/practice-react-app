function Hello({ greeting, name, emoji, queueNumbers }) {
  return (
    <div>
      <h1>
        {greeting}, {name} {emoji} {queueNumbers}
      </h1>
    </div>
  );
}

export default Hello;
