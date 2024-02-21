/**
 * A React component that renders a form with an input field for the user to 
 * enter their name.
 * @component
 */
import React, { useState } from 'react';
import './Forms.css';

const initialValues = {
  userName: "",
  userId: "",
  password: "",
  name: "",
  description: "",
  projectId1: "",
  projectId2: "",
};

function Form() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return(
    <div>
      <form>
          New User? Sign-in
          <p>UserName
          <input
            value={values.userName}
            onChange={handleInputChange}
            name="userName"
            label="userName"
          />
          UserId
          <input
            value={values.userId}
            onChange={handleInputChange}
            name="userId"
            label="userId"
          />
          </p>
          <p>
          password
          <input
            value={values.password}
            onChange={handleInputChange}
            name="password"
            label="password"
          />
          </p>
          <p>_____________________________________________________________________________</p>
          <p>Create New Project Use Existing Project</p>
          <p>Name
          <input
            value={values.name}
            onChange={handleInputChange}
            name="name"
            label="name"
          />
          ProjectId
          <input
            value={values.projectId1}
            onChange={handleInputChange}
            name="projectId"
            label="projectId"
          />
          </p>
          <p>Description
          <input
            value={values.description}
            onChange={handleInputChange}
            name="description"
            label="description"
          />
          </p>
          <p>ProjectId
          <input
            value={values.projectId1}
            onChange={handleInputChange}
            name="projectId"
            label="projectId"
          />
          </p>
    
        </form>
        
    </div>



  )
}

export default Form;

  