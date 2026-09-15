import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import SellerLeads from "./pages/SellerLeads";
import Systems from "./pages/Systems";
import Nav from "./components/Nav";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0d] text-neutral-100">
      <Nav />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/systems-in-practice/seller-leads",
        element: <SellerLeads />,
      },
      { path: "/systems-in-practice", element: <Systems /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
