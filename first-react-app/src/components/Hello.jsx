function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.greeting}, {props.name}
      </h1>
    </div>
  );
}

export default Hello;
