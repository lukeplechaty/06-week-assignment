import SmallImg from "./SmallImg";
import "./ImgBar.css";

export default function ImgBar(props) {
  return (
    <nav className="imgbar">
      {props.data.map((item) => {
        return (
          <SmallImg
            key={item.id}
            item={item}
            setid={props.setid}
            id={props.id}
          />
        );
      })}
    </nav>
  );
}
