import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <main className="all_page">
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/">首頁</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
