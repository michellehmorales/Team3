/*
A React component that holds the sign-up/log-in area
*/

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Login.css';   //make this later

const Login = () => {
    const onButtonClick = () => {
        // adjust this function to search for the username and password.
        //If match, want to move into home page
        //Else, say that username/password was inputted incorrectly
        alert("You did it!");

    }

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //const [userID, setUserID] = useState('');

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div className="title">Returning User? Login</div>
    
                <div className={'inputContainer'}>
                    Username
                    <input
                        value={userName}
                        onChange={(ev) => setUserName(ev.target.value)}
                        className={'inputBox'}
                        placeholder='Enter username'
                    />
                </div>

                <div className={'inputContainer'}>
                    Password
                    <input
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                        placeholder='Enter password'
                    />
                </div>

                <Button variant="outlined" onClick={onButtonClick}>Sign in</Button>

            </div>

        </div>

    )

}

export default Login