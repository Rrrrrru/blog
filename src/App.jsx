import Topbar from "./components/topbar/topbar"
import Homepage from "./pages/homepage/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/postDetail/postDetail";
function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/blog" element={<Homepage/>}></Route>
        <Route exact path="/post" element={<Homepage/>}></Route>
        <Route exact path="/register" element={<Homepage/>}></Route>
        <Route exact path="/post/:id" element={<PostDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
