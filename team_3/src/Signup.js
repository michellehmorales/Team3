import React, {useState} from 'react';
import Button from '@mui/material/Button';

const Signup = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setError] = useState("");

    const onButtonClick = () => {
        if(password != passwordError){
            alert("Passwords do not match");
        }
        else{
            //route to home page
        }
    }


    return (

        <div className="mainContainer">
            <div className="titleContainer">
                <div className="title">Sign Up</div>
                <input
                className="input"
                value={user}
                onChange={(ev) => setUser(ev.target.value)}
                placeholder='Enter username'
                />
                <input
                className='input'
                value={user.password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder='Enter password'
                />
                <input
                className='input'
                value={passwordError}
                onChange={(ev) => setError(ev.target.value)}
                placeholder='Confirm password'
                />
                <Button variant="outlined" onClick={onButtonClick}>Sign up</Button> {/*Consider adding password validation if time*/}
            </div>

        </div>

    )


}

export default Signup;