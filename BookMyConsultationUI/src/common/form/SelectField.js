import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    inputEntry: {
        '& .MuiFilledInput-input' :{
            padding: '12px 12px 10px'
        }
    }
  }));

const SelectField = (props) => {
  const classes = useStyles();
  const { menudata, handleSelection, selectedValue } = props
    return <FormControl variant="filled" className={classes.formControl}>
    <Select
      value={selectedValue}
      onChange={handleSelection}
      className={classes.inputEntry}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      { menudata.map((value, index) => {
        return <MenuItem key={`speciality_${index}`}value={value}>{value}</MenuItem>
      })
      }
    </Select>
  </FormControl>
}

export default SelectField