import Project from "./Project";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Projects(props) {
    const ProjectItems1 = [
        'Project Name 1', 
        'list, of, authorized, users', 
        2,
    ];
    const ProjectItems2 = [
        'Project Name 2', 
        'list, of, authorized, users', 
        2,
    ];
    const ProjectItems3 = [
        'Project Name 3', 
        'list, of, authorized, users', 
        2,
    ];
    
    return (
      <div className="Projects">
        <Box sx={{ flexGrow: 1, border: '2px solid grey' }}height={500} justifyContent="center" alignItems="center"> 
            <Grid container item xs={3} alignItems="center" fontSize={20}>
                <b>Projects</b>
            </Grid>
            <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center" padding={5}>
                <Grid padding={1}>
                    <Project ProjectItems = { ProjectItems1 }/>
                </Grid>
                <Grid padding={1}>
                    <Project ProjectItems = { ProjectItems2 }/>
                </Grid>
                <Grid padding={1}>
                    <Project ProjectItems = { ProjectItems3 }/>
                </Grid>
            </Grid>
        </Box>
          
      </div>
    );
  }
  
  export default Projects;