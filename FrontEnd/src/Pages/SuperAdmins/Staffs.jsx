import React from 'react';
import{ useState } from 'react';
import { Box, Typography, Divider, Grid, Avatar, IconButton } from '@mui/material';
import { FilledButton } from '../../Components/UI/Buttons';
import EmailIcon from '@mui/icons-material/Email'; // Importing the Email icon
import LockIcon from '@mui/icons-material/Lock'; // Importing the Lock icon
import PhoneIcon from '@mui/icons-material/Phone'; // Importing the Phone icon
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; // Importing the SupervisorAccount icon (for Admin)
import Staff from '../../Components/Dialogs/UploadPhoto';
import PreLoader from '../../Components/PreLoader';
import AddStaff from '../../Components/Dialogs/AddStaff';

function Staffs() {
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, []);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleButtonClick = () => {
      setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
  
    const employees = [
        {
          name: 'John Doe',
          role: 'Admin',
          email: 'johndoe@example.com',
          password: '*********',
          number: '+1234567890'
        },
        {
          name: 'Jane Smith',
          role: 'Manager',
          email: 'janesmith@example.com',
          password: '*********',
          number: '+9876543210'
        },
        // Add more employee data as needed
      ];

  const handleDeleteEmployee = (index) => {
    // Implement delete functionality here
    console.log("Deleting employee at index", index);
  };
    
  return (
    <div>
         {isLoading ? (
        <PreLoader />
      ) : (
    <Box m={2} >
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
            
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
            My Team
          </Typography>
          <Box sx = {{width: "25%"}}>
          <FilledButton onClick={handleButtonClick} width={150}>ADD STAFFS</FilledButton>
          </Box>
        </Grid>
        <Grid item>
          <Divider sx={{ borderTopWidth: 2, mb : 3 }}/>
        </Grid>
      </Grid>
     
      <Box m={2}>
  <Grid container spacing={4}>
    {/* Loop through each employee */}
    {employees.map((employee, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Box sx={{maxWidth: '100%', margin: 'auto', backgroundColor: "white", borderRadius: 5, paddingY: "1vh"}}>
       
          <Grid container alignItems="center">
            {/* Avatar */}
            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Avatar sx={{width: 100, height: 100}}>
                {/* You can put an icon or initials inside the Avatar */}
              </Avatar>
            </Grid>
            {/* Details */}
            <Grid item xs={8}>
              <Typography sx={{fontFamily: 'Inter', fontSize: 40, fontWeight: 'bold', color: 'black'}}>
                {employee.name}
                
              </Typography>
              <Typography sx={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'medium', color: 'black'}}>
              <SupervisorAccountIcon sx={{  fontSize: 20}} /> :
                {employee.role}
              </Typography>
              <Typography sx={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'medium', color: 'black'}}>
              <EmailIcon sx={{  fontSize: 20}} /> :
                {employee.email}
              </Typography>
              <Typography sx={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'medium', color: 'black'}}>
              <LockIcon sx={{  fontSize: 20}} /> :
                {employee.password}
              </Typography>
              <Typography sx={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'medium', color: 'black'}}>
              <PhoneIcon sx={{  fontSize: 20}} /> :
                {employee.number}
              </Typography>
            </Grid>
            {/* Delete Button */}
            
          </Grid>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>
<AddStaff open={isDialogOpen} onClose={handleDialogClose} />
    </Box>
     )}
    </div>
  );
}

export default Staffs;
