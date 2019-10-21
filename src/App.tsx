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

  const style: React.CSSProperties = {
    position: 'relative',
    height: 'calc(100% - 42px)',
  }

  const content = () => {
    switch (page) {
      case 'home':
        return (
          <div style={style}>
            <Map data={data} apiKey="AIzaSyBGTz8L0Ws5kvaUz79PwRw-eDhcygn9WE8" />
            <div id="info-box"></div>
          </div>
        )
      case 'about':
        return <About />
    }
  }

  return (
    <>
      <Menu page={page} toPage={toPage} data={data} changeData={changeData} />
      {content()}
    </>
  );
}

export default App;
