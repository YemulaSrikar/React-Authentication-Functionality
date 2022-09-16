// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="header-list-container">
      <Link to="/" className="links">
        <li className="header-list">Home</li>
      </Link>
      <Link to="/about" className="links">
        <li className="header-list">About</li>
      </Link>
    </ul>
  </div>
)
export default Header
