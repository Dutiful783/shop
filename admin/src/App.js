import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"; 
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom"

const SidebarLayout = () => (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <Router>
      <Routes>
      {/* <Route
              path="/login"
              element={admin ? <Navigate to="/" /> : <Login />}
            /> */}

        <Route element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/users/:id" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;