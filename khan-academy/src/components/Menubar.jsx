import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menubar.css";
// import '../styles/newMenu.css';
import logo from "../logo.png";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure, useToast } from "@chakra-ui/react";
import DrawerEx from "./DrawerEx";
import { NavDropdown } from "react-bootstrap";
import { CHANGE_LOGIN_LOGOUT } from "../Redux/action";
import { getCourses } from "../Redux/action-types";

const Menubar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    dispatch({ type: CHANGE_LOGIN_LOGOUT });
    navigate("/");
    toast({
      title: "Successfully Logged Out.",
      description: "We've successfully logged out from into your Account.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hdsdbvsj");
    dispatch(getCourses(`courseTitle_like=${search}`));
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="menuBar">
        <div className="menuContainer">
          <div className="company-logo">
            <img
              className="companyLogo-img"
              onClick={handleLogoClick}
              src={logo}
              alt="Logo"
            />
          </div>

          <form className="menuForm" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="menuInput"
                value={search}
                placeholder="Search . . . . . ."
                onChange={handleSearchInput}
              ></input>
              <button className="menuButton">Search</button>
            </div>
          </form>

          <div>
            <Link to="/" className="menu-link">
              Home
            </Link>
            <Link to="/about" className="menu-link">
              About Us
            </Link>
            <Link to="/search" className="menu-link">
              Courses
            </Link>
            <Link to="/cart" className="menu-link">
              Cart({cart.length})
            </Link>
            {!profile.isLoggedIn ? (
              <Link to="/login" className="menu-link">
                LogIn
              </Link>
            ) : null}
            {!profile.isLoggedIn ? (
              <Link to="/signin" className="menu-link">
                SignUp
              </Link>
            ) : null}
            <Link to="/contact" className="menu-link">
              Contact Us
            </Link>
          </div>
          {profile.isLoggedIn ? (
            <div className="user-login-profile">
              <NavDropdown
                title={
                  <img
                    className="profile-imgs"
                    src={profile.user.avatar}
                    alt=""
                  />
                }
                id="basic-nav-dropdown"
                className="profile-user-img"
              >
                <NavDropdown.Item href="#" className="dropdown-item">
                  <Link to="/user-profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item">
                  <Link to="#">Settings</Link>
                </NavDropdown.Item>
                {profile.user.role === "admin" ? (
                  <NavDropdown.Item href="#" className="dropdown-item">
                    <Link to="/admin-panel">Go to Admin Panel</Link>
                  </NavDropdown.Item>
                ) : null}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleLogout}
                  href="#"
                  className="dropdown-item"
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : null}
          <DrawerEx isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <span className="menuIcon">
            <IoMenu />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Menubar;
