import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'

const HeaderMenu = () => {
  const [ activeItem, setActiveItem ] = useState('home')

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: MenuItemProps) => {
    if (typeof name === 'string') {
      setActiveItem(name)
    }
  }

    return (
        <Menu pointing secondary>
          <Menu.Item
            name='map the air'
            active={activeItem === 'map the air'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )
}

export default HeaderMenu
