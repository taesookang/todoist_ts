import React from 'react';
import Header from './components/layout/Header'
import Content from './components/layout/Content';

export const App: React.FC = ()=> {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
