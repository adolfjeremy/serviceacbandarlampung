import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function FloatingButton() {
    return (
        <a
            href="https://wa.me/6285361041025?text=halo%20,%20saya%20butuh%20service%20ac"
            rel="noopener noreferrer"
            target="_blank"
            className="floating_button"
        >
            <StaticImage src="../images/wa.svg" alt="whatsapp" />
        </a>
    );
}

export default FloatingButton;
