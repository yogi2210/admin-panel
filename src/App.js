import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/users" element={<List/>} />
          <Route path="/users/new" element={<New inputs = {userInputs} title="add new user"/>} />
          <Route path="users/:userId" element={<Single/>} />

          <Route path="/products" element={<List/>} />
          <Route path="/products/new" element={<New inputs={productInputs} title="add new product" />} />
          <Route path="products/:productId" element={<Single/>} />
        </Routes >
      </BrowserRouter>
      
    </div>
  );
}

export default App;
