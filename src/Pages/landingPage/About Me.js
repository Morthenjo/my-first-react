import { text } from "./text/text";

export default function AboutMePage() {
  const { about } = text;
  return (
    <div data-Aos="fade-up">
      <h1>{about.headline}</h1>
      <h3>{about.paragraphIntro}</h3>
      <h3>{about.paragraphVolunteer}</h3>
      <h3>{about.paragraphStudy}</h3>
    </div>
  );
}
