import { Favorite } from "@mui/icons-material"
import Biography from "../../components/biography/Biography"
import BookInfo from "../../components/books/BookInfo"
import Books from "../../components/booksInfo/Books"
import Topslider from "../../components/topslider/Topslider"
import Trending from "../../components/trending/Trending"
import "./home.css"

function Home() {
  return (
    <div className="home">
      <Topslider/>
      <BookInfo/>
      <h4>Top 10 in India</h4>
      <Books/>
      <h4>Trending Now</h4>
      <Trending/>
      <h4>Best in Self Help</h4>
      <Biography/>
      <h4>Best in Motivation</h4>
      <Trending/>
      <p className="footer">Made with <Favorite style={{color: 'red'}}/> in India</p>
    </div>
  )
}

export default Home
