import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <div className='navTexts'>
                    <Link to={"/"}><p>Dazzling Demo</p></Link>
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/add"}><li>Add</li></Link>
                        <li>Shortcodes</li>
                        <li>About</li>
                        <li>Languages</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar