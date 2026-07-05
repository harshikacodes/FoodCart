import foodCartLogo from "../../public/images/foodCartLogo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container" >
                <img className="logo"
                src={foodCartLogo} alt="Food Cart Logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>ABout Us</li>
                    <li>Contact Us</li>
                    <li><FaCartArrowDown /></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;