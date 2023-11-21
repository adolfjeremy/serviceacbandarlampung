import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/hero.scss";

function Hero() {
    return (
        <section className="hero" id="#beranda">
            <StaticImage
                className="hero_image"
                src="../images/hero-min.jpg"
                alt="Air Conditioner"
            />
            <div className="overlay"></div>
            <div className="container">
                <h1>Spesialis Service AC Bandar Lampung</h1>
                <p>
                    Percayakan perbaikan semua permasalahan pada AC Anda pada
                    kami, yang sudah terpercaya dan berpengalaman
                </p>
                <Link className="cta_button" to="/">
                    Hubungi Kami
                </Link>
            </div>
        </section>
    );
}

export default Hero;
