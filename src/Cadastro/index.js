import React, { Component } from "react"
import { Switch, Route, Link } from "react-router-dom"

import Button from "react-bootstrap/button"

import Form from "react-bootstrap/form"

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

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App
