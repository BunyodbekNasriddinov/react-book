import { Outlet } from 'react-router-dom'
import { Item, LinkNumber, List, Navbar } from './Profile.style'
import { NavLink } from 'react-router-dom'

export const Profile = () => {
  return (
    <>
      <Navbar>
        <List>
          <Item>
            <NavLink className={({ isActive }) => isActive ? 'NavbarLink' : 'edit-active'} to='edit' ><LinkNumber>1</LinkNumber> Profile</NavLink>
          </Item>
          <Item>
            <NavLink className={({ isActive }) => isActive ? 'NavbarLink' : 'edit-active'} to='security'><LinkNumber>2</LinkNumber> Security</NavLink>
          </Item>
          <Item>
            <NavLink className={({ isActive }) => isActive ? 'NavbarLink' : 'edit-active'} to='settings'><LinkNumber>3</LinkNumber> Settings</NavLink>
          </Item>
        </List>
      </Navbar>
      <Outlet />
    </>
  )
}

