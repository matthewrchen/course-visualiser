import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-sans text-4xl">Welcome to Course Visualiser</h1>
      <br></br>
      <p className="font-sans">
        This website
      </p>
      <br></br>
      <h1 className="font-sans text-4xl">Specialisations</h1>
      <br></br>
      <ul>
        <li>
          <Link href="" className="font-sans">Electrical and Electronic Engineering</Link>
        </li>
      </ul>
    </>
  );
}
