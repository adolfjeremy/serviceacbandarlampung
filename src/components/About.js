import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import "../styles/about.scss";

function About() {
    return (
        <section className="about" id="tentang">
            <div className="about_text">
                <h2>Tentang Kami</h2>
                <p>
                    <strong>Sentosa Elektrik Mandiri</strong> merupakan penyedia
                    layanan jasa service AC di Bandar Lampung, perbaikan,
                    bongkar pasang, cuci AC yang di lakukan oleh TEKNISI yang
                    handal, profesional dan berpengalaman dibidangnya
                </p>
                <p>
                    Kami memberikan tarif service yang terjangkau, mengutamakan
                    kejujuran, tanggung jawab dan siap membantu menyelesaikan
                    masalah pada AC Anda. Kepuasan dan kepercayaan Anda adalah
                    motivasi kami dalam bekerja demi kemajuan perusahaan kami.
                </p>
            </div>
            <div className="about_image">
                <StaticImage src="../images/about.jpg" alt="Service AC" />
            </div>
        </section>
    );
}

export default About;
