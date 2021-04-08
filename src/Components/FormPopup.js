import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {FaEdit } from "react-icons/fa";
import EditForm from './EditForm';


export default function FormPopup(props) {
    const [open, setOpen] = React.useState(false);
   
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

   
    return (
        <div className="pb-4 "   >
          <FaEdit style={{ color: "#F4A460", fontSize: "1.2rem" }}  onClick={handleClickOpen}/>
    
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>
                   <EditForm handleClose={handleClose} /> 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>

                </DialogActions>
            </Dialog>
       
          </div>

         
    );
}