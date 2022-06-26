import React,{ useState, useEffect } from "react";
import { FormControl, Grid, TextField, Button } from "@material-ui/core";
import SelectField from "../../common/form/SelectField";
import {
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import moment from "moment";
import { getDoctorAvailableTimeSlot } from "../../common/utils/HttpConnector";
const BookAppointment = (props) => {
    const { doctorDetails } = props
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
    const [appointmentDate, setAppointmentDate ] = useState(moment())
    const [doctorTimeSlots, setDoctorAvailableTimeSlots] = useState([])
    
    const handleDateSelection = (date) => {
        setAppointmentDate(date)
    }
    useEffect(() => {
        getDoctorAvailableTimeSlot(doctorDetails.id,moment(appointmentDate).format("YYYY-MM-DD"))
        .then( data => {
            setDoctorAvailableTimeSlots(data.timeSlot)
        })
    },[])

    useEffect(() => {
        getDoctorAvailableTimeSlot(doctorDetails.id,moment(appointmentDate).format("YYYY-MM-DD"))
        .then( data => {
            setDoctorAvailableTimeSlots(data.timeSlot)
        })
    },[appointmentDate])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"            
            >
            <Grid item xs >
                <FormControl fullWidth>
                    <TextField 
                        disabled
                        id="doctor_name" 
                        defaultValue={`${doctorDetails.firstName} ${doctorDetails.lastName}`}
                        label="Doctor Name"
                        variant="standard" 
                        required
                    />
                    <KeyboardDatePicker
                        autoOk={true}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="appointment-date-inline"
                        label="Appointment Date"
                        value={appointmentDate} 
                        onChange={handleDateSelection}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        minDate={moment()}       
                    />
                    <SelectField 
                      menudata={doctorTimeSlots} 
                      handleSelection={(e) => setSelectedTimeSlot(e.target.value)} 
                      selectedValue={selectedTimeSlot}
                      variant="standard"
                      label="TimeSlot"
                    />
                    <TextField
                        id="medical-history-multiline"
                        label="Medical History"
                        multiline
                        minRows={4}
                        defaultValue=""
                    />
                    <TextField
                        id="symtoms-multiline"
                        label="Symptoms"
                        multiline
                        minRows={4}
                        defaultValue=""
                        
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" type="submit">
                        Book Appointment
                    </Button>
                </FormControl>
            </Grid>
        </form>
    )
}

export default BookAppointment