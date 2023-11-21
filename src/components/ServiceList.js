import React from "react";
import { MdOutlineAir } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ServiceList() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="service_item">
                    <MdOutlineAir />
                    <h3>Cleaning / Service AC</h3>
                    <p>
                        AC bau, filter kotor, air menetes? kami siap menerima
                        panggilan service rutin.
                    </p>
                </div>
            </div>
            <div>
                <div className="service_item">
                    <MdOutlineAir />
                    <h3>Perbaikan AC</h3>
                    <p>
                        Tim teknisi handal kami siap memperbaiki segala
                        permasalahan pada mesin AC Anda.
                    </p>
                </div>
            </div>
            <div>
                <div className="service_item">
                    <MdOutlineAir />
                    <h3>Ganti Sparepart</h3>
                    <p>
                        Kami juga melayani penggantian sparepart yang rusak
                        dengan yang baru dan asli.
                    </p>
                </div>
            </div>
            <div>
                <div className="service_item">
                    <MdOutlineAir />
                    <h3>Bongkar Pasang AC</h3>
                    <p>
                        Ingin pindah lokasi tempat AC atau pasang baru? silahkan
                        hubungi kami, Abang AC.
                    </p>
                </div>
            </div>
        </Slider>
    );
}

export default ServiceList;
