import React from "react";

// this is use to import to use prop-types
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>

    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.Home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.About}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.Contact}
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'dark'? 'light':'dark' } ` }>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </nav>
    </div>
  );
}


// isrequired,===it is use to show that this is required to pass else error occors
// +==================
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
  Home: PropTypes.string,
  Contact: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title here",
  Home: "add home ",
  About: "About text here",
  Contact: "add contact",
};





// =====Parts of nav bar That is not used ===

{/* <li className="nav-item">
<a className="nav-link" href="/">Link</a>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</a>
<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
<li><a className="dropdown-item" href="/">Action</a></li>
<li><a className="dropdown-item" href="/">Another action</a></li>
<li><hr className="dropdown-divider" /></li>
<li><a className="dropdown-item" href="/">Something else here</a></li>
</ul>
</li>
<li className="nav-item">
<a className="nav-link disabled">Disabled</a>
</li> */}


// This is a form that is use at the place of dark mode butto 
{/* <form className="d-flex" role="search">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form> */}