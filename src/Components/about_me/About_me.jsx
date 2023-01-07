import style from "./style/about_me.css"
import boilerplate from "../../photos/boilerplate.jpg"

import githubIcon from "../../icons/github-original.svg"
import linkedinIcon from "../../icons/linkedin-plain.svg"

const AboutMe = () => {
    return (
        <section className="about-me--container">
            <div className="about-me--wrapper">
                <img className="about-me--image" src={boilerplate} alt="boilerplate"></img>
                <h3 className="about-me--header">About me</h3>
                <p className="about-me--paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia saepe vero ducimus sit, facilis blanditiis distinctio eligendi obcaecati ipsum, voluptas, recusandae porro commodi nisi ipsa minus quibusdam corporis? Tempore!</p>
                <div className="about-me--links">
                    <a className="about-me--link" href="https://github.com/LeskiewiczMichal"><img className="about-me--icon" src={githubIcon} alt="github"/></a>
                    <a className="about-me--link" href="https://www.linkedin.com/in/michał-leśkiewicz-0b964425b/"><img className="about-me--icon" src={linkedinIcon} alt="linkedin"/></a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;