import React from "react";
import Add from "../assets/image.png"

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">HUBBUB</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>SIGN IN</button>
                </form>
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </div>
    )
}

export default Login