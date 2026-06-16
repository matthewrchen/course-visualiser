import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl">Computer Systems Engineering</h1>
      <br></br>
      <p>
        This shows the courses available for study in the Computer Systems specialisation.
      </p>
      <br></br>
      <Graph specName="Computer Systems"/>
    </>
  );
}