import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pay from "./Pay";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
