/*
A React component that holds the sign-up/log-in area
*/

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Login.css';   //make this later

const Login = () => {
    const onButtonClick = async(e1, e2) => {
        console.log("Button was clicked")

        const requestOptions = {
            method: "GET"
        }

        await fetch('/username/', {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            //mode: "cors",
            body: JSON.stringify({'username':username})
        })

        await fetch('/password/', requestOptions)
            .then(response => response.json())
            .then(data => setPassword(data.password))
            .then(console.log(password));

        // useEffect(() => {
        //     const requestOptions = {
        //         method: 'GET'
        //     }
        //     fetch('/login', requestOptions)
        //         .then(response => response.json())
        //         //figure out how to work this one out
        // })
 
    }

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div className="title">Returning User? Login</div>
    
                <div className={'inputContainer'}>
                    Username
                    <input
                        method=''
                        value={username}
                        onChange={(e1) => setUserName(e1.target.value)}
                        className={'inputBox'}
                        placeholder='Enter username'
                    />
                </div>

                {/* <div className={'inputContainer'}>
                    Password
                    <input
                        value={password}
                        onChange={(e2) => setPassword(e2.target.value)}
                        className={'inputBox'}
                        placeholder='Enter password'
                    />
                </div> */}

                <Button variant="outlined" onClick={onButtonClick}>Sign in</Button>

            </div>

        </div>

    )

}

export default Login