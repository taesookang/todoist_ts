import React, { useState } from "react";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import {
  ProjectsProvider,
  SelectedProjectProvider,
  AddTaskProvider,
} from "./context";

interface Props {
  darkModeDefault : boolean
}

export const App: React.FC<Props> = ({ darkModeDefault }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <AddTaskProvider>
          <div className="App">
            <main
              data-testid="application"
              className={darkMode ? "darkmode" : undefined}
            >
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              <Content />
            </main>
          </div>
        </AddTaskProvider>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
