import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />}>
          </Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;

  /* <Router>
<Routes>
  <Route path="/search" element={<SearchPage/>}>
  </Route>
  <Route exact path="/" element={<Home/>}>    
  </Route>
</Routes>
</Router> */

