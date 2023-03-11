import "./topbar.css"
import logo from '../../assests/logo.jpg'
import { ArrowDropDown, DensitySmall, Download } from "@mui/icons-material"
import { ArrowForward, Close, Favorite, KeyboardArrowRight, Rocket } from "@mui/icons-material"
import { useEffect, useRef } from "react"
import Login from "../../pages/login/Login"
import { Link } from "react-router-dom"

function Topbar() {
    const ref = useRef();
    const loginRef = useRef();

    useEffect(() =>{
        loginRef.current.style.display = 'none'
    },[])

    const showLogin = () =>{
        loginRef.current.style.display = 'block'
        ref.current.classList.remove('active')
    }

    const handlesidebar = () =>{
        ref.current.classList.add('active')
    }

    const hideSidebar = () =>{
        ref.current.classList.remove('active')
    }

    return (
        <div className="topbar">
            <div className="left1">
                <DensitySmall onClick={handlesidebar} className="topbarIcon"/>
                <Link to={'/'} className="link"><img src={logo} alt="" className="logo" /></Link>
                <input className="topbarInput" type="text" placeholder="Search audiobook & series" />
            </div>
            <div className="right1">
                <ul className="topbarList">
                    <li>
                        <p>Language <ArrowDropDown /></p>
                        <span>Select</span>
                    </li>
                    <Link to={'/subscribe'} className="link"><li>By Premium</li></Link>
                    <li onClick={showLogin}>Login/Singup</li>
                    <li><Download className="topbarIcon" /></li>
                </ul>
            </div>
            <div  ref={loginRef} className="login">
                <Login/>
            </div>
            <div ref={ref} className="sidebar">
                <div className="top">
                    <Close className="closeIcon" onClick={hideSidebar} />
                    <Link onClick={hideSidebar} to={'/'} className="link">
                    <img src={logo} alt="" className="logo" /></Link>
                </div>
                <div className="mid">
                    <div className="left" onClick={showLogin}>
                        <h3>Login/Signup</h3>
                        <span>For better  & customized experience</span>
                    </div>
                    <div className="right">
                        <ArrowForward className="arrowIcon" />
                    </div>
                </div>
                <ul className="lists">
                    <li><span>Genral</span><KeyboardArrowRight /></li>
                    <li><span>About</span><KeyboardArrowRight /></li>
                    <li><span>Legal</span><KeyboardArrowRight /></li>
                    <li><span>Premium</span></li>
                    <li><span>Blog</span></li>
                    <li><span>Download kuku fm App</span></li>
                    <li><span>Careers <Rocket /></span></li>
                    <li><span>Creators hub</span></li>
                </ul>
                <p>Made with <Favorite style={{ color: "red" }} /> in India</p>
            </div>
        </div>
    )
}

export default Topbar
