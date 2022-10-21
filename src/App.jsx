import Topbar from "./components/topbar/topbar"
import Homepage from "./pages/homepage/Homepage"
import Write from "./pages/write/Write"
import Login from "./pages/login/Login"
import Settings from "./pages/settings/Settings"
import Register from "./components/register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/postDetail/PostDetail";
function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/blog" element={<Homepage/>}></Route>
        <Route exact path="/write" element={currentUser ? <Write /> : <Login />}></Route>
        <Route exact path="/login" element={currentUser ? <Homepage /> : <Login />}></Route>
        <Route exact path="/post" element={<Homepage/>}></Route>
        <Route exact path="/register" element={currentUser ? <Homepage /> : <Register />}></Route>
        <Route exact path="/post/:id" element={<PostDetail/>}></Route>
        <Route exact path="/setting" element={currentUser ? <Settings /> : <Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
