/*
A React component that holds the sign-up/log-in area
*/

import React, {useState} from 'react';
import './Login.css';   //make this later

const Login = () => {
    const onButtonClick = () => {
        // adjust this function later when we get pages to be linked togeter

    }

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
            <div>New User? Sign-in</div>
    
            <div className={'inputContainer'}>
                Username
                <input
                    value={userName}
                    onChange={(ev) => setUserName(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <div className={'inputContainer'}>
                UserID
                <input
                    value={userID}
                    onChange={(ev) => setUserID(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <div className={'inputContainer'}>
                Password
                <input
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
            </div>

            <button variant="contained">Sign in</button>

            </div>

            <div className='titleContainer2'>
                <div>Create New Project</div>
                <div className={'inputContainer'}>
                  Username
                  <input
                      value={userName}
                      onChange={(ev) => setUserName(ev.target.value)}
                      className={'inputBox'}
                   />
                </div>
              
              <div className='inputContainer'>
                ProjectID
                <input
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
              </div>

              <div className='inputContainer'>
                Project Description
                <input
                    className={'inputBox'}
                />
              </div>
              <button variant="contained">Create Project</button>
            </div>

        </div>

    )

}

export default Login