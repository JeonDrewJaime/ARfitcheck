import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, Box, Divider, TextField, Grid} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CancelButton, FilledButton } from '../UI/Buttons';
import StyledTextFields from '../UI/TextFields';

const ProductDescription = ({ open, onClose }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleUpload = () => {
    // Your upload logic here
    console.log('Uploading file:', file);
    // Clear selected file and close dialog
    setFile(null);
    setFileName('');
    onClose();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleChooseFileClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ width: '800px', height: '600px' }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#C9C9C9" }}>
        <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
          PRODUCT DESCRIPTION
        </Typography>
        <CancelButton onClick={onClose}>X</CancelButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={6} sx={{ backgroundColor: "lightblue" }}>
              {/* Content for First Column */}
              <Box sx={{ p: "100%" }}>
                {/* Add content here */}
              </Box>
            </Grid>
            {/* Second Column */}
            <Grid item xs={6} sx={{ backgroundColor: "lightgreen" }}>
              {/* Content for Second Column */}
              <Box>
                {/* Add content here */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDescription;
