import { ArrowForward, ArrowRight, CurrencyRupee, DownloadForOfflineOutlined, FacebookRounded, Favorite, Hd, Instagram, KeyboardArrowRight, LockOpen, WarningAmberOutlined } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"
import "./primium.css"

function Primimum() {
    let index = 0;
    const [active, setActive] = useState(false)
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const sliderRef = useRef();

    useEffect(()=>{
        setInterval(() => {
            if(index == 5){
                index = 0;
            }
            document.querySelector('.indicate').classList.remove('indicate')
            sliderRef.current.style.transform = `translateX(-${index * 20}%)`
            document.querySelectorAll('.indicator-box')[index].classList.add('indicate')
            index += 1;
        }, 2000);
    },[index])

    const changeActive = () => {
        setActive(!active)
    }

    const showContent = (e) => {
        firstRef.current.lastElementChild.classList.toggle('show')
    }

    const showContent2 = (e) => {
        secondRef.current.lastElementChild.classList.toggle('show')
    }

    const showContent3 = (e) => {
        thirdRef.current.lastElementChild.classList.toggle('show')
    }

    return (
        <div className="primium">
            <div className="priBox">
                <div className="container">
                    <div className="slider-big" ref={sliderRef}>
                    <div className="slider-box">
                        <span>High quality audio<br />content</span>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/listen_hd_new.png" alt="" />
                    </div>
                    <div className="slider-box">
                        <span>No more ads and <br />interpretion</span>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/no_ad_new.png" alt="" />
                    </div>
                    <div className="slider-box">
                        <span>Unlimited downloads on<br />android and ios</span>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/more_down_new.png" alt="" />
                    </div>
                    <div className="slider-box">
                        <span>Earn by referels and<br />challenges</span>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/earn_by_refral.png" alt="" />
                    </div>
                    <div className="slider-box">
                        <span>10,000+ shows new<br />show everyday</span>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/lock_new.png" alt="" />
                    </div>
                    </div>
                    <div className="indicators">
                        <div className="indicator-box indicate">
                            <Hd/>
                            <span>Hd Streaming</span>
                        </div>
                        <div className="indicator-box">
                            <LockOpen/>
                            <span>All shows <br/>unlocked</span>
                        </div>
                        <div className="indicator-box">
                            <WarningAmberOutlined/>
                            <span>Ad free<br/>experience</span>
                        </div>
                        <div className="indicator-box">
                            <DownloadForOfflineOutlined/>
                            <span>Unlimited Downloads</span>
                        </div>
                        <div className="indicator-box">
                            <CurrencyRupee/>
                            <span>Earn Unlimited</span>
                        </div>
                    </div>
                </div>
                <div className="top">
                    <div onClick={changeActive} className={active ? "left" : "left active"}>
                        <h4>Monthly</h4>
                        <span>1 Month</span>
                        <h3>₹ 99</h3>
                    </div>
                    <div onClick={changeActive} className={active ? "right  active" : "right"}>
                        <h4>Annual</h4>
                        <span>12 Months</span>
                        <h3>₹ 899</h3>
                    </div>
                </div>
                <div className="cupon">
                    <header>Enter coupon code</header>
                    <div className="row">
                        <div className="tags">
                            <h4>HOLI60</h4>
                            <span>save 60%</span>
                        </div>
                        <div className="tags">
                            <h4>KUKU50</h4>
                            <span>save 50%</span>
                        </div>
                    </div>
                </div>
                <h4 className="heading">Our top premium shows</h4>
                <div className="sliderBox">
                    <div className="slider">
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/52d6526107d947a59b09865c23324c0d.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/054632528922462b84c15f92510d3bf7.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/09e9be730cfe48cbbbf0aab0d3ed9563.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/c2beac180e854b9ba350cbed7673e40f.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/236d19724b2c49d8b675797e3b62cb34.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3eb90361ebb94e9390b06bc3405acda6.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/b6e47393015b40a8bc3fc16ffc9f0bac.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/236d19724b2c49d8b675797e3b62cb34.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/52d6526107d947a59b09865c23324c0d.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/054632528922462b84c15f92510d3bf7.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/09e9be730cfe48cbbbf0aab0d3ed9563.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/c2beac180e854b9ba350cbed7673e40f.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/236d19724b2c49d8b675797e3b62cb34.png" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://images.cdn.kukufm.com/w:200/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3eb90361ebb94e9390b06bc3405acda6.png" alt="" />
                        </div>
                    </div>
                </div>
                <h4 className="heading">Loved by 20 Lakh+ subscribers</h4>
                <div className="sliderBox">
                    <div className="slider">
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                        <div className="info-box">
                            <div className="top2">
                                <div className="left">
                                    <h5>Dr. Alan Jame</h5>
                                    <span>"Drive, exercise, or sleep"</span>
                                </div>
                                <div className="right">
                                    <img src="https://images.cdn.kukufm.com/https://kukufm.s3.ap-south-1.amazonaws.com/static/1-t-min.webp" alt="" />
                                </div>
                            </div>
                            <p>I listen to it while traveling because you can download books and listen offline.I listen to it while traveling because you can download books and listen offline.</p>
                            <p>Recommended for anyone who hates to travel alone.</p>
                        </div>
                    </div>


                </div>
                <div ref={firstRef} onClick={showContent} className="dropdown" id="first">
                    <div className="line">
                        <span>What are the benefits of buying KukuFM Premium?</span>
                        <KeyboardArrowRight />
                    </div>
                    <div className="content">
                        KukuFM Premium brings you doses of Motivation and self-help content which can help you gain more control on your life. It can help you to build your confidence improve career prospects inculcate healthy habits which results in mindfulness and fitness improves your character which inculcates healthy relationships. So why not invest in your personal growth when you can get all at one place.
                    </div>

                </div>
                <div onClick={showContent2} ref={secondRef} className="dropdown" id="second">
                    <div className="line">
                        <span>What is included in the premium subscription?</span>
                        <KeyboardArrowRight />
                    </div>
                    <div className="content">
                        The premium subscription includes UNLIMITED ACCESS TO ALL CONTENT on Kuku FM - we offer self help and motivational shows audiobook summaries stories and much more. Every show on the Kuku FM app is included in your subscription.
                    </div>

                </div>
                <div onClick={showContent3} ref={thirdRef} className="dropdown" id="third">
                    <div className="line">
                        <span>What payment modes does KukuFM Premium support?</span>
                        <KeyboardArrowRight />
                    </div>
                    <div className="content">
                        You can pay us through your multiple payment modes we support: • Debit cards (visa mastercard) • Credit cards ( visa mastercard ) • UPI (Phone pay Google Pay Paytm BHIM and other UPI apps) • Netbanking We are using razorpay’s payment gateway for all the payments which is trusted for maximum security with your money. Everything is PCI DSS compliant.
                    </div>

                </div>
                <button className="view">View all FAQs</button>
                <div className="last">
                    <p>Or just email us at <span>info@kukufm.com</span></p>
                    <h2>Stay Connnected</h2>
                    <h4>Made with <Favorite style={{ color: 'red' }} /> in India</h4>
                    <div className="end">
                        <div className="left" style={{ color: 'skyblue' }}>
                            <img src="https://d1l07mcd18xic4.cloudfront.net/static/facebook-v2.svg" alt="" />
                            <span>Kukufm</span>
                        </div>
                        <div className="right" style={{ color: 'orangered' }}>
                            <img src="https://d1l07mcd18xic4.cloudfront.net/static/instagram-v2.svg" alt="" />
                            <span>Kuku_fm</span>
                        </div>
                    </div>
                    <div className="end">
                        <p>About Us <KeyboardArrowRight /></p>
                        <p>Support <KeyboardArrowRight /></p>
                    </div>
                </div>
                <div className="offer">
                    <div className="offername">
                        <h3><span>₹</span> 99</h3>
                        <h3 className="buy">Buy Now <ArrowForward /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Primimum
