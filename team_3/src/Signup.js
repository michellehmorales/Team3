import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Signup.css';

const Signup = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setError] = useState("");

    const onButtonClick = () => {
        // if(password != passwordError){
        //     alert("Passwords do not match");
        // }
        // else if(password == "" || passwordError == ""){
        //     alert("Type in password");
        // }
        // else{
        //     //route to home page
        // }

        const requestOptions = {
            method: 'POST', headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({'username':user})
        };
        


    }


    return (

        <div className="mainContainer">
            <div className="titleContainer">
                <div className="title">Sign Up</div>
                
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
                className='inputBox'
                value={user.password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder='Enter password'
                />
                </div>

                <div className='inputContainer'>
                <input
                className='inputBox'
                value={passwordError}
                onChange={(ev) => setError(ev.target.value)}
                placeholder='Confirm password'
                />
                </div>

                <Button variant="outlined" onClick={onButtonClick}>Sign up</Button> {/*Consider adding password validation if time*/}
            </div>

        </div>

    )


}

export default Signup;