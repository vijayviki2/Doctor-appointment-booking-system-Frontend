import React,{ useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'

function AdminProfile() {
    const context= useContext(AuthContext)
    const currentUser = context.currentUser
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Admin Profile</h3>
            </div>
        </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="col-lg-4 col-md-4col-sm-6 d-flex align-items-center">
                    <img src={currentUser.image ? currentUser.image.url : "#"} alt="no image" className='card-img-top rounded-circle' />
                </div>
                <div className="col-lg-8 col-md-8col-sm-6">
                    <div className="card-body">
                        <h5 className="card-title text-center display-5 text-success">
                            { currentUser.name}
                        </h5>

                        <ul className="list-group mt-2">
                            <li className="list-group-item">
                                <strong>Email</strong>
                                <span className="float-end text-success">
                                    {currentUser.email}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <strong>Mobile</strong>
                                <span className="float-end text-success">
                                    {currentUser.mobile}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <strong>Role</strong>
                                <span className="float-end text-success">
                                    {currentUser.role}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <strong>Adress</strong>
                                <span className="float-end text-success">
                                   {currentUser.address.city}
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
