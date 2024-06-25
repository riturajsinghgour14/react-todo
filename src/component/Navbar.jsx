import React from 'react'

const Navbar = ({theme,changeTheme}) => {
  return (
    <nav className={theme ? "navbard bg-dark shadoe-lg" :"navvbar bg-light shadoe-lg "}>
    <div className="container-fluid">
      <span className={theme ? "navbar-brand text-light " : "navbar-brand text-dark"}>Todo-App</span>
    </div>
    <button className={theme?"btn btn-sm btn-secondary rounded-0" : "btn btn-sm btn-dark rounded-0"
  }
   onClick={()=>changeTheme()}
  > 
  {theme ? "Light mode" : "Dark mode"} 
  </button>
  </nav> 
  )
}

export default Navbar;
