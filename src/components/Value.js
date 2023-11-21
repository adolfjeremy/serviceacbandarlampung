import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";

import "../styles/value.scss";

function Value() {
    return (
        <section className="value">
            <div className="value_heading">
                <h2>
                    Alasan Kenapa Anda Harus Memilih Jasa Service Ac di Sentosa
                    Elektrik Mandiri!
                </h2>
            </div>
            <div className="value_list">
                <div className="value_item">
                    <FaRegCircleCheck />
                    <h3>Terpercaya</h3>
                    <p>
                        Tidak perlu ragu lagi, kami adalah jasa perawatan AC
                        yang terpercaya, jujur dan amanah.
                    </p>
                </div>
                <div className="value_item">
                    <FaAward />
                    <h3>Teknisi Handal</h3>
                    <p>
                        Kami memiliki tim teknisi yang handal, berlatar belakang
                        pendidikan di bidang kelistrikan & tata udara.
                    </p>
                </div>
                <div className="value_item">
                    <FaFileInvoiceDollar />
                    <h3>Biaya Terjangkau</h3>
                    <p>
                        Kami memberikan tarif biaya yang terjangkau sesuai
                        dengan pasaran perbaikan AC di Medan.
                    </p>
                </div>
                <div className="value_item">
                    <GrUserExpert />
                    <h3>Berpengalaman</h3>
                    <p>
                        Kami sudah berpengalaman di bidang AC dan memiliki jam
                        terbang tinggi dalam analisa kerusakan.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Value;
