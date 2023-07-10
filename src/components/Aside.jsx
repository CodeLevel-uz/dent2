import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiWorld } from "react-icons/bi";

function Aside() {
    const { pathname } = useLocation()

    console.log(pathname);
    return (
        <aside className="menu-vertical menu bg-menu-theme">
            <div className="app-brand demo" style={{ height: "130px", display: "flex", justifyContent: "center" }}>
                {/* <Link to="/" className="app-brand-link">
                    <img src="../assets/img/logo.png" alt="Logo" height={"180px"} />

                </Link> */}
                <h1>Logo</h1>

                <a href="/" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className={`my-1 menu-item ${pathname === "/organization" && "active"}`}>
                    <Link to="/organization" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Organizatsiyalar</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/position" && "active"}`}>
                    <Link to="/position" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Lavozimlar</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/direct" && "active"}`}>
                    <Link to="/direct" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Yo'nalish</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/pupil" && "active"}`}>
                    <Link to="/pupil" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">O'quvchi</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/action" && "active"}`}>
                    <Link to="/action" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Harakatlar</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/version" && "active"}`}>
                    <Link to="/version" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Versiyalar</div>
                    </Link>
                </li>

                <li className={`my-1 menu-item ${pathname === "/api_settings" && "active"}`}>
                    <Link to="/api_settings" className="menu-link">
                        <BiWorld fontSize={"18px"} className='me-2' />
                        <div data-i18n="Analytics">Sozlamalar</div>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Aside