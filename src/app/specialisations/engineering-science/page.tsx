import Graph from '@/components/course-map';

export default function Page() {
  return (
    <>
      <h1 className="mb-2 text-4xl">Engineering Science</h1>
      <p className="mb-2">
        This shows the courses available for study in the Engineering Science
        specialisation.
      </p>
      <h2 className="mb-2 text-2xl">Notes:</h2>
      <ul className="mb-2 list-inside list-disc">
        <li>
          Students are required to complete ENGSCI 299 (Workshop Practice) in
          Part II
        </li>
        <li>
          Students are required to complete ENGGEN 499 (Practical Work) before
          and during Part IV
        </li>
      </ul>
      <Graph specName="Engineering Science" />
    </>
  );
}
