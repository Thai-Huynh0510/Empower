import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrap">
      <nav>
        <ul style={{ listStyleType: 'none' }}>
        <li>
            <Link to="/">Log Out</Link>
          </li>
          <li>
            <Link to="/HomePage">Homepage</Link>
          </li>
          <li>
            <Link to="/tasks">View Tasks</Link>
          </li>
          <li>
            <Link to="/employees">View Employees</Link>
          </li>
          <li>
            <Link to="/orders">View Orders</Link>
          </li>
          <li>
            <Link to="/events">Calendar</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar