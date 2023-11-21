import React from "react";
import ServiceList from "./ServiceList";

import "../styles/services.scss";

function Services() {
    return (
        <section className="services">
            <div className="service_heading">
                <h2>Layanan kami</h2>
                <p>
                    Berikut beberapa layanan yang kami tawarkan untuk membantu
                    menyelesaikan masalah pada AC Anda.
                </p>
            </div>
            <ServiceList />
        </section>
    );
}

export default Services;
