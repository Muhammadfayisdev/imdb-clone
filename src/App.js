// import logo from './logo.svg';
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Recent from "./components/Recent";
import Watchlist from "./components/Watchlist";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/recent" element={<Recent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
