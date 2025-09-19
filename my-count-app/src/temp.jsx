function Welcome(props) {
  return <h2>Welcome {props.name}!</h2>;
}

function Temp() {
  return (
    <div>
      <Welcome name="Gowla" />
      <Welcome name="Afiya" />
    </div>
  );
}
