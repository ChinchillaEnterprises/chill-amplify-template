"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isToggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  // Sticky Menu
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Menu Logic
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 170;
      setIsSticky(shouldBeSticky);
    };

    // Check scroll position on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="navbar" className={`fp-navbar-area transition ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>🎨</span>
              <span style={{ fontWeight: 600, fontSize: '1.25rem', color: 'inherit' }}>Chill Components</span>
            </Link>

            <button className="navbar-toggler">
              <span className="burger-menu" onClick={handleToggleNavbar}>
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isToggleNavbar ? "" : "show"
              }`}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="#examples"
                    className={`nav-link`}
                  >
                    Examples
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/admin"
                    className={`nav-link ${
                      pathname.startsWith("/admin") ? "active" : ""
                    }`}
                  >
                    Components
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/admin/introduction"
                    className={`nav-link ${
                      pathname === "/admin/introduction" ? "active" : ""
                    }`}
                  >
                    Getting Started
                  </Link>
                </li>
              </ul>

              <div className="other-options">
                <Link
                  href="/admin"
                  className="fp-outlined-btn"
                >
                  <i className="material-symbols-outlined">dashboard</i>
                  Browse
                </Link>

                <Link href="/admin/introduction" className="fp-btn">
                  <i className="material-symbols-outlined">school</i>
                  Start Learning
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
