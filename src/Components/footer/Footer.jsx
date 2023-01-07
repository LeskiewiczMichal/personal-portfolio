import style from "./style/footer.css";
import githubIcon from "../../icons/github-original.svg";
import linkedinIcon from "../../icons/linkedin-plain.svg";

const Footer = () => {
  return (
    <footer className="footer--wrapper">
      <h3 className="header-font">Contact me</h3>
      <p className="footer-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repellendus
        beatae!
      </p>
      <div className="footer--links">
        <a href="https://github.com/LeskiewiczMichal">
          <img className="footer--icon" src={githubIcon} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/michał-leśkiewicz-0b964425b/">
          <img className="footer--icon" src={linkedinIcon} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
