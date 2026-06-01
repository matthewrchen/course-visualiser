import Graph from "@/components/courseMap";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Electrical and Electronic Engineering</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Electrical and Electronic specialisation.
      </p>
      <br></br>
      <Graph specName="Electrical and Electronic"/>
    </>
  );
}