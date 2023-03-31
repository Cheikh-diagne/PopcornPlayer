import * as React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to = "/">
                Accueil
            </Link>
            <Link to = "/categories">
                Catégories
            </Link>
            <Link to = "/movies/:id">
                Films
            </Link>
        </div>
    )
}

export default Navbar