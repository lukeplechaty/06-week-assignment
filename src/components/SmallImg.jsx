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
        className="h-full"
        onClick={selecter}
        onKeyDown={key}
        tabIndex="0"
        role="img"
      />
    </>
  );
}
