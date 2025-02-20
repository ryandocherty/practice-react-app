function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.greeting}, {person.name}
        {person.emoji} {person.queueNumbers}
      </h1>
    </div>
  );
}

export default Hello;
