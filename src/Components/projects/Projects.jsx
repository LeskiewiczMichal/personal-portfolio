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
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia saepe vero ducimus sit, facilis blanditiis distinctio eligendi obcaecati ipsum, voluptas, recusandae porro commodi nisi ipsa minus quibusdam corporis? Tempore!"
      />
      <Card
        img={boilerplate}
        github="google.com"
        link="google.com"
        title="Project template"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia saepe vero ducimus sit, facilis blanditiis distinctio eligendi obcaecati ipsum, voluptas, recusandae porro commodi nisi ipsa minus quibusdam corporis? Tempore!"
      />
      
    </section>
  );
};

export default Projects;
