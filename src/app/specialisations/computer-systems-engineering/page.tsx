import Graph from "@/components/courseMap";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Computer Systems Engineering</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Computer Systems specialisation.
      </p>
      <br></br>
      <Graph specName="Computer Systems"/>
    </>
  );
}