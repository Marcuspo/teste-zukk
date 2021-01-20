import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/app" className="navbar-brand">
            Clientes
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cadastro"} className="nav-link">
                Cadastro
              </Link>
            </li>
          </div>
        </nav>
      </div>
    )
  }
}

export default App
