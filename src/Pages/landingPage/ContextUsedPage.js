import { useContext } from "react";
import CounterContext from "../../components/CounterContext";

const ContextUsedPage = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Context Used</h1>
      <h2>{count}</h2>
    </>
  );
};

export default ContextUsedPage;
