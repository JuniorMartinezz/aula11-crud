import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-expand-sm bg-light">
            <ul class="navbar-nav">
                <li class="nav-item ">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link " to="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;