import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl">Biomedical Engineering</h1>
      <br></br>
      <p>
        This shows the courses available for study in the Biomedical specialisation.
      </p>
      <br></br>
      <Graph specName="Biomedical"/>
    </>
  );
}