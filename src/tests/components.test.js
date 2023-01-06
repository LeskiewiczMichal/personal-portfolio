import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AboutMe from "../Components/about_me/About_me";

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
