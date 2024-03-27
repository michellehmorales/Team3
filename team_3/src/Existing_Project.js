import React, {useState} from 'react';
import './Existing_Project.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Existing_Project() {
    const [projectID, setProjectID] = useState("");
    const [projectName, setProjectName] = useState("Project Name");
    const [description, setDescription] = useState("");

    const handleProjectID = (e) => {
        setProjectID(e.target.value);
    }

    const getProject = async(e) => {
        // check if the project exists, and if it does then display it
        
        const requestOptions = {
            method:"GET"
        }

        await fetch("/id/", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            //mode: "cors",
            body: JSON.stringify({'projectID':projectID})
        })

        await fetch("/name_description/", requestOptions)
            .then(response => response.json())
            .then(data => setProjectName(data.projectName))
            .then(data => setDescription(data.description));
    }

    return (
        <div className='mainContainer'>
            <div className='titleContainer'>Access Existing Projects</div>
            <div className='subContainer'>
                Enter Project ID <TextField id='project-id' value={projectID} onChange={handleProjectID}/> <Button variant='outlined' onClick={getProject}>Confirm</Button>
            </div>

            <div className='projectSpace'>
                <div className='projectItem'>{projectName}</div>
                <div className='projectItem'>list of users</div>
                <div className='projectItem'>hardware sets</div>
            </div>
        </div>

        
    );
}

export default Existing_Project;