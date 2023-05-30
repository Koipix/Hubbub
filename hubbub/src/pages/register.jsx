import React from "react";
import Add from "../assets/image.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">HUBBUB</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="file" id="file" style={{display:"none"}}/>
                    <label htmlFor="file">
                        <img src={Add} alt="add" />
                        <span>Add an avatar</span>
                    </label>
                    <button>SIGN UP</button>
                </form>
                <p>Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    )
}

export default Register