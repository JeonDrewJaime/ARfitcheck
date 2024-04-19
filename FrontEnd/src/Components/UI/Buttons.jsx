import React, { useState } from 'react';
import { Button, Typography, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import { MenuItem } from '@mui/material';
// Import your dialog component here

const NavbarButton = ({ to, children }) => (
  <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to={to}>
    <Typography sx={{ fontFamily: 'Kanit', fontSize: 'clamp(10px, 1vw, 30px)' }}>{children}</Typography>
  </Button>
);

export const CustomMenuItem = ({ label, icon, badgeContent, color, onClick }) => (
  <MenuItem onClick={onClick}>
    <IconButton size="large" aria-label={label} sx={{ color }}>
      <Badge badgeContent={badgeContent} color="error">
        {icon}
      </Badge>
    </IconButton>
    <p>{label}</p>
  </MenuItem>
);

export const HoverableListItem = ({ label, isSelected, onClick }) => (
  <ListItem
    sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}
    button
    selected={isSelected}
    onClick={onClick}
  >
    <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'regular', color: 'white' }}>
      {label}
    </Typography>
  </ListItem>
);

export const FilledButton = ({ onClick, children, dialogComponent: DialogComponent, button}) => {
   const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  
  return ( <>
  <Button
    type="submit"
    fullWidth
    variant="contained"
    onClick={onClick}
    sx={{
      backgroundColor: 'White',
      '&:hover': { backgroundColor: '#414a4c', color: 'white' },
      '&:not(:hover)': { backgroundColor: '#3d4242', color: 'white' },
    }}
  >
    <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
  </Button>
  {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
  </>
);
};


export const ExcelButton = ({ onClick, children, dialogComponent: DialogComponent, type}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 const handleButtonClick = () => {
   setIsDialogOpen(true);
   if (onClick) {
     onClick();
   }
 };

 const handleDialogClose = () => {
   setIsDialogOpen(false);
 };
 
 return ( <>
 <Button
   type="submit"
   fullWidth
   variant="contained"
   onClick={onClick}
   sx={{
     backgroundColor: 'White',
     '&:hover': { backgroundColor: '#414a4c', color: 'white' },
     '&:not(:hover)': { backgroundColor: '#317000', color: 'white' },
   }}
 >
   <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
 </Button>
 {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
 </>
);
};

export const CancelButton = ({ onClick, children, dialogComponent: DialogComponent, type}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 const handleButtonClick = () => {
   setIsDialogOpen(true);
   if (onClick) {
     onClick();
   }
 };

 const handleDialogClose = () => {
   setIsDialogOpen(false);
 };
 
 return ( <>
 <Button
   type="submit"
   fullWidth
   variant="contained"
   onClick={onClick}
   sx={{
     backgroundColor: 'White',
     '&:hover': { backgroundColor: '#414a4c', color: 'white' },
     '&:not(:hover)': { backgroundColor: '#860000', color: 'white' },
   }}
 >
   <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
 </Button>
 {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
 </>
);
};

export const PrepareButton = ({ onClick, children, dialogComponent: DialogComponent, type}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 const handleButtonClick = () => {
   setIsDialogOpen(true);
   if (onClick) {
     onClick();
   }
 };

 const handleDialogClose = () => {
   setIsDialogOpen(false);
 };
 
 return ( <>
 <Button
   type="submit"
   fullWidth
   variant="contained"
   onClick={onClick}
   sx={{
     backgroundColor: 'White',
     '&:hover': { backgroundColor: '#414a4c', color: 'white' },
     '&:not(:hover)': { backgroundColor: '#737500', color: 'white' },
   }}
 >
   <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
 </Button>
 {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
 </>
);
};

export const DeliverButton = ({ onClick, children, dialogComponent: DialogComponent, type}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 const handleButtonClick = () => {
   setIsDialogOpen(true);
   if (onClick) {
     onClick();
   }
 };

 const handleDialogClose = () => {
   setIsDialogOpen(false);
 };
 
 return ( <>
 <Button
   type="submit"
   fullWidth
   variant="contained"
   onClick={onClick}
   sx={{
     backgroundColor: 'White',
     '&:hover': { backgroundColor: '#414a4c', color: 'white' },
     '&:not(:hover)': { backgroundColor: '#024685', color: 'white' },
   }}
 >
   <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
 </Button>
 {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
 </>
);
};

export const OutlinedButton = ({ onClick, children, dialogComponent: DialogComponent, type }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        type={type}
        onClick={handleButtonClick}
        sx={{
          '&:hover': { borderColor: '#414a4c', backgroundColor: '#414a4c', color: 'white' },
          '&:not(:hover)': { borderColor: '#3d4242', color: 'black' },
        }}
      >
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>{children}</Typography>
      </Button>

      {DialogComponent && <DialogComponent open={isDialogOpen} onClose={handleDialogClose} />}
    </>
  );
};

export default NavbarButton;
