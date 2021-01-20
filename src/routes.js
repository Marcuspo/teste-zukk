import React, { Component, Fragment } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ModalContainer } from "react-router-modal"
import "react-router-modal/css/react-router-modal.css"

import { isAuthenticated } from "./services/auth"

import Login from "./Login/Login"
import App from "./App/App"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/app" component={App} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes
