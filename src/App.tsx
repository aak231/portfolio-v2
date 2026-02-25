import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellerLeads from "./pages/SellerLeads";
import Systems from "./pages/Systems";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0d] text-neutral-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/systems-in-practice/seller-leads"
          element={<SellerLeads />}
        />
        <Route path="/systems-in-practice" element={<Systems />} />
      </Routes>
    </div>
  );
}
