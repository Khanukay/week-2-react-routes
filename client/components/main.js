import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello"/>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <div>
              <Link to="/dashboard/profile/5c4b6d6d-eb8f-4c87-9748-6034a74975e3"> Go to Profile </Link>
          </div>
          <div>
              <Link to="/dashboard"> Go to Root </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
