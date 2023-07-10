import "./NavbarStyle.css"

import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className = "header">
        <Link to ="/">
            <h1>portfolio</h1>
        </Link>
        </div>
    )
}

export default Navbar