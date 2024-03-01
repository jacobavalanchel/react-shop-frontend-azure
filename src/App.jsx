import React, {useRef, useState, ChangeEvent} from "react";
import './index.css'
import {Container, Button, TextField, CssBaseline, Box} from "@mui/material";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import Topbar from "./Appbar.jsx"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomePage from "./HomePage.jsx";
import MarketPage from "./MarketPage.jsx";
import MyPage from "./MyPage.jsx";
import SuggestionPage from "./SuggestionPage.jsx"
import {Toaster} from "react-hot-toast";


function App() {
    const [currentTab, setCurrentTab] = React.useState(0);
    return (
        <React.Fragment>
            <CssBaseline/>
            {/*//data binding*/}
            <Topbar/>


            <Toaster
                position="top-center"
            />
            <div className="App pb-10">
                <Router>
                    <Routes>
                        <Route path="/" exact element={<HomePage/>}/>
                        <Route path="/about" element={<SuggestionPage/>}/>
                        <Route path="/services" element={<MarketPage/>}/>
                        <Route path="/contact" element={<MyPage/>}/>
                    </Routes>
                </Router>
            </div>
                <BottomNavigation
                    className="bottomNavigation"
                    value={currentTab}
                    onChange={(event,newValue)=>{setCurrentTab(newValue);console.log(newValue);}}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon/>} href="/"/>
                    <BottomNavigationAction label="About" icon={<InfoIcon/>} href="/about"/>
                    <BottomNavigationAction label="Services" icon={<WorkIcon/>} href="/services"/>
                    <BottomNavigationAction label="Contact" icon={<ContactMailIcon/>} href="/contact"/>
                </BottomNavigation>

        </React.Fragment>
    );
}

export default App;
