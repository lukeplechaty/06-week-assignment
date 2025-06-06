import SmallImg from "./SmallImg";
import "./ImgBar.css";

export default function ImgBar(props) {
  return (
    <section className="imgbar">
      {props.data.map((item) => {
        return <SmallImg key={item.id} item={item} setid={props.setid} />;
      })}
    </section>
  );
}
