export default function SmallImg(props) {
  function selecter() {
    props.setid(props.item.id);
  }
  function key(event) {
    if (event.key === `Enter` || event.key === ` `) selecter();
    console.log(event.key);
  }
  return (
    <>
      <img
        src={props.item.url}
        alt={props.item.alt}
        className="h-full border-4 hover:border-b-fuchsia-800 hover:border-t-amber-400 hover:border-l-blue-600 hover:border-r-emerald-600"
        onClick={selecter}
        onKeyDown={key}
        tabIndex="0"
        role="img"
      />
    </>
  );
}
