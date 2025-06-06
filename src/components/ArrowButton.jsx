export default function Button(props) {
  function selecter() {
    const temp = props.id + props.move;
    if (temp > props.lenght) props.setid(1);
    else if (temp < 1) props.setid(props.lenght);
    else props.setid(temp);
  }
  return (
    <>
      <button onClick={selecter} className={props.className}>
        <img src={props.src} alt={props.alt} />
      </button>
    </>
  );
}
