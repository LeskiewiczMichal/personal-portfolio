import style from "./style/projects.css";
import boilerplate from "../../photos/boilerplate2.jpg";

import Card from "./Card";

const Projects = () => {
  return (
    <section className="projects--wrapper">
      <Card
        img={boilerplate}
        github="google.com"
        link="google.com"
        title="Project template"
      />
      <Card
        img={boilerplate}
        github="google.com"
        link="google.com"
        title="Project template"
      />
    </section>
  );
};

export default Projects;
