import React from "react";
import "./Header.css"
import logo from "../../assets/logo.jpeg"
import Button from '@material-ui/core/Button'

const LoginButton = () => {
    return <Button variant="contained" color="primary" >Login</Button>
}
const LogoutButton = () => {
    return <Button variant="contained" color="secondary">Logout</Button>
}

const Header = (props) => {
    const { isLoggedIn } = props
    return <div className="header-container"> 
        <div className="header-title-container">
            <img src={logo} alt="header-logo" className="header-logo" />
            <div className="header-title">Doctor Finder</div>
        </div>
        <div className="login-btn">
            {isLoggedIn && <LogoutButton/>}
            {!isLoggedIn && <LoginButton/>}
        </div>
    </div>
}
export default  Header