import React from 'react'
import { Menu } from 'semantic-ui-react'

interface MenuProps {
  page: string
  toPage: (page: string) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  data: string
  changeData: (data: string) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const HeaderMenu = (props: MenuProps) => {
    return (
        <Menu pointing secondary>
          <Menu.Item
            name='map the air'
            active={props.page === 'home'}
            onClick={props.toPage('home')}
          />
          <Menu.Item
              name='about'
              active={props.page === 'about'}
              onClick={props.toPage('about')}
            />
          <Menu.Menu position='right'>
            <span className="item">Effects of air quality on:</span>
            <Menu.Item
              name='life expectancy'
              active={props.data === 'coefficient'}
              onClick={props.changeData('coefficient')}
            />
            <Menu.Item
              name='GDP'
              active={props.data === 'coefficient_gdp'}
              onClick={props.changeData('coefficient_gdp')}
            />
          </Menu.Menu>
        </Menu>
    )
}

export default HeaderMenu
