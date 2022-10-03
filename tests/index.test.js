import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Page", () => {
  let csvFile;
  let csvContent;

  beforeEach(() => {
    csvFile = new File(["Test file"], 'AAPL.csv', { type: 'text/csv' });
  });

  it("Renders page", () => {
    render(<Home />);
    
    expect(screen.getByTestId("h1_header")).toBeInTheDocument();
    expect(screen.getByTestId("csvuploadform")).toBeInTheDocument();
    expect(screen.getByTestId("fileupload")).toBeInTheDocument();
  });

  it("Upload CSV", async () => {
    const { getByTestId } = render(<Home />);
    const inputFile = getByTestId("fileupload");
    
    await waitFor(() =>
      fireEvent.change(inputFile, {
        target: { files: [csvFile] },
      })
    );
    
    expect(inputFile.files[0].name).toBe("AAPL.csv");
    expect(inputFile.files.length).toBe(1);
  });
});
