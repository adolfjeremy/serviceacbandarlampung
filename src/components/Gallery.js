import React, { useState, useCallback } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import ImageData from "../ImageData";

import "../styles/gallery.scss";

function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <section className="gallery" id="gallery">
            <div className="gallery_heading">
                <h2>Galeri Kinerja Kami</h2>
                <p>
                    Sudah banyak yang puas dan terbantu menggunakan layanan jasa
                    service ac di tempat kami. Berikut beberapa foto galeri
                    kinerja dari tim teknisi kami, masih banyak foto lainnya.
                </p>
            </div>
            <div className="gallery_container">
                {ImageData.map((image, index) => (
                    <div
                        className="gallery_item"
                        onClick={() => openImageViewer(index)}
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}

                {isViewerOpen && (
                    <ReactSimpleImageViewer
                        src={ImageData}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
            </div>
        </section>
    );
}

export default Gallery;
