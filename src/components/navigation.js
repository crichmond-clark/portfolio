import React from "react"
import "../sass/navigation.scss"

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="/aboutMe">About Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
