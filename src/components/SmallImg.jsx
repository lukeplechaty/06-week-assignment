export default function SmallImg(props) {
  return (
    <div>
      <img src={props.item.image} alt={props.item.alt} />
    </div>
  );
}
