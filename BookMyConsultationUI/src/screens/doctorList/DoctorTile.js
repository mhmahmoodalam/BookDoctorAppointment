import React,{ useState } from "react";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
    root:{
        width: "40%"
    },
    btnContainer:{
        display: 'flex',
        flexWrap: 'nowrap'
    },
    btn : {
        width: '40%',
        margin: '10px'
    },
    paper : {
        textAlign:'left',
        margin: '15px',
        padding: '20px',
        cursor: 'pointer'
    }
  });

const DoctorTile = (props) => {
    const classes = useStyles();
    const {  isAuthenticated, showPopup, doctorData={} } =props
    const { firstName, lastName, speciality, rating, id } = doctorData
    return (
        <Grid item  key={id} className={classes.root} >
            <Paper className={classes.paper} > 
                <Typography gutterBottom variant="body1" component="p" >
                    {`Doctor Name : ${firstName} ${lastName}`}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    Speciality : {speciality}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    Rating : {rating}
                </Typography>
                <div className={classes.btnContainer}>
                    <Button className={classes.btn} variant='contained' color="primary" size="small" onClick={() => {
                        if(isAuthenticated){
                            showPopup("BookAppointment", doctorData)
                        }else {
                            alert("Please login to book an appointment")
                        }
                    }}>Book Appointment</Button>
                    <Button className={classes.btn} variant='contained' color="secondary"  size="small" onClick={() =>showPopup("DoctorDetails",doctorData)}>View Details</Button>
                </div>
            </Paper>
        </Grid>
    )
}

export default DoctorTile