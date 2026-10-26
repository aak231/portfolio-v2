import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import MetaSync from "@/components/MetaSync";
import Nav from "@/components/Nav";
import ScrollManager from "@/components/ScrollManager";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-page text-body">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollManager />
      <MetaSync />
    </div>
  );
}
