import { Link } from "react-router-dom"
import "./biography.css"

function Biography() {
    return (
        <div className="bio">
            <div className="bigBox">
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
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bec56fc02eae4a3cbfe7d9596eab1335.jpeg" alt="" />
                    </div>
                    <span>Dil Bechara</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/8fc000fc54874e869449571e1ad41a50.jpeg" alt="" />
                    </div>
                    <span>Ishp Ya Junoon</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/7ee2df007d7a4961947bd5b76e8e469d.png" alt="" />
                    </div>
                    <span>Improve Your <br /> Digestive System</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png" alt="" />
                    </div>
                    <span>Chankya Niti</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/9c3acfdcbe6d471a848b26589c90c0cd.png" alt="" />
                    </div>
                    <span>Ajab Sa Ishq</span>
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
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/f27721a746b74a99a82702ac6145b631.png" alt="" />
                    </div>
                    <span>The Discovery Of India</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/25b101daf78d4093a4fab9d5493a0879.png" alt="" />
                    </div>
                    <span>Dil Beparwah</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/08b9daea2f02462f852da17abe8b0ca6.png" alt="" />
                    </div>
                    <span>The Mystery Of Love</span>
                </Link>
                <Link to={'/show'} className="box link">
                    <div className="badges">Premium</div>
                    <div className="image">
                        <img src="https://images.cdn.kukufm.com/w:300/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg" alt="" />
                    </div>
                    <span>Zindagi Apne Liye Jiye</span>
                </Link>
            </div>
        </div>
    )
}

export default Biography
