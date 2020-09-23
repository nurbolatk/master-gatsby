import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Hot Now</Link>
    </li>
    <li>
      <Link to="/pizzas">Pizza Menu</Link>
    </li>
    <li>
      <Link to="/">LOGO</Link>
    </li>
    <li>
      <Link to="/slicemasters">Slicemasters</Link>
    </li>
    <li>
      <Link to="/order">Order Ahead!</Link>
    </li>
  </ul>
)

export default Nav
