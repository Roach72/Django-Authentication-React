import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'
import AuthContext from '../context/AuthContext'


const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='header'>
        <Link to="/" className='link'>Home</Link>
        <span> | </span>
        {user ? (
          <p onClick={logoutUser} className='link'>Logout</p>
          ): (
            <Link to="/login" className='link'>Login</Link>
          )}
          
        {user && <p>Hello {user.username}</p>}
    </div>
  )
}

export default Header