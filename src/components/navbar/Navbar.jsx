import { useRef } from "react"
import "./navbar.css"

function Navbar() {
    const ref = useRef();
    const refSecond = useRef();

    const handleLists = () => {
        ref.current.lastElementChild.style.display = 'flex'
    }

    const hideLists = () => {
        ref.current.lastElementChild.style.display = 'none'
    }

    const handleLists2 = () => {
        refSecond.current.lastElementChild.style.display = 'flex'
    }

    const hideLists2 = () => {
        refSecond.current.lastElementChild.style.display = 'none'
    }

    return (
        <div className="navbar">
            <ul>
                <li onMouseLeave={hideLists} onMouseEnter={handleLists} ref={ref}>Full Books
                    <div className="lists">
                        <span>Biography</span>
                        <span>Business</span>
                        <span>Career</span>
                        <span>Comedy</span>
                        <span>Crime</span>
                        <span>Entertainment</span>
                        <span>Fitness</span>
                        <span>Historical</span>
                        <span>How To</span>
                        <span>Information</span>
                        <span>Love</span>
                        <span>Motivation</span>
                        <span>Personal Finance</span>
                        <span>Religion</span>
                        <span>Science</span>
                        <span>Self Help</span>
                        <span>Society and Culture</span>
                        <span>Thriller</span>
                    </div>
                </li>
                <li  onMouseLeave={hideLists2} onMouseEnter={handleLists2} ref={refSecond}>Book Summary
                    <div className="lists">
                        <span>Biography</span>
                        <span>Business</span>
                        <span>Career</span>
                        <span>Crime</span>
                        <span>Fitness</span>
                        <span>Historical</span>
                        <span>How To</span>
                        <span>Information</span>
                        <span>Kids</span>
                        <span>Motivation</span>
                        <span>Personal Finance</span>
                        <span>Religion</span>
                        <span>Science</span>
                        <span>Self Help</span>
                        <span>Society and Culture</span>
                    </div>
                </li>
                <li>Course</li>
                <li>Story</li>
            </ul>
        </div>
    )
}

export default Navbar
