import { useContext } from "react";
import { CounterContext } from "../../ContextState/CounterContext";

export default function HomePage() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div data-aos="fade-up">
      <h1>Welcome</h1>
      <h2>{count}</h2>
    </div>
  );
}
