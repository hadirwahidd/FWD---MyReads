import "../css/App.css";
//import { useState } from "react";
import MainPage from "./MainPage.js";
import SearchPage from "./SearchPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  //const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;