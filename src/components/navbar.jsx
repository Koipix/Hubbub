import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Hubbub</span>
            <div className="user">
                <img src="https://media.tenor.com/3yNprXLRf6AAAAAC/arona-blue-archive.gif" alt=""/>
                <span>Koi</span>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar