import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import foodCartLogo from "../public/images/foodCartLogo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container" >
                <img src={foodCartLogo} alt="Food Cart Logo" style={{width: "100px"}} />
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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);