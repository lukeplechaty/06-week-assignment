export default function FullImg(props) {
  return (
    <div>
      <img
        src={props.item.url}
        alt={props.item.alt}
        className="object-contain h-screen w-screen"
      />
    </div>
  );
}
