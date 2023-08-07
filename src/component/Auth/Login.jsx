import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className="container align-items-center">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 col-lg-6 offset-md-2 offset-lg-3" >
          <div className='card'>
            <div className="card-body p-0">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 p-5 text-center">
                  <div className="title">
                    <h5 className="display-5 text-success">Login</h5>
                  </div>
                  <form autoComplete="off">
                    <div className='form-group mt-4'>
                      <input type="email" name="email" id="email" placeholder='Email' className='form-control' required />
                    </div>
                    <div className='form-group mt-2'>
                      <input type="password" name="password" id="password" placeholder='Password' className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                      <input type="submit" value="Login" className='"btn brn-success' />
                    </div>
                  </form>

                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 bg-success p-5 text-center">
                  <div className="title">
                    <h5 className="display-5 text-light">Hello,<br/>User</h5>
                  </div>
                  <div className="content">
                    <p className="text-light">
                      Enter Your Personel details to start journey with us
                    </p>
                  </div>
                  <NavLink to={`/register`} className="btn btn-outline-light">Register</NavLink>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Login
