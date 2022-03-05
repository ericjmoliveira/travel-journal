import "./Header.css";

import planetIcon from "../assets/planet-icon.png";

function Header() {
    return (
        <header>
            <img src={planetIcon} alt="Planet icon" />
            <h1 className="title">my travel journal.</h1>
        </header>
    );
}

export default Header;
