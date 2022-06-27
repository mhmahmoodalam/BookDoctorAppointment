import { Typography } from "@material-ui/core";
import React,{ useState, useContext } from "react";
import { MyContext } from "../Controller";
const Appointment = (props) => {
 
    const { isAuthenticated, showPopup } = useContext(MyContext)
    if(!isAuthenticated){
        return <div>
            <Typography variant="body1" component="p" >
                Login to see appointments
            </Typography>
        </div>
    }
    return (
    <div>Appointment</div>
    )
}

export default Appointment