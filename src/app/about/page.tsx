export default function About() {
  return (
    <>
      <h1 className="mb-2 text-4xl">About</h1>
      <p className="mb-2">
        This website shows the progression of courses in the Bachelor of
        Engineering (Honours) degree.
      </p>
      <h2 className="mb-2 text-2xl">Disclaimer:</h2>
      <p className="mb-2">
        The information on this website is subject to change, care should be
        taken when consulting this website and everything should be double
        checked with the official resources provided by The University of
        Auckland.
      </p>
      <p className="mb-2">
        This website is not endorsed by, directly affiliated with, maintained,
        authorised, or sponsored by The University of Auckland.
      </p>
      <h2 className="mb-2 text-2xl">Resources used:</h2>
      <ul className="mb-2 list-inside list-disc">
        <li>
          <a
            href="https://uoaengineering.github.io/courseviewer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline"
          >
            Faculty of Engineering course viewer
          </a>
        </li>
        <li>
          <a
            href="https://study.auckland.ac.nz/ords/r/uoa/catalogue/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline"
          >
            Curriculum Catalogue
          </a>
        </li>
        <li>
          <a
            href="https://www.auckland.ac.nz/en/engineering/study-with-us/prospectuses-and-guides.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline"
          >
            Faculty Engineering Undergraduate Handbook
          </a>
        </li>
        <li>
          <a
            href="https://www.auckland.ac.nz/en/about-us/about-the-university/the-university/official-publications/university-calendar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline"
          >
            University of Auckland Calendar
          </a>
        </li>
      </ul>
    </>
  );
}
