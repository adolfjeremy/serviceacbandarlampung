import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

function Layout({ children }) {
    return (
        <>
            <div className="topline"></div>
            <Header />
            <main>{children}</main>
            <FloatingButton />
            <Footer />
        </>
    );
}

export default Layout;
