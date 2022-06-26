import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TabContainer from "../tabContainer/TabContainer"
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  tabs: {
        "& .MuiTabs-indicator": {
          backgroundColor: "#3f50b5"
        }
      
      }
  });

const LoginPopupContent = (props) => {
    const [tabValue, setTabValue] = useState(0);
    const classes  = useStyles()
    const handleTabChange = (event, value) => setTabValue(value);
    return <>
            <Tabs value={tabValue} onChange={handleTabChange} centered className={classes.tabs}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                {tabValue === 0 && (
                    <TabContainer>
                        <Login {...props}/>
                    </TabContainer>
                )}
                {tabValue === 1 && (
                    <TabContainer>
                        <Register {...props}/>
                    </TabContainer>
                )}
            </>
}

const BookAppointmentPopupContent = (props) => {
    return <>
    </>
}

const DoctorDetailsPopupContent = (props) => {
    return <>
    </>
}
export const PopupContent = (props) => {
    const { popupType } = props      
    return <Card className="popup__header_container">
                <CardHeader  className="popup__header"      
                    title={popupType}
                />
                <CardContent>
                    {popupType === "Authentication" &&
                        <LoginPopupContent {...props} />
                    }
                    {popupType === "BookAppointment" &&
                        <BookAppointmentPopupContent {...props} />
                    }
                    {popupType === "DoctorDetails" &&
                        <DoctorDetailsPopupContent {...props} />
                    }
                </CardContent>
            </Card>

}


