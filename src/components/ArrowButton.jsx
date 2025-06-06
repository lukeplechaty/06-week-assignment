export default function Button(props) {
  function selecter() {
    const temp = props.id + props.move;
    if (temp > props.lenght) props.setid(1);
    else if (temp < 1) props.setid(props.lenght);
    else props.setid(temp);
  }
  return (
    <>
      <button
        onClick={selecter}
        className={
          `border-2 hover:border-b-fuchsia-800 hover:border-t-amber-400 hover:border-l-blue-600 hover:border-r-emerald-600 bg-white absolute top-1/2 hover:bg-neutral-400 ` +
          props.className
        }
      >
        <img src={props.src} alt={props.alt} />
      </button>
    </>
  );
}
