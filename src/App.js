import React from "react";
import CountryList from "./components/CountryList";
import Home from "./components/Home";
import CountrySingle from "./components/CountrySingle";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<CountryList />} />
        <Route path="/search/:capital" element={<RouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
