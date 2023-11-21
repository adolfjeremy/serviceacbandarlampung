import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <div className="topline"></div>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;
