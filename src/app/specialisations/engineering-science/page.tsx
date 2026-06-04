import Graph from "@/components/courseMap";

export default function Page() {
  return (
    <>
      <h1 className="font-sans text-4xl">Engineering Science</h1>
      <br></br>
      <p className="font-sans">
        This shows the courses available for study in the Engineering Science specialisation.
      </p>
      <br></br>
      <Graph specName="Engineering Science"/>
    </>
  );
}