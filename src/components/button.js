import "./button.css";
import { useNavigate } from 'react-router-dom';


function Button({to, children }) {
    const navigate = useNavigate();
    return (
        <div className="button-container">
            <button className="btn" onClick={() => navigate(to)}>
                {children}
            </button>
        </div>
  );
}

export default Button;