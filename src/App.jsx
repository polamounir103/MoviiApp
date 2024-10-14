import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
// import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
import Product from "./pages/Product";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="px-5 md:px-8 lg:px-12 py-16">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Signin />} />
            <Route path="/admin" exact element={<AdimnDashboard />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/movies/:id" exact element={<MovieDetails />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
