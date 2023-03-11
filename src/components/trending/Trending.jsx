import { Link } from "react-router-dom"
import "./trending.css"

function Trending() {
    return (
        <div className='trending'>
            <div className="bigBox">
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/12faae0f14ed4c83bb4d67cfe4d5f09b.png" alt="" />
                    </div>
                    <span>Shrimad Baghwad Geeta</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png" alt="" />
                    </div>
                    <span>Rich Dad Poor Dad</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bfcbb6e353054f7ebf7c791563f8f760.jpeg" alt="" />
                    </div>
                    <span>Doglapan: The Hard Truth</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/6742449490f14328938296b799449ecc.png" alt="" />
                    </div>
                    <span>Improve Your Memory Power</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3765dcba46cb4842b886bc7643132f4d.png" alt="" />
                    </div>
                    <span>Apna Routine Kese <br/> Set Kare</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/8fc000fc54874e869449571e1ad41a50.jpeg" alt="" />
                    </div>
                    <span>Ishq Ya Junoon</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c0331a4a84e94b5186723ac31ac920b9.png" alt="" />
                    </div>
                    <span>100 things Successful<br/>People Do</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png" alt="" />
                    </div>
                    <span>Rich Dad Poor Dad</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/d423fb99bc744a928e545733234e6612.jpg" alt="" />
                    </div>
                    <span>Ramayan</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3765dcba46cb4842b886bc7643132f4d.png" alt="" />
                    </div>
                    <span>Apna Routine Kese <br/> Set Kare</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/8fc000fc54874e869449571e1ad41a50.jpeg" alt="" />
                    </div>
                    <span>Ishq Ya Junoon</span>
                </Link>
            </div>
        </div>
    )
}

export default Trending
