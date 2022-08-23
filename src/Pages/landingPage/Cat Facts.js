import axios from "axios";
import { useEffect, useState } from "react";

export default function CatFacts() {
  const setApiError = "No pussies found";
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://catfact.ninja/facts?page=2")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((res) => {
        setApiError(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Here comes the pussies</h1>
      {data.map((item, idx) => (
        <p key={idx}>{item.fact}</p>
      ))}
    </div>
  );
}
