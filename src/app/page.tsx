import Card from "../components/specialisation-card";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Welcome to Course Visualiser</h1>
      <br></br>
      <p>
        This website shows the progression of courses available for study in the Bachelor of Engineering (Honours) degree.
      </p>
      <p>
        It is useful for knowing the prerequisites of courses, and how electives taken early on can affect your studies further down the line.
      </p>
      <br></br>
      <h1 className="text-4xl">Specialisations</h1>
      <br></br>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 justify-items-center p-10 gap-10 bg-gray-100">
        <Card name="Biomedical Engineering" link="/specialisations/biomedical-engineering" iconName="Biomedical" />
        <Card name="Chemical and Materials Engineering" link="/specialisations/chemical-and-materials-engineering" iconName="Chemical" />
        <Card name="Civil Engineering" link="/specialisations/civil-engineering" iconName="Civil" />
        <Card name="Computer Systems Engineering" link="/specialisations/computer-systems-engineering" iconName="Computer" />
        <Card name="Electrical and Electronic Engineering" link="/specialisations/electrical-and-electronic-engineering" iconName="Electrical" />
        <Card name="Engineering Science" link="/specialisations/engineering-science" iconName="Science" />
        <Card name="Mechanical Engineering" link="/specialisations/mechanical-engineering" iconName="Mechanical" />
        <Card name="Mechatronics Engineering" link="/specialisations/mechatronics-engineering" iconName="Mechatronics" />
        <Card name="Software Engineering" link="/specialisations/software-engineering" iconName="Software" />
        <Card name="Structural Engineering" link="/specialisations/structural-engineering" iconName="Structural" />
      </section>
    </>
  );
}
