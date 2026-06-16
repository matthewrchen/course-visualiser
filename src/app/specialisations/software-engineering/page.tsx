import Graph from "@/components/course-map";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl mb-2">Software Engineering</h1>
      <p className="mb-2">
        This shows the courses available for study in the Software specialisation.
      </p>
      <h2 className="text-2xl mb-2">Notes:</h2>
      <ul className="list-disc list-inside mb-2">
        <li>Students are required to complete SOFTENG 299 (Workshop Practice) in Part II</li>
        <li>Students are required to complete ENGGEN 499 (Practical Work) before and during Part IV</li>
      </ul>
      <Graph specName="Software"/>
    </>
  );
}