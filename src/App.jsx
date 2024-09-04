import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
