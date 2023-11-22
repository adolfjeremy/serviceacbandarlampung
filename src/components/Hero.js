import React from "react";
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
                <a
                    href="https://wa.me/6285361041025?text=halo%20,%20saya%20butuh%20service%20ac"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cta_button"
                >
                    Hubungi Kami
                </a>
            </div>
        </section>
    );
}

export default Hero;
