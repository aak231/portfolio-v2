// import { NavLink } from "react-router-dom";

// export default function Nav() {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
//       <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center text-sm">
//         <NavLink to="/" className="group">
//           <div
//             className="
//               w-10 h-10
//               rounded-full
//               border border-amber-400/60
//               flex items-center justify-center
//               text-white
//               font-medium
//               tracking-wide
//               transition-all duration-300
//               group-hover:shadow-[0_0_12px_rgba(251,191,36,0.35)]
//               active:shadow-[0_0_18px_rgba(251,191,36,0.55)]
//             "
//           >
//             AK
//           </div>
//         </NavLink>

//         <div className="flex gap-8 text-zinc-500">
//           <NavLink
//             to="/systems-in-practice"
//             className={({ isActive }) =>
//               isActive ? "text-white" : "hover:text-white transition-colors"
//             }
//           >
//             Systems
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center text-sm">
        <NavLink to="/" className="group">
          <div
            className="
              w-10 h-10
              rounded-full
              border border-amber-400/70
              flex items-center justify-center
              text-white
              font-medium
              tracking-wide
              transition-all duration-300

              shadow-[0_0_6px_rgba(251,191,36,0.15)]
              group-hover:shadow-[0_0_14px_rgba(251,191,36,0.35)]
              active:shadow-[0_0_20px_rgba(251,191,36,0.55)]
            "
          >
            AK
          </div>
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
        </div>
      </div>
    </div>
  );
}