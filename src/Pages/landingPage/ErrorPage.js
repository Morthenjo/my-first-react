import { text } from "./text/text";

export default function ErrorPage() {
  const { error } = text;
  return (
    <div data-aos="zoom-in">
      <h1>{error.Warning}</h1>
      <p>{error.WarningText}</p>
    </div>
  );
}
