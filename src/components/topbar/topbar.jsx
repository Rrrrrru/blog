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
        <ul className="toplist">
          <li className="topListItem">1</li>
          <li className="topListItem">2</li>
          <li className="topListItem">3</li>
          <li className="topListItem">4</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src=" https://media.istockphoto.com/photos/-picture-id499808648?s=612x612 " alt="" />
      </div>
    </div>
  )
}
