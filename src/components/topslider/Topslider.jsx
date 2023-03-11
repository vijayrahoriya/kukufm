import { PlayCircleOutline } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./topslider.css"

function Topslider() {
    return (
        <div className="topslider">
            <div className="bigBox2">
            <Link to={'/show'} className="box link">
                <div className="image">
                    <img src="https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                </div>
                <div className="info">
                    <span>Rich Dad Poor Dad</span>
                    <PlayCircleOutline className="playIcon" />
                </div>
            </Link>
            <Link to='/show' className="box link">
                <div className="image">
                    <img src="https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/09e9be730cfe48cbbbf0aab0d3ed9563.png" alt="" />
                </div>
                <div className="info">
                    <span>India After Gandhi</span>
                    <PlayCircleOutline className="playIcon" />
                </div>
            </Link>
            <Link to='/show' className="box link">
                <div className="image">
                    <img src="https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bfcbb6e353054f7ebf7c791563f8f760.jpeg" alt="" />
                </div>
                <div className="info">
                    <span>Doglapan: The Hard Truth</span>
                    <PlayCircleOutline className="playIcon" />
                </div>
            </Link>

            <Link to='/show' className="box link">
                <div className="image">
                    <img src="https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/772b3c6c38074bcaab5e3690bd5ec3bf.png" alt="" />
                </div>
                <div className="info">
                    <span>The Power Of Subconcious MIND</span>
                    <PlayCircleOutline className="playIcon" />
                </div>
            </Link>
            <Link to='/show' className="box link">
                <div className="image">
                    <img src="https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/c2beac180e854b9ba350cbed7673e40f.png" alt="" />
                </div>
                <div className="info">
                    <span>The Pcychology of Money</span>
                    <PlayCircleOutline className="playIcon" />
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Topslider
