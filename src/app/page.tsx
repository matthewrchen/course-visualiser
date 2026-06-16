import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-sans text-4xl">Welcome to Course Visualiser</h1>
      <br></br>
      <p className="font-sans">
        This website shows the progression of courses available for study in the Bachelor of Engineering (Honours) degree.
      </p>
      <p className="font-sans">
        It is useful for knowing the prerequisites of courses, and how electives taken early on can affect your studies further down the line.
      </p>
      <br></br>
      <h1 className="font-sans text-4xl">Specialisations</h1>
      <br></br>
      <ul>
        <li>
          <Link href="/specialisations/biomedical-engineering" className="font-sans">Biomedical Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/chemical-and-materials-engineering" className="font-sans">Chemical and Materials Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/civil-engineering" className="font-sans">Civil Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/computer-systems-engineering" className="font-sans">Computer Systems Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/electrical-and-electronic-engineering" className="font-sans">Electrical and Electronic Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/engineering-science" className="font-sans">Engineering Science</Link>
        </li>
        <li>
          <Link href="/specialisations/mechanical-engineering" className="font-sans">Mechanical Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/mechatronics-engineering" className="font-sans">Mechatronics Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/software-engineering" className="font-sans">Software Engineering</Link>
        </li>
        <li>
          <Link href="/specialisations/structural-engineering" className="font-sans">Structural Engineering</Link>
        </li>
      </ul>
    </>
  );
}
