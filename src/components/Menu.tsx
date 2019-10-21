import React from 'react'
import { Menu } from 'semantic-ui-react'

interface MenuProps {
  page: string
  toPage: (page: string) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const HeaderMenu = (props: MenuProps) => {
    return (
        <Menu pointing secondary>
          <Menu.Item
            name='map the air'
            active={props.page === 'home'}
            onClick={props.toPage('home')}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='about'
              active={props.page === 'about'}
              onClick={props.toPage('about')}
            />
          </Menu.Menu>
        </Menu>
    )
}

export default HeaderMenu
