import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/index.scss";

function index() {
    return (
        <Layout>
            <Hero />
            <About />
        </Layout>
    );
}

export default index;
