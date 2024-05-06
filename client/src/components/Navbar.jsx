import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header style={{borderBottom:"1px solid white"}}>
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
        </header>
    )
}

export default Navbar