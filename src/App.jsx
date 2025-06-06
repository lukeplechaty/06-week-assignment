import { useEffect, useState } from "react";
import "./App.css";
import ImgBar from "./components/ImgBar";
import FullImg from "./components/FullImg";
import ArrowButton from "./components/ArrowButton";

export default function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getDate() {
      const respons = await fetch(import.meta.env.VITE_API_URL);
      const jsonData = await respons.json();
      setData(jsonData);
    }
    getDate();
  }, []);

  return (
    <main>
      <ImgBar data={data} setid={setId} id={id} />
      <ArrowButton
        src="./left.png"
        alt="left arrow button"
        className="left-5"
        setid={setId}
        id={id}
        move={-1}
        lenght={data.length}
      />
      <ArrowButton
        src="./right.png"
        alt="right arrow button"
        className="right-5"
        setid={setId}
        id={id}
        move={1}
        lenght={data.length}
      />
      {data.map((item) => {
        return item.id === id ? <FullImg key={item.id} item={item} /> : null;
      })}
    </main>
  );
}
