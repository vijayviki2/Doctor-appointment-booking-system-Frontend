import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div className="container align-items-center">
      <div className="row mt-5">
        <div className="col-md-8 col-sm-12 col-lg-6 offset-md-2 offset-lg-3" >
          <div className='card'>
            <div className="card-body p-0" id="auth">
              <div className="row">
                
              <div className="col-md-6 col-lg-6 col-sm-12 bg-success p-5 p-sm-4 text-center" id="content">
                  <div className="title">
                    <h5 className="display-5 text-light">Welcome back</h5>
                  </div>
                  <div className="content">
                    <p className="text-light">
                      To keep connected with us Please Login
                    </p>
                  </div>
                  <NavLink to={`/login`} className="btn btn-outline-light">Login</NavLink>
                </div>

                <div className="col-md-6 col-lg-6 col-sm-12 p-5 bg-light text-center">
                  <div className="title">
                    <h5 className="display-5 text-success">Login</h5>
                  </div>
                  <form autoComplete="off">
                  <div className='form-group mt-4'>
                      <input type="text" name="name" id="name" placeholder='name' className='form-control' required />
                    </div>
                    <div className='form-group mt-2'>
                      <input type="email" name="email" id="email" placeholder='Email' className='form-control' required />
                    </div>
                    <div className='form-group mt-4'>
                      <input type="number" name="mobile" id="mobile" placeholder='mobile' className='form-control' required />
                    </div>
                    <div className='form-group mt-2'>
                      <input type="password" name="password" id="password" placeholder='Password' className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                      <input type="submit" value="Register" className='"btn brn-success' />
                    </div>
                  </form>

                </div>
   
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Register
