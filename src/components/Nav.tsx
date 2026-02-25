import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center text-sm">
        <NavLink
          to="/"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Ahad Khan
        </NavLink>

        <div className="flex gap-8 text-zinc-500">
          <NavLink
            to="/systems-in-practice"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition-colors"
            }
          >
            Systems
          </NavLink>

          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
