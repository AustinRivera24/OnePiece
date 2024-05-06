import { NavLink } from "react-router-dom";

import "./navbar.css"

function Navbar() {

    return (
        
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="page1">Page1</NavLink>
                    </li>
                    <li>
                        <NavLink to="page2">Page2</NavLink>
                    </li>
                    <li>
                        <NavLink to="page3">Page3</NavLink>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Navbar