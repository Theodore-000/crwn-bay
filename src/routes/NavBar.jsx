import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../assets/crown.svg";
const NavBar = () => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <img src={CrownLogo} className="w-10 h-10" />
          </Link>
        </div>
        <div>
          <Link to="shop">Shop</Link>
          <Link to="signin">Sign In</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
