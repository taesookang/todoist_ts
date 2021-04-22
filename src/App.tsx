import React from 'react';
import Header from './components/layout/Header'
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context'

export const App: React.FC = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
