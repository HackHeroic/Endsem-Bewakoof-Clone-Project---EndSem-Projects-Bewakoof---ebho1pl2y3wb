import { Outlet } from "react-router-dom";
import '../pages/homePage.css'
import NavBar from "../components/navBar";

const Homepage = () =>{
    return (
        <div className="homepage-container">
            <div className="navbar-container">
                <NavBar/>
                <hr className="navbar-seperator"/>
            </div>
            <div className="body-container">
                <Outlet/>
            </div>
        </div>
    )
}

export default Homepage;
