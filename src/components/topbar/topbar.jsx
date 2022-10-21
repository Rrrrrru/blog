import { Link } from "react-router-dom"
import "./topbar.css"
export default function topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="HomeLink" to={"/blog"}>HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONNECT</li>
          <li className="topListItem">4</li>
        </ul>
      </div>

      <div className="topRight">
        <img className="topImg" src=" https://media.istockphoto.com/photos/-picture-id499808648?s=612x612 " alt="" />
      </div>
    </div>
  )
}
