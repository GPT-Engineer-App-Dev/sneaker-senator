import { Home, DollarSign } from "lucide-react";
import Index from "./pages/Index.jsx";
import Transactions from "./pages/Transactions.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <DollarSign className="h-4 w-4" />,
    page: <Transactions />,
  },
];