/*
A React component that holds the sign-up/log-in area
*/

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Login.css';   //make this later

const Login = () => {
    const [user, setUser] = useState("");
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    
    const onButtonClick = async(e) => {
        console.log("Button was clicked")

        const loggedIn = await fetch("/log_in", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            //mode: "cors",
            body: JSON.stringify({'user':user, 'userID':userID, 'password':password})
        })

        const data = await loggedIn.json(); 
        if (data == '-1'){
            alert("Login Failed.");
        }
        else{
            alert("Login Successful.");
            //log in successful 
            //show projects
        }

    }

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div className="title">Returning User? Login</div>
    
                <div className='inputContainer'>
                <input
                className="inputBox"
                value={user}
                onChange={(ev) => setUser(ev.target.value)}
                placeholder='Enter username'
                />
                </div>

                <div className='inputContainer'>
                <input
                className="inputBox"
                value={userID}
                onChange={(ev) => setUserID(ev.target.value)}
                placeholder='Enter userID'
                />
                </div>

                <div className='inputContainer'>
                <input
                className='inputBox'
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder='Enter password'
                />
                </div>

                <Button variant="outlined" onClick={onButtonClick}>Sign in</Button>

            </div>

        </div>

    )

}

export default Login