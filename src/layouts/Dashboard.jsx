import { FaAd, FaCalendar, FaEnvelope, FaHome,  FaList,  FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { MdMenu, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../components/hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to={"/dashboard/adminHome"}>
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addItems"}>
              <FaUtensils></FaUtensils>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageItems"}>
              <FaList></FaList>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboar/manageReviews"}>
            <FaAd></FaAd>
              Manage Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboar/manageBooking"}>
            <FaAd></FaAd>
             Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/users"}>
            <FaUser></FaUser>
              All Users
            </NavLink>
          </li>
            </> :
            <>
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
            </>
          }

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
          <li>
            <NavLink to={"/menu/contact"}>
              <FaEnvelope></FaEnvelope>
              Contact
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
