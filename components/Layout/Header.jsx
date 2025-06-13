// components/Layout/Header.jsx

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../UI/Logo";
import HeaderTop from "../UI/HeaderTop";
import MenuBodyList from "../UI/MenuBodyList";
import MenuModelList from "../UI/MenuModelList";
import MenuMakeList from "../UI/MenuMakeList";
import MenuBudgetRange from "../UI/MenuBudgetRange";

const Header = ({ makes = [] }) => {
  const router = useRouter();
  const [activeSearch, setActiveSearch] = useState(null);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    setActiveSearch(null);
    setIsMobileMenuActive(false);
  }, [router.asPath]);

  const handleSearchClick = (type) =>
    setActiveSearch((prev) => (prev === type ? null : type));

  const handleMobileBarClick = () => setIsMobileMenuActive((prev) => !prev);

  return (
    <>
      <HeaderTop />

      <header className="main-header">
        <div className="container">
          <div className="header-bottom">
            <Logo />

            <div className="header-search">
              <span className="search-mobile">
                Search Cars
                <span className="search-manu-close">×</span>
              </span>
              <div className="header-search-wrp">
                <div className="single-search">
                  <span
                    className={`manu-click ${
                      activeSearch === "manufacturer" ? "active" : ""
                    }`}
                    onClick={() => handleSearchClick("manufacturer")}
                  >
                    Manufacturer Search
                  </span>
                  <div
                    className={`manufacture-search item ${
                      activeSearch === "manufacturer" ? "active" : ""
                    }`}
                    style={{
                      display:
                        activeSearch === "manufacturer" ? "block" : "none",
                      animation:
                        activeSearch === "manufacturer"
                          ? "slideDown 0.3s ease-in-out"
                          : "none",
                      transformOrigin: "top",
                      overflow: "hidden",
                    }}
                  >
                    <MenuMakeList makes={makes} />
                  </div>
                </div>

                <div className="single-search">
                  <span
                    className={`manu-click ${
                      activeSearch === "model" ? "active" : ""
                    }`}
                    onClick={() => handleSearchClick("model")}
                  >
                    Model Search
                  </span>
                  <div
                    className={`model-search item ${
                      activeSearch === "model" ? "active" : ""
                    }`}
                    style={{
                      display: activeSearch === "model" ? "block" : "none",
                      animation:
                        activeSearch === "model"
                          ? "slideDown 0.3s ease-in-out"
                          : "none",
                      transformOrigin: "top",
                      overflow: "hidden",
                    }}
                  >
                    <MenuModelList />
                  </div>
                </div>

                {/* Body Type Search */}
                <div className="single-search">
                  <span
                    className={`manu-click ${
                      activeSearch === "bodyType" ? "active" : ""
                    }`}
                    onClick={() => handleSearchClick("bodyType")}
                  >
                    Body Type Search
                  </span>
                  <div
                    className={`body-type-search item ${
                      activeSearch === "bodyType" ? "active" : ""
                    }`}
                    style={{
                      display: activeSearch === "bodyType" ? "block" : "none",
                      animation:
                        activeSearch === "bodyType"
                          ? "slideDown 0.3s ease-in-out"
                          : "none",
                      transformOrigin: "top",
                      overflow: "hidden",
                    }}
                  >
                    <MenuBodyList />
                  </div>
                </div>

                {/* Budget Search */}
                <div className="single-search range">
                  <span
                    className={`manu-click ${
                      activeSearch === "budget" ? "active" : ""
                    }`}
                    onClick={() => handleSearchClick("budget")}
                  >
                    Budget Search
                  </span>
                  <div
                    className={`budget-search item ${
                      activeSearch === "budget" ? "active" : ""
                    }`}
                    style={{
                      display: activeSearch === "budget" ? "block" : "none",
                      animation:
                        activeSearch === "budget"
                          ? "slideDown 0.3s ease-in-out"
                          : "none",
                      transformOrigin: "top",
                      overflow: "hidden",
                    }}
                  >
                    <MenuBudgetRange />
                  </div>
                </div>

                <Link href="/car-lease-deals/" className="search-lease">
                  Search Lease Deals
                </Link>
              </div>
            </div>

            <div className="header-right">
              <div className="header-call">
                <a href="tel:+17188712277">(718) 871 2277 </a>
                <span>Request A Callback Or Text Us</span>
              </div>
              <div
                className={`mobile-bar ${isMobileMenuActive ? "active" : ""}`}
                onClick={handleMobileBarClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div
            className={`side-nav-area ${isMobileMenuActive ? "active" : ""}`}
          >
            <div className="side-nav-wrp">
              <nav className="main-menu">
                <ul className="menu">
                  <li className="menu-item">
                    <Link href="/car-lease-deals/">Car Lease Deals</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/application/personal/">
                      Personal Application
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/application/business/">
                      Business Application
                    </Link>
                  </li>

                  <li className="menu-item sub-menu-item menu-item-has-children">
                    <Link href="/services/">Services</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/services/lease-termination/">
                          Lease Termination
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services/auto-finance/">Auto Finance</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services/lease-return/">Lease Return</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services/lease-transfer/">
                          Lease Transfer
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services/trade-ins/">Trade-ins</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/services/getting-help/">
                          Sell Your Car
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link href="/contact/">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
