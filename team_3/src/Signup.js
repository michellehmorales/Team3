import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Signup.css';

const Signup = () => {

    const [user, setUser] = useState("");
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setError] = useState("");

    const onButtonClick = async(e) => {
        if(password != passwordError){
            alert("Passwords do not match");
        }
        else if(user == "" || userID == "" || password == "" || passwordError == ""){
            alert("Fill in all fields");
        }
        else{
            const signedUp = await fetch("/sign_up/", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                //mode: "cors",
                body: JSON.stringify({'user':user, 'userID':userID, 'password':password})
            })

            const data = await signedUp.json(); 
            if (data == '-1'){
                alert("Username already taken. Please use a different username.");
            }
                
        }

        const requestOptions = {
            method: "GET"
        }
    
            
    
        // await fetch("/lastname/", requestOptions)
        //     .then(response => response.json())
        //     .then(data => getLastName(data.lastname))
        //     .then(console.log(lastName));
    
        


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