import SmallImg from "./SmallImg";

export default function ImgBar(props) {
  return (
    <section>
      {props.data.map((item) => {
        return <SmallImg key={item.id} item={item} />;
      })}
    </section>
  );
}
