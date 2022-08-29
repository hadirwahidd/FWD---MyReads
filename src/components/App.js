import "../css/App.css";
import MainPage from "./MainPage.js";
import SearchPage from "./SearchPage.js";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;