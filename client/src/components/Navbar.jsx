import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header >
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar