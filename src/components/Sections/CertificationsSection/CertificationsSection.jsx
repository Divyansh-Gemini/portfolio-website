import React, { useState } from "react";
import Heading from "../../Heading";
import CertificationCard from "./CertificationCard";
import Modal from "./Modal";
import data from "../../../data/data.json";

const CertificationsSection = () => {
  const [selectedCertiData, setSelectedCertiData] = useState(null);

  const openModal = (imageUrl, height, width) => {
    setSelectedCertiData({
      imageUrl: imageUrl,
      height: height,
      width: width,
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCertiData(null);
    document.body.style.overflow = "auto";
  };


  return (
    <section className="xl:mb-40">
      <Heading text="certifications" className="w-1/3" />

      <div className="grid lg:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        {data.certifications.map((cert) => (
          <CertificationCard
            key={cert.title}
            title={cert.title}
            issuer={cert.issuer}
            image={cert.logo}
            onClick={() => openModal(cert.certificate, cert.height, cert.width)}
          />
        ))}
      </div>

      {/* calling Modal */}
      {selectedCertiData && (
        <Modal
          imageUrl={selectedCertiData.imageUrl}
          height={selectedCertiData.height}
          width={selectedCertiData.width}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default CertificationsSection;
