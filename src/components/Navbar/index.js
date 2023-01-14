import React from 'react'
import { PrimaryNav, MenuLink, Menu, Webs } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Webs />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/products" activeStyle>
            Products
          </MenuLink>
          <MenuLink to="/blog" activeStyle>
            Blog
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
