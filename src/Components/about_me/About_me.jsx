import style from "./style/about_me.css"
import boilerplate from "../../photos/boilerplate.jpg"

const AboutMe = () => {


    return (
        <section className="about-me--container">
            <div className="about-me--wrapper">
                <img className="about-me--image" src={boilerplate} alt="boilerplate"></img>
                <h3 className="about-me--header">About me</h3>
                <p className="about-me--paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia saepe vero ducimus sit, facilis blanditiis distinctio eligendi obcaecati ipsum, voluptas, recusandae porro commodi nisi ipsa minus quibusdam corporis? Tempore!</p>
            </div>
        </section>
    )
}

export default AboutMe;