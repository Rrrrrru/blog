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
            <Link className="homeLink" to={"/blog"}>HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONNECT</li>
          <li className="topListItem">
            <Link className="writeLink" to={"/write"}>WRITE</Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <img className="topImg" src=" https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg " alt="" />
      </div>
    </div>
  )
}
