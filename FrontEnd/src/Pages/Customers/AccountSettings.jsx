import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import PreLoader from '../../Components/PreLoader';
import * as React from 'react';
import ChangePassword from '../../Components/Forms/ChangePassword';
import ProfileInformation from '../../Components/Forms/ProfileInformation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Details from '../../Components/Details';
function AccountSettings() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Box m={2} height="100vh">
            <Details
  name="John Doe"
  email="john.doe@example.com"
/>
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
            Account Settings
          </Typography>
          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
                Change Password <br/>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: '300', color: 'black' }}>
                  Update your password to keep your account secure.
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ChangePassword/>
            </AccordionDetails>
          </Accordion>
          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
                Profile Information <br/>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: '300', color: 'black' }}>
                  Configure your profile.
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                     <ProfileInformation/>
            </AccordionDetails>
          </Accordion>

        </Box>
      )}
    </div>
  );
}

export default AccountSettings;
