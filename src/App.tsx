import React, { useState } from "react";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <main data-testid="application" className={darkMode ? 'darkmode' : undefined}>

          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
          </main>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
