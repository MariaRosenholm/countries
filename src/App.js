import React from "react";
import CountryList from "./components/CountryList";
import Home from "./components/Home";
import CountrySingle from "./components/CountrySingle";
import About from "./components/About";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link className="link linkApp" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link linkApp" to="/search">
              Search
            </Link>
          </li>{" "}
          <li>
            <Link className="link linkApp" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<CountryList />} />
        <Route path="/search/:capital" element={<RouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
