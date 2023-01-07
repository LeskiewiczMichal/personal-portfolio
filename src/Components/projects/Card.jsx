import externalIcon from "../../icons/link.svg"
import githubIcon from "../../icons/github-original.svg"

const Card = (props) => {
    return (
        <article className="card--wrapper">
            <img className="card--image" src={props.img} alt="Project" />
            <div className="card--title-line">
                <h4 className="card--title">{props.title}</h4>
                <div className="card--links-wrapper">
                    <a href={props.github}><img className="card--icon" src={githubIcon} alt="github"/></a>
                    <a href={props.link}><img className="card--icon" src={externalIcon} alt="external project" /></a>
                </div>
            </div>
            <span className="card--description">{props.description}</span>
        </article>
    )
}

export default Card;