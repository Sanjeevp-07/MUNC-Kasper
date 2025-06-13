import React from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Inventory.jsx";
import Products from "./page/Sales.jsx";
import Analytics from "./page/Dashboard.jsx";
import Uploads from "./page/Documents.jsx";
import Documentation from "./page/Stocks.jsx";
import Users from "./page/Return_Audit.jsx";
import Settings from "./page/Settings.jsx";

import AddProduct from './page/AddProduct';

const App = () => {
  return (
    <div className="App" style={{ }}>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
