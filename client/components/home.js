import React from 'react'
import { Switch, Route, withRouter, Redirect, Link, useParams } from 'react-router-dom'
import Dashboard from './dashboard'
import Header from './header'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
          <div>
            <switch>
              <Route exact path="/dashboard" component={() => <Dashboard />} />
              <Route exact path="/dashboard/main" component={() => <Main />} />
              <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
            </switch>
          </div>
        </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
