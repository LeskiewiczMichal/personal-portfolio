import style from "./style/about_me.css"
import boilerplate from "../../photos/boilerplate.jpg"

const AboutMe = () => {


    return (
        <section className="about-me--container">
            <img src={boilerplate} alt="boilerplate"></img>
            <h3>About me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia saepe vero ducimus sit, facilis blanditiis distinctio eligendi obcaecati ipsum, voluptas, recusandae porro commodi nisi ipsa minus quibusdam corporis? Tempore!</p>
        </section>
    )
}

export default AboutMe;