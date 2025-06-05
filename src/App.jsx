import { useEffect, useState } from "react";
import "./App.css";
import ImgBar from "./components/ImgBar";
import FullImg from "./components/FullImg";

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
    <>
      {/* <ImgBar data={data} /> */}
      {data.map((item) => {
        return item.id === id ? <FullImg key={item.id} item={item} /> : null;
      })}
    </>
  );
}
