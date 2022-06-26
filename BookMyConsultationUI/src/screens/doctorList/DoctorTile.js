import React,{ useState } from "react";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      width: "40%",
      margin: "16px",
      padding: "20px",
    },
    btnContainer:{
        display: 'flex',
        flexWrap: 'nowrap'
    },
    btn : {
        width: '40%',
        margin: '10px'
    }
  });

const DoctorTile = (props) => {
    const classes = useStyles();
    const { firstName, lastName, speciality, rating, id, isAuthenticated, showPopup } =props
    return <Paper className={classes.root} > 
                <Typography gutterBottom variant="body1" component="p" align="left">
                    {`Doctor Name : ${firstName} ${lastName}`}
                </Typography>
                <Typography variant="body2" component="p" align="left">
                    Speciality : {speciality}
                </Typography>
                <Typography gutterBottom variant="body2" component="p" align="left">
                    Rating : {rating}
                </Typography>
            <div className={classes.btnContainer}>
                <Button className={classes.btn} variant='contained' color="primary" size="small" onClick={() => {
                    if(isAuthenticated){
                        showPopup("BookAppointment")
                    }else {
                        showPopup("Authentication")
                    }
                }}>Book Appointment</Button>
                <Button className={classes.btn} variant='contained' color="secondary" size="small" onClick={() =>showPopup("DoctorDetails")}>View Details</Button>
            </div>
        </Paper>
}

export default DoctorTile