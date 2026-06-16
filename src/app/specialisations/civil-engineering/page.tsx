import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Civil Engineering</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Civil specialisation.
      </p>
      <br></br>
      <Graph specName="Civil"/>
    </>
  );
}