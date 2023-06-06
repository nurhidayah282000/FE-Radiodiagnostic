import React from "react";
import SidebarFooterAdmin from "./SidebarFooterAdmin";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div>
      <body className="g-sidenav-show bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>

        <aside
          className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a className="navbar-brand m-0" target="_blank">
              <img
                src="../assets/img/App/logodental.png"
                className="navbar-brand-img h-100"
                alt="main_logo"
              />
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div
            className="collapse navbar-collapse w-auto"
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/data-user">
                  <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <img src="../assets/img/App/data_pasien.png" />
                  </div>
                  <span className="nav-link-text ms-1">Data User</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <SidebarFooterAdmin />
        </aside>
        {/* <!-- end sidebar --> */}
      </body>
    </div>
  );
};

export default SidebarAdmin;
