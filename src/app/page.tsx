import Link from "next/link";

import Card from "../components/specialisation-card";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Welcome to Course Visualiser</h1>
      <br></br>
      <p>
        This website shows the progression of courses available for study in the Bachelor of Engineering (Honours) degree.
      </p>
      <p>
        It is useful for knowing the prerequisites of courses, and how electives taken early on can affect your studies further down the line.
      </p>
      <br></br>
      <h1 className="text-4xl">Specialisations</h1>
      <br></br>
      <Card name="Biomedical Engineering" link="/specialisations/biomedical-engineering" />
    </>
  );
}
