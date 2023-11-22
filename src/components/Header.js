import React, { useState } from "react";
import { Link } from "gatsby";

import "../styles/header.scss";

function Header() {
    const [open, setOpen] = useState(false);
    const onHandleOpen = () => setOpen(!open);
    return (
        <header>
            <Link className="site_name" to="/">
                Sentosa Elektrik Mandiri
            </Link>
            <button
                onClick={onHandleOpen}
                className={open ? "hamburger open" : "hamburger"}
            >
                <div className="hamburger_innerline"></div>
            </button>
            <nav className="navbar">
                <a className="nav_link" href="#beranda">
                    Beranda
                </a>
                <a className="nav_link" href="#tentang">
                    Tentang Kami
                </a>
                <a className="nav_link" href="#service">
                    Service
                </a>
                <a className="nav_link" href="#gallery">
                    Gallery
                </a>
            </nav>
            <nav className={open ? "drawer show" : "drawer"}>
                <Link className="site_name" to="/">
                    Sentosa Elektrik Mandiri
                </Link>
                <a className="nav_link" href="#beranda">
                    Beranda
                </a>
                <a className="nav_link" href="#tentang">
                    Tentang Kami
                </a>
                <a className="nav_link" href="#service">
                    Service
                </a>
                <a className="nav_link" href="#gallery">
                    Galeri
                </a>
            </nav>
        </header>
    );
}

export default Header;
