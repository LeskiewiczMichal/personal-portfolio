import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AboutMe from "../Components/about_me/About_me";
import Projects from "../Components/projects/Projects";
import Card from "../Components/projects/Card";
import Footer from "../Components/footer/Footer";

describe("About_me component", () => {
    it("renders a photo", () => {
        render(<AboutMe />);
        
        expect(screen.getByAltText('boilerplate')).toBeInTheDocument();
    });

    it("renders about me heading and text", () => {
        render(<AboutMe />);

        expect(screen.getByRole('heading', {name: /about me/i})).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
    })

    it("renders icons", () => {
        render(<AboutMe />);

        expect(screen.getByAltText('github')).toBeInTheDocument();
        expect(screen.getByAltText('linkedin')).toBeInTheDocument();
    })
})

describe("Projects component", () => {
    it("renders a header", () => {
        render(<Projects />);

        expect(screen.getByRole('heading', {name: /my work/i})).toBeInTheDocument();
    })
})

describe("Card component", () => {
    it("renders a photo", () => {
        render(<Card />);

        expect(screen.getByAltText('Project')).toBeInTheDocument();
    });

    it("renders project title", () => {
        render(<Card title="Okay" />);

        expect(screen.getByRole('heading', {name: /okay/i})).toBeInTheDocument();
    })

    it("renders two icons", () => {
        render(<Card />)

        const images = screen.getAllByRole('img');

        expect(images[0]).toBeInTheDocument();
        expect(images[1]).toBeInTheDocument();
    })

    it("renders project description", () => {
        render(<Card description="simple text"/>)

        expect(screen.getByText(/simple text/i)).toBeInTheDocument();
    })
})

describe("Footer component", () => {
    it("render header", () => {
        render(<Footer />);

        expect(screen.getByRole('heading', {name: /contact me/i})).toBeInTheDocument();
    })

    it("render a paragraph", () => {
        render(<Footer />);

        expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
    })

    it("renders icons", () => {
        render(<Footer />);

        const images = screen.getAllByRole('img');

        expect(images[0]).toBeInTheDocument();
        expect(images[1]).toBeInTheDocument();
    })
})