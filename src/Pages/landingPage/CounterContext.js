import { CounterContext } from "../../ContextState/CounterContext";
import { useContext } from "react";

const CounterContextPage = () => {
  const { count, setCount } = useContext(CounterContext);
  const Add = () => {
    setCount((count) => count + 1);
  };
  const Substract = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="center">
      <h1>{count}</h1>
      <button onClick={Add}> + </button>
      <button onClick={Substract}> - </button>
    </div>
  );
};

export default CounterContextPage;
