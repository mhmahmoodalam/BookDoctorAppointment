import React,{ useState,useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
const DoctorDetails = (props) => {
    const { doctorDetails } = props
    return <Grid item xs key={doctorDetails.id} >
        {doctorDetails &&
        <>
            <Typography gutterBottom variant="body1" component="p" >
                {`Dr. ${doctorDetails.firstName} ${doctorDetails.lastName}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Total Experience: ${doctorDetails.totalYearsOfExp}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Speciality: ${doctorDetails.speciality}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Date of Birth: ${doctorDetails.dob}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`City:  ${doctorDetails.address && doctorDetails.address.city}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Email: ${doctorDetails.emailId}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Mobile: ${doctorDetails.mobile}`}
            </Typography>
            <Typography  variant="body2" component="p" >
                {`Rating: ${doctorDetails.rating}`}
            </Typography>
        </>
        }
    </Grid>
}

export default DoctorDetails