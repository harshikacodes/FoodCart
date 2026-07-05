import foodCartLogo from "../../public/images/foodCartLogo.png";

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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;