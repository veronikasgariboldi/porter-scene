import "./header.css";
import { Link } from 'react-router-dom';

function Header () {
    return(
        <div className="header-container">
            <div className="left-side">
                <Link to="/" className="titel">Porter scene</Link>
            </div>
            <div className="right-side">
                <Link to="/" className="links">start</Link>
                <Link to="/scene" className="links">scene script</Link>
                <p className="links">header</p>
            </div>
        </div>
    )
}

export default Header;