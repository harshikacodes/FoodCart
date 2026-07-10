import foodCartLogo from "../../public/images/foodCartLogo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";
import {Link } from "react-router-dom";

const Header = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className="header">
            <div className="logo-container" >
                <Link to="/">
                    <img className="logo"
                        src={foodCartLogo} alt="Food Cart Logo" />
                </Link>
                
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="nav-links" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="nav-links"><FaCartArrowDown /></Link>
                    </li>
                    {/* toggle login logout */}
                    <button
                        className="login"
                        onClick={() => setLogin(!login)}
                    >{login ? "Logout" : "Login"}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;