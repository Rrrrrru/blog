import Topbar from "./components/topbar/topbar"
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/blog" element={<Homepage/>}></Route>
        <Route exact path="/post" element={<Homepage/>}></Route>
        <Route exact path="/register" element={<Homepage/>}></Route>
        <Route exact path="/post/:id" element={<Homepage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
