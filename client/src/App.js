import { Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Training from "./Components/Training/Training";
import LinksLegion from "./Components/LinksLegion/LinksLegion";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SharedInventory from "./Components/SharedInventory/SharedInventory";

import "./App.css";
import CreateAcc from "./Components/CreateAcc/CreateAcc";

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/OmokFS" element={<Home />} />
        <Route path="/LinksAndLegion" element={<LinksLegion />} />
        <Route path="/TrainingMaps" element={<Training />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAcc />} />
        <Route path="/CashShopSharedInventory" element={<SharedInventory />} />
      </Routes>
    </div>
  );
}

export default App;
