import React,{ useState, useEffect,useContext } from "react";
import Typography from '@material-ui/core/Typography';
import { getDoctors, getSpeciality } from "../../common/utils/HttpConnector";
import DoctorTile from "./DoctorTile";
import SelectField from "../../common/form/SelectField";
import { makeStyles } from '@material-ui/core/styles';
import { MyContext } from "../Controller";
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });

const DoctorList = (props) => {
    const classes = useStyles();
    const [doctorsList, setDoctorsList] = useState([])
    const [specialistMenuData, setSpecialistMenuData] = useState([])
    const [selectedFilter, setSelectedFilter] = useState("")
    const { isAuthenticated, showPopup } = useContext(MyContext)
    useEffect(()=>{
        const filter = { speciality: selectedFilter}
        getDoctors(filter).then((response) => {
            setDoctorsList(response)
          })
          .catch((err) => {
            console.log(err);
          });
    },[selectedFilter])

    useEffect(()=>{
        getSpeciality().then((response) => {
            setSpecialistMenuData(response)
          })
          .catch((err) => {
            console.log(err);
          });
    },[])
    return <div className={classes.root}>
        <Typography gutterBottom variant="body1" component="p" align="center">
            Select Speciality :
        </Typography>
        <SelectField menudata={specialistMenuData} handleSelection={(e) => setSelectedFilter(e.target.value)} selectedValue={selectedFilter} />
        {
            doctorsList.map(( doctor,index) =>{
                return <DoctorTile 
                         {...doctor} 
                         key={`doctor_tile_${index}`} 
                         {...props} 
                         isAuthenticated={isAuthenticated}
                         showPopup={showPopup}
                         />
            })
        }
    </div>
}

export default DoctorList