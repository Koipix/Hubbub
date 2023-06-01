import React, { useState } from "react";
import Add from "../assets/image.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
    const [err,setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

    try {
        //Note: Firebase error, still trying to locate the issue
        const res = await createUserWithEmailAndPassword(auth, email, password);
 
    const storageRef = ref(storage, username);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
   
    (error) => {
        setErr(true);
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{
                displayName: username, //trial and error
                photoURL:downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: username, //trial and error
                email,
                photoURL: downloadURL,
            });
        });      
    }
    );

        } catch(err) {
            setErr(true);
            console.error("firestore error:" + err)
        }
    };

    return (

        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">HUBBUB</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="file" id="file" style={{display:"none"}}/>
                    <label htmlFor="file">
                        <img src={Add} alt="add" />
                        <span>Add an avatar</span>
                    </label>
                    <button>SIGN UP</button>
                    {err && <span style={{color:"red"}}>Something went wrong</span>}
                </form>
                <p>Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    );
};

export default Register