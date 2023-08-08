import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

function PrivateRouter() {
    const context = useContext(AuthContext)
    const token = context.token
  return (
    <React.Fragment>
        {
            token ? <Outlet/> : <Navigate to={'/login'} />
        }
    </React.Fragment>
    )
}

export default PrivateRouter
