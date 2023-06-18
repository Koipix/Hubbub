import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Hubbub</span>
            <div className="user">
                <img src="https://media.tenor.com/3yNprXLRf6AAAAAC/arona-blue-archive.gif" alt=""/>
                <span>Koi</span>
                <button onClick={() => signOut(auth)}>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar