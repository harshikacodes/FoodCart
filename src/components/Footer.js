import {LINKEDIN_URL} from "../utils/constants";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            Created By ❤️ 
            <a href={LINKEDIN_URL} target="_blank" >
                Harshika Malhotra
            </a>
            &copy;
            {year}
            <strong>Food<span>Cart</span></strong>
        </div>
    )
}

export default Footer;