


/**
 * A React component that renders a form with an input field for the user to 
 * enter their name.
 * @component
 */
import React, { useState } from 'react';

function CreateAccount() {
  // const [inputValue1, setInputValue1] = useState('');
  // const [inputValue2, setInputValue2] = useState('');
  // const [inputValue3, setInputValue3] = useState('');

  // /**
  //  * Event handler for input change.
  //  * Updates the input value state with the new value entered by the user.
  //  * @param {object} event - The event object.
  //  */
  // const handleInputChange = (event) => {
  //   setInputValue1(event.target.value);
  //   setInputValue2(event.target.value);
  //   setInputValue3(event.target.value);
  // }

  return(
    //Header for creating account
    <div style={{ textAlign: "right", marginRight: "20px" }}>
    <h3>New user? Create an account here!</h3>

    {/* Text boxes */}
    <div style={{ textAlign: "right", marginRight: "20px" }}>
      <form>
        <label>
          Create Username: 
          <input type="text"/>
          {/* <input type="text" value={inputValue1} onChange={handleInputChange}/> */}
        <div style={{ display: 'block' }}></div>
        </label>
          Create Password: 
          <input type="text"/>
          {/* <input type="text" value={inputValue2} onChange={handleInputChange}/> */}
        <div style={{ display: 'block' }}></div>
        <label>
          Confirm Password: 
          <input type="text"/>
          {/* <input type="text" value={inputValue3} onChange={handleInputChange}/> */}
        </label>
      </form> 

      {/* Create account button */}
      <div style={{ display: 'block' }}></div>
      <button>
            Create Account
        </button>
    </div>
    </div>
    
  )
}

export default CreateAccount;

  