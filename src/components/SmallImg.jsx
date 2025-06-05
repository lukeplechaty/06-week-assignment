export default function SmallImg(props) {
  return (
    <div>
      <img src={props.item.url} alt={props.item.alt} />
    </div>
  );
}
