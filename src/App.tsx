import React from 'react';
import Map from './components/Map'
import Menu from './components/Menu'

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Map apiKey="AIzaSyBGTz8L0Ws5kvaUz79PwRw-eDhcygn9WE8" />
    </>
  );
}

export default App;
