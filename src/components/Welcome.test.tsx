/**
 * Welcome should render the text hello and If a name is passed into the component, It should render hello followed by the name.
 */

import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"

test("Welcome renders correctly", ()=>{
    render(<Welcome />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test("Greet renders with a name prop", ()=> {
    render(<Welcome name="Sandeep K. Dasari" />);
    const textElement = screen.getByText("Hello Sandeep K. Dasari");
    expect(textElement).toBeInTheDocument();
})