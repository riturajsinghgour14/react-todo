import React from 'react'
import Logo from "../assets/react.svg"
const Navbar = ({theme, changeTheme}) => {
  return (
    <nav className={theme ? "navbar bg-body-tertiary" : "navbar bg-dark text-light"}>
  <div className="container-fluid">
    <a className={theme ? "navbar-brand text-dark" : "navbar-brand text-light"} href="#">
      <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      Todo-App
    </a>
    <span className={theme ? "btn btn-dark btn-sm rounded-0 flow-end" : "btn btn-secondary btn-sm rounded-0 flow-end"} onClick={() =>changeTheme()}>{theme ? "light" : "Dark"}</span>
  </div>
</nav>
  )
}

export default Navbar;
