import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Header from "../components/layout/Header";

beforeEach(cleanup);


describe("<Header />", () => {
  describe("Success", () => {
    const darkMode = false;
    const setDarkMode = jest.fn(() => !darkMode);
    const header = <Header darkMode={darkMode} setDarkMode={setDarkMode} />;

    it("renders <Header />", () => {
      const { queryByTestId } = render(header);
      expect(queryByTestId("header")).toBeTruthy();
    });

    it("renders <Header /> and activates dark mode using onClick", () => {
      const { queryByTestId } = render(header);
      expect(queryByTestId("header")).toBeTruthy();

      fireEvent.click(queryByTestId("dark-mode-action"));
      expect(setDarkMode).toHaveBeenCalledWith(true);
    });

    it("renders <Header /> and activates dark mode using onKeyDown", () => {
      const { queryByTestId } = render(header);
      expect(queryByTestId("header")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("dark-mode-action"));
      expect(setDarkMode).toHaveBeenCalledWith(true);
    });

    it("renders <Header /> and set quick add task to true using onClick", () => {
      const { queryByTestId } = render(header);
      expect(queryByTestId("header")).toBeTruthy();

      fireEvent.click(queryByTestId("quick-add-task-action"));
    });

    it("renders <Header /> and set quick add task to true using onKeyDown", () => {
      const { queryByTestId } = render(header);
      expect(queryByTestId("header")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("quick-add-task-action"));
    });
  });
});
