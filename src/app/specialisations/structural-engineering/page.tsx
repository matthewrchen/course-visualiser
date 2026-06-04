import Graph from "@/components/courseMap";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Structural Engineering</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Structural specialisation.
      </p>
      <br></br>
      <Graph specName="Structural"/>
    </>
  );
}