import React, { useContext, useState, useEffect, useRef } from "react";
import "../index.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { HashLink } from "react-router-hash-link";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const [isprojDropdownOpen, setIsprojDropdownOpen] = useState(false);
  const [isabtDropdownOpen, setIsabtDropdownOpen] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const { setuserlogin, userlogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const toggleprojDropdown = () => {
    setIsprojDropdownOpen(!isprojDropdownOpen);
  };
  const toggleabtDropdown = () => {
    setIsabtDropdownOpen(!isabtDropdownOpen);
  };

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setuserlogin(true);
    } else {
      setuserlogin(false);
    }
  }, []);
  useEffect(() => {
    console.log(userlogin);
  }, [userlogin]);

  return (
    <nav className="navbar" id="totop">
      <div className="navbar-brand">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar-nav">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="nav-item dropdown" onClick={toggleabtDropdown}>
          <span className="nav-link dropdown-toggle">
            About Us{" "}
            <span class="material-symbols-outlined">
              arrow_drop_{isabtDropdownOpen ? "up" : "down"}
            </span>
          </span>
          {isabtDropdownOpen && (
            <ul className="dropdown-menu">
              <HashLink className="dropdown-item" smooth to="#vision">
                <HashLink smooth to="#vision">
                  Vision
                </HashLink>
              </HashLink>
              <HashLink className="dropdown-item" smooth to="#goal">
                <HashLink smooth to="#goal">
                  Goal
                </HashLink>
              </HashLink>
              <HashLink className="dropdown-item" smooth to="#objective">
                <HashLink smooth to="#objective">
                  Objective
                </HashLink>
              </HashLink>
            </ul>
          )}
        </div>
        <div className="nav-item">
          <HashLink smooth to="#disabilitySection" className="nav-link">
            Documentary
          </HashLink>
        </div>
        <div className="nav-item dropdown" onClick={toggleprojDropdown}>
          <span className="nav-link dropdown-toggle">
            Projects
            <span class="material-symbols-outlined">
              arrow_drop_{isprojDropdownOpen ? "up" : "down"}
            </span>
          </span>
          {isprojDropdownOpen && (
            <ul className="dropdown-menu">
              <HashLink class="dropdown-item" smooth to="#0">
                <HashLink smooth to="#0">
                  Tewa{" "}
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#1">
                <HashLink smooth to="#1">
                  Making Scents{" "}
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#2">
                <HashLink smooth to="#2">
                  MIUSA/CIL
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#3">
                <HashLink smooth to="#3">
                  Pokhara Metropolitan{" "}
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#4">
                <HashLink smooth to="#4">
                  NFDN{" "}
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#5">
                <HashLink smooth to="#5">
                  ABILIS{" "}
                </HashLink>
              </HashLink>
              <HashLink class="dropdown-item" smooth to="#6">
                <HashLink smooth to="#1">
                  WFA{" "}
                </HashLink>
              </HashLink>
            </ul>
          )}
        </div>
        <div className="nav-item">
          <HashLink smooth to="#articleSection" className="nav-link">
            News Article/Case Study
          </HashLink>
        </div>
        <div className="nav-item dropdown">
          <HashLink
            className="nav-link dropdown-toggle"
            smooth
            to="#gallerySection"
          >
            Gallery
          </HashLink>
        </div>
        <div className="nav-item">
          <HashLink smooth to="#contactSection" className="nav-link">
            Contact Us
          </HashLink>
        </div>
        {userlogin ? (
          <>
            <div className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                Admin Access
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
        <div>
          {userlogin ? (
            <>
              <button
                class="button"
                onClick={() => {
                  setuserlogin(false);
                  localStorage.removeItem("jwt");
                  console.log(userlogin);
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                class="button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </ul>
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <HashLink to="#aboutSection" smooth onClick={toggleMenu}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="#projectSection" smooth onClick={toggleMenu}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="#contactSection" smooth onClick={toggleMenu}>
                Contact
              </HashLink>
            </li>
            <li>
              <div>
                {userlogin ? (
                  <>
                    <li
                      onClick={() => {
                        setuserlogin(false);
                        localStorage.removeItem("jwt");
                        console.log(userlogin);
                      }}
                    >
                      Log Out
                    </li>
                  </>
                ) : (
                  <>
                    {" "}
                    <li
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </li>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
