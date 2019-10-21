import React, { useState } from 'react';
import Map from './components/Map'
import Menu from './components/Menu'
import About from './components/About'

const App: React.FC = () => {
  const [page, setPage] = useState('home')

  const toPage = (page: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    switch (page) {
      case 'home':
        return <Map apiKey="AIzaSyBGTz8L0Ws5kvaUz79PwRw-eDhcygn9WE8" />
      case 'about':
        return <About />
    }
  }

  return (
    <>
      <Menu page={page} toPage={toPage} />
      {content()}
    </>
  );
}

export default App;
