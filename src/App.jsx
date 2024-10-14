import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
import Product from "./pages/Product";
import MovieDetails from "./pages/MovieDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/admin",
    element: <AdimnDashboard />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <div className="App px-5 md:px-8 lg:px-12 py-16">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
