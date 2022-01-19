import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Create from './components/create'
import Edit from './components/edit'
import Home from './components/home'
import View from './components/view'
import './css/style.css'

export default class app extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact >
              {/* why Redirect is inside Route redundant code */}
              <Redirect to="/home" />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/editUser' component={Edit} />
            <Route path='/createUser' component={Create} />
            <Route path='/viewUser' component={View} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
} 