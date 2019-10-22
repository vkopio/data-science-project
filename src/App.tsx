import React, { useState } from 'react'
import Map from './components/Map'
import Menu from './components/Menu'
import About from './components/About'

const App: React.FC = () => {
  const [page, setPage] = useState('home')
  const [data, setData] = useState('coefficient')

  const toPage = (page: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setPage(page)
  }

  const changeData = (newData: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setData(newData)
  }

  const mapStyle: React.CSSProperties = {
    position: 'relative',
    height: 'calc(100% - 42px)',
    display: page === 'home' ? 'block' : 'none',
  }

  const aboutStyle: React.CSSProperties = {
    display: page === 'about' ? 'block' : 'none',
  }

  return (
    <>
      <Menu page={page} toPage={toPage} data={data} changeData={changeData} />

      <div style={mapStyle}>
        <Map data={data} />
      </div>

      <div style={aboutStyle}>
        <About />
      </div>
    </>
  );
}

export default App;
