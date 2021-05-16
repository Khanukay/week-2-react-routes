import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
        <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="title"> Dashboard </div>
          <div>
              <Link to="/dashboard/profile/5c4b6d6d-eb8f-4c87-9748-6034a74975e3"> Go to Profile </Link>
          </div>
          <div>
              <Link to="/dashboard/main"> Go to Main </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
