import { FaCalendar, FaHome,  FaShoppingCart } from "react-icons/fa";
import { MdMenu, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../components/hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>
              My Cart({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboar/review"}>
             <MdReviews></MdReviews>
              Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
             <TbBrandBooking></TbBrandBooking>
              My Bookings
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/menu/salad"}>
              <MdMenu></MdMenu>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
