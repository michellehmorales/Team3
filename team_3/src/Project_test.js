import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import React, {useState} from 'react';
import "./Project_test.css";

function Project_test () {
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [description, setDescription] = useState("");

    const handleProjectName = (e) => {
        setProjectName(e.target.value);
    }

    const handleProjectID = (e) => {
        setProjectID(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const onButtonClick = async(e) => {
        // this function is what we use to check if this project exists or not
        const response = await fetch("/createProject", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({projectName:projectName, projectID:projectID, description:description})
          });

          const data = await response.json();
          if (data == '1') {
            alert("Project " + JSON.stringify(data.projectName) + " was created"); //either data.name or data.projectName
            // can move into the existing projects page to input the project id
          }
          else if (data == '-1') {
            alert("This project already exists");
          }


    }

    return (
        <div className='mainContainer'>
            <div className='titleContainer'>Create New Project</div>
            <div className='inputContainer'>
                <TextField id='project-name' variant='outlined' label='Name of project' value={projectName} onChange={handleProjectName}/>
            </div>
            <div className='inputContainer'>
                <TextField id='project-id' variant='outlined' label='Unique ID' value={projectID} onChange={handleProjectID}/>
            </div>
            <div className='inputContainer'>
                <TextField id='project-description' variant='outlined' label='Short description of project' value={description} onChange={handleDescription}/>
            </div>

            <Button variant='outlined' onClick={onButtonClick}>Create project</Button>
        </div>


    );
}

export default Project_test;