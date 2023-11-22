import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Value from "../components/Value";
import Gallery from "../components/Gallery";

import "../styles/index.scss";

function index() {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Value />
            <Gallery />
        </Layout>
    );
}

export default index;
