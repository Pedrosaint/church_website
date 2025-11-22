import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../lib/nav_links";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-xl font-semibold">LOGO</div>

        {/* HAMBURGER FOR MOBILE */}
        <button className="md:hidden text-[#0A2240]" onClick={toggleMobile}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] text-[#0A2240]">
          {navLinks.map((link) => {
            const isParentActive =
              "dropdown" in link &&
              link.dropdown.some((item) => item.path === pathname);

            return "dropdown" in link ? (
              <div key={link.name} className="relative group">
                {/* DESKTOP DROPDOWN TRIGGER */}
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isParentActive ? "text-[#D4A95E] font-semibold" : ""
                  }`}
                >
                  {link.name} <ChevronDown size={18} />
                </span>

                {/* DROPDOWN MENU */}
                <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 rounded-md w-48 z-20">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-1 hover:underline ${
                          isActive ? "text-[#D4A95E] font-semibold" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#D4A95E] font-semibold" : ""
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="px-4 py-2 border border-[#D4A95E] rounded-lg text-[#D4A95E]">
            Donate
          </button>
          <button className="px-4 py-2 bg-[#D4A95E] rounded-lg text-white">
            Apply
          </button>
        </div>
      </div>
            
      {/* ================================
              MOBILE MENU
      ================================== */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[75%] bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-[#0A2240] space-y-4">
          {navLinks.map((link) => {
            const isParentActive =
              "dropdown" in link &&
              link.dropdown.some((item) => item.path === pathname);

            if ("dropdown" in link) {
              return (
                <div key={link.name}>
                  {/* MOBILE DROPDOWN TRIGGER */}
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    className={`w-full flex justify-between items-center py-2 ${
                      isParentActive ? "text-[#D4A95E] font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* MOBILE DROPDOWN LIST */}
                  {openDropdown === link.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive ? "text-[#D4A95E] font-semibold" : ""
                            }`
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-[#D4A95E] font-semibold" : ""}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </NavLink>
            );
          })}

          <hr className="my-4" />

          {/* MOBILE ACTION BUTTONS */}
          <button className="w-full px-4 py-2 border border-[#D4A95E] rounded-lg text-[#D4A95E]">
            Donate
          </button>
          <button className="w-full px-4 py-2 bg-[#D4A95E] rounded-lg text-white">
            Apply
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
