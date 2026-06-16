import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl">Engineering Science</h1>
      <br></br>
      <p>
        This shows the courses available for study in the Engineering Science specialisation.
      </p>
      <br></br>
      <Graph specName="Engineering Science"/>
    </>
  );
}