import React from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

// style
import "./style/Navbar.scss";

export default function Navbar()
{
    return <div id="navbar">
        <Nav.Link as={Link} to="/" className="logo">giFinder</Nav.Link>
        <Nav.Link as={Link} to="/favorite" className="fas fa-heart heart-icon"> </Nav.Link>
    </div>
}
