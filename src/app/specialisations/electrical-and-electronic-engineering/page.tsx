import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl">Electrical and Electronic Engineering</h1>
      <br></br>
      <p>
        This shows the courses available for study in the Electrical and Electronic specialisation.
      </p>
      <br></br>
      <Graph specName="Electrical and Electronic"/>
    </>
  );
}