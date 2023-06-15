import { Link, useLocation } from "react-router-dom"
import "./navbar.css"
import SearchBar from "./SearchBar";
import { Avatar } from '@mui/joy';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="ya-navbar-container">
            <div className="ya-navbar container">
                <Link to="/" className="ya-navbar-brand nostyle-anchor">

                </Link>
                <SearchBar /> {/* Add the SearchBar component here */}

                <Link to="/profile" className={"ya-navbar-item nostyle-anchor" + (location.pathname === "/" ? " selected" : "")} ><Avatar>YA</Avatar></Link>
            </div>
        </div>


    )
}

export default Navbar

