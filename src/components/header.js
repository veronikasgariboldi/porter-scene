import "./header.css";
import { Link } from 'react-router-dom';

function Header () {
    return(
        <div className="header-container">
            <div className="header-containers">
                <div className="left-side">
                    <Link to="/" className="titel">Porter scene</Link>
                </div>
                <div className="right-side">
                    <Link to="/" className="links">home</Link>
                    <Link to="/scene" className="links">scene script</Link>
                    <Link to="/detailed-info" className="links">detailed information</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;