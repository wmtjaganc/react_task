
import HeaderNav from "./Component/Header";
import Home from "./Page/Home";
import "./Assets/CSS/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
