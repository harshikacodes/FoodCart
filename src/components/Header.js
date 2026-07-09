import foodCartLogo from "../../public/images/foodCartLogo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className="header">
            <div className="logo-container" >
                <img className="logo"
                src={foodCartLogo} alt="Food Cart Logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FaCartArrowDown /></li>
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