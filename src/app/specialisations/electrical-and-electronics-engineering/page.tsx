import Graph from "@/components/courseMap";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Electrical and Electronics Engineering</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Electrical and Electronics specialisation.
      </p>
      <br></br>
      <Graph specName="Electrical and Electronics"/>
    </>
  );
}
