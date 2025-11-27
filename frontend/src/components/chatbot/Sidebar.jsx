import { NavLink } from "react-router";
import { X, LogOut, Menu } from "lucide-react";
import Logo from "../ui/Logo";
const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 h-full bg-card border-r border-border 
                    transition-transform duration-300 ease-out z-40
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-full flex flex-col p-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <NavLink href="/">
              <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Logo></Logo>
              </div>
            </NavLink>

            <button
              onClick={onClose}
              className="md:hidden p-1 hover:bg-muted rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* New Chat */}
          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground 
                           py-2 px-4 rounded-lg font-medium text-sm mb-6 shadow-sm">
            + Nuevo Chat
          </button>

          {/* Logout */}
          <NavLink to="/">
            <button className="w-full flex items-center justify-center gap-2 border-t 
                               border-border pt-4 text-muted-foreground hover:text-foreground 
                               transition-colors text-sm font-medium">
              <LogOut size={18} />
              Cerrar sesión
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={onClose}
        />
      )}
    </>
  );
}
export default Sidebar;