import React,{ useEffect } from "react";
import Home from "../screens/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../common/header/Header"
import 'typeface-roboto'
import Popup from "../common/popup/Popup"

import { createTheme,  ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import * as TokenUtil from "../common/utils/TokenUtil";

export const MyContext = React.createContext({});


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
    },
    brand: purple,
    secondary: {
      light: green["A400"],
      main: green[700],
      dark: green[900],
    },
  },
});

const Controller = () => {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);
  const [popupType, setPopupType] = React.useState("");
  const [isAuthenticated, setAuthenticated] = React.useState(TokenUtil.isAuthenticated());
  const handleLogout = () => {
    setAuthenticated(false)
    TokenUtil.clearToken()
  }
  const showPopup= (type) => {
    setPopupType(type)
    setPopupIsOpen(true)
  }
  const contextValue = {
    popupIsOpen,
    popupType,
    isAuthenticated,
    showPopup,
    setAuthenticated,
    handleLogout
  }
  useEffect(() => {

  })
  return (
    <MyContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="main-container">
            <Header />          
            <Route
              exact
              path="/"
              render={(props) => <Home {...props}/>}
            />
          </div>
        </Router>
        <Popup closePopup={()=>setPopupIsOpen(false)}/>
      </ThemeProvider>
    </MyContext.Provider>
  );
};

export default Controller;
