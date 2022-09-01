import { CounterContext } from "../../ContextState/CounterContext";
import { useContext } from "react";

const CounterContextPage = () => {
  const { count } = useContext(CounterContext);
  return <h1>{count}</h1>;
};

export default CounterContextPage;
