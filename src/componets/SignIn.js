import React from 'react'
import "../CSS/sign.css"
import {Link} from "react-router-dom";
import google from '../assetss/google.png';
function SignIn() {
    return (
        <div className="sign">
            <div className="sign_in">
            <h1>Sign In</h1>    
            <span>New User?</span>
            <span>&nbsp;
            <Link>Create An Account</Link></span>
                <form>
                    <p>Email Address:</p>
                    <input type="text" name="" className="text-control"></input>
                    <p>Password:</p>
                    <input type="password" name="" className="text-control"></input><br></br>
                    <input type="Submit" name="submit" value="Submit" className="btn_selectfile"></input>
                </form>
                <div>
                    {/* <img src={google}></img> */}
                    {/* <p>Continue with Google</p> */}
                </div>
            </div>
            
        </div>
    )
}

export default SignIn
