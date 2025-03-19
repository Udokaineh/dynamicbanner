import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"


test("updates the banner title and description when the form changes", async () => {
    render(<App />);

    // Test title update
    const titleInput = screen.getByPlaceholderText(/Change title/i);
    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, "The Joy of Plants");

    const titleElement = screen.getByText(/The Joy of Plants/i);
    expect(titleElement).toBeInTheDocument();

    // Test description update
    const descriptionInput = screen.getByPlaceholderText(/Change description/i);
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, "I find joy in watering my Aloe Vera plant, watching it grow, and embracing the beauty of nature. Every leaf tells a story of patience and care.");

    const descriptionElement = screen.getByText(/I find joy in watering my Aloe Vera plant, watching it grow, and embracing the beauty of nature. Every leaf tells a story of patience and care./i);
    expect(descriptionElement).toBeInTheDocument();
});
