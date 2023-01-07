import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AboutMe from "../Components/about_me/About_me";
import Card from "../Components/projects/Card";

describe("About_me component", () => {
    it("renders a photo", () => {
        render(<AboutMe />);
        
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it("renders about me heading and text", () => {
        render(<AboutMe />);

        expect(screen.getByRole('heading', {name: /about me/i})).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
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
