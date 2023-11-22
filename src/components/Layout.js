import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Layout({ children }) {
    return (
        <>
            <div className="topline">
                <a
                    href="tel://085361041025"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaPhoneAlt />
                    <p>085361041025</p>
                </a>
                <a
                    href="https://www.instagram.com/sentosaelektrik/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaInstagram />
                    <p>sentoraelektrik</p>
                </a>
            </div>
            <Header />
            <main>{children}</main>
            <FloatingButton />
            <Footer />
        </>
    );
}

export default Layout;
