import "./FullImg.css";
export default function FullImg(props) {
  return (
    <div>
      <img src={props.item.url} alt={props.item.alt} className="full-img" />
    </div>
  );
}
