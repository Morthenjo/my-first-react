import axios from "axios";
import { useEffect, useState } from "react";

export default function CatFacts() {
  const [apiError, setApiError] = useState();
  const [data, setData] = useState();

  // eslint-disable-next-line
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://catfact.ninja/facts")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((res) => {
          setApiError(res);
        });
    };
    getData();
  }, []);

  if (data) {
    return (
      <div className="box">
        <h1>Pussy facts</h1>
        {data.map((item, idx) => (
          <p key={idx}>{item.fact}</p>
        ))}
      </div>
    );
  } else if (apiError) {
    return (
      <div className="box">
        <h1>Failed to load pussy, please try again.</h1>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h1>Here comes the pussies</h1>
      </div>
    );
  }
}
