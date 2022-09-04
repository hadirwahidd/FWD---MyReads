import "../css/App.css";
import MainPage from "./MainPage.js";
import SearchPage from "./SearchPage.js";
import NotFound from "./NotFound.js";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;