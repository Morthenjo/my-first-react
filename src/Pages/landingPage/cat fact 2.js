import axios from "axios";
import { useEffect, useState } from "react";
import Cat from "../../components/cat";

export default function CatFacts2() {
  const [apiError, setApiError] = useState();
  const [data, setData] = useState();

  function refresh() {
    window.location.reload(false);
  }

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://catfact.ninja/fact")
        .then((res) => {
          setData(res.data.fact);
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
        <div className="flex">
          <h1 className="center">Pussy facts</h1>
          <button onClick={refresh} className="newCatFact">
            New Cat Fact
          </button>
        </div>
        <div className="flex">
          <p className="paragraph">{data}</p>
          <Cat />
        </div>
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
