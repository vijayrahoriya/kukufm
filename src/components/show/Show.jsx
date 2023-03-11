import { CommentOutlined, PlayArrow, ShareOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import "./show.css"
function Show() {
    const [showInfo, setShowInfo] = useState(true)
    const [active,setActive] = useState(false)
    const loaction = useLocation();
    console.log(loaction)
    const showHideEpi = () => {
        setShowInfo(!showInfo)
        setActive(!active)
    }

    return (
        <div className="show">
            <div className="show-box">
                <div className="image2">
                    <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:85/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                </div>
                <div className="show-info">
                    <div className="left">
                        <h3 className="title">Rich Dad Poor Dad</h3>
                        <span className="lang">13+</span>
                        <span className="listens"><b>27 Lacks </b>Listens</span>
                        <p>AUDIO BOOK | HINDI | PERSONAL FINANCE</p>
                    </div>
                    <div className="right">
                        <div className="rating">
                            <span>4.1 *</span>
                            <ShareOutlined className="shareIcon" />
                        </div>
                        <span className="time">630mins</span>
                    </div>
                </div>
                <button className="play"><PlayArrow /> Play</button>
                <h4>Manjul Publishing House</h4>
                <p>Schools mein humara education system financial skills se zyada professional skills pe focus karta hai. Log apne professional career mein bohot accha success paane ke bavajood bhi financially strong nahi hote. Yeh Full Audiobook aapko apna dimaag aur waqt ka istemaal karke apne investments aur business throgh wealth kamaane ke rules samjhaati hai. Aapke paise aapke liye kaam karenge naaki aap paison ke liye</p>
                <div className="aboutShow">
                    <div className={active ? "episode" : "episode active"} onClick={showHideEpi}>58 Episode</div>
                    <div className={active ? "details active" : "details"}  onClick={showHideEpi}>Details</div>
                </div>
                {showInfo ? (<ul className="epList">
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                    <li>
                        <div className="left">
                            <div className="image">
                                <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png" alt="" />
                            </div>
                            <div className="content">
                                <span>Part 1 * 3mins * Nov 24,2022</span>
                                <h3>Paise ko smjhna aur sambhaalna</h3>
                            </div>
                        </div>
                        <div className="right"><CommentOutlined /></div>
                    </li>
                </ul>) : (
                    <div className="detailsInfo">
                        <h3>Details</h3>
                        <div className="field">
                            <span className="artist">Voice Artist</span>
                            <div className="artistInfo">
                                <img src="https://images.cdn.kukufm.com/w:32/q:85/https://kukufm.s3.amazonaws.com/avatars/706de3de949a46df9987a24f696562b2.jpg" alt="" />
                                <span className="name">Avadhesh Srivastava</span>
                            </div>
                        </div>
                        <div className="field">
                            <span className="artist">Producer</span>
                            <div className="artistInfo">
                                <img src="https://images.cdn.kukufm.com/w:32/q:85/https://kukufm.s3.amazonaws.com/avatars/1a4c70593ef54742b347c183cf448839.png" alt="" />
                                <span className="name">Manjul Publishing House</span>
                            </div>
                        </div>
                        <p>Schools mein humara education system financial skills se zyada professional skills pe focus karta hai. Log apne professional career mein bohot accha success paane ke bavajood bhi financially strong nahi hote. Yeh Full Audiobook aapko apna dimaag aur waqt ka istemaal karke apne investments aur business throgh wealth kamaane ke rules samjhaati hai. Aapke paise aapke liye kaam karenge naaki aap paison ke liye</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Show
