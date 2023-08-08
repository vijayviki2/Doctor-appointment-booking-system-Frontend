import React from 'react'

function AdminLogin() {
  return (
    <div className="container align-items-center">
      <div className="row mt-5">
        <div className="col-md-8 col-sm-12 col-lg-8 offset-md-2 offset-lg-2 col-md-2" >
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
                      <input type="submit" value="Login" className='btn btn-success' />
                    </div>
                  </form>

                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 bg-success p-5 text-center">
                  <div className="title">
                    <h5 className="display-5 text-light">Hello,Admin</h5>
                  </div>
                  <div className="content">
                    <p className="text-light">
                      Welcome to HealthCare <br />Admin Login Portal
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default AdminLogin
