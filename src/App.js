import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route path="/products" element={<Products />} exact />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
