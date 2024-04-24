import React, { useState } from "react";
import Heading from "../../components/Heading";
import CertificationCard from "./CertificationCard";
import Modal from "./Modal";

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

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      logo: "logos/logo-ibm.png",
      certificate: "certificates/certificate-ml.jpg",
      height: 500,
      width: 647,
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      logo: "logos/logo-nvidia.png",
      certificate: "certificates/certificate-dl.jpg",
      height: 650,
      width: 459,
    },
    {
      title: "Android App Development",
      issuer: "Ainwik Infotech",
      logo: "logos/logo-ainwik.png",
      certificate: "certificates/certificate-android.jpg",
      height: 500,
      width: 661,
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      logo: "logos/logo-google.png",
      certificate: "certificates/certificate-python.jpg",
      height: 500,
      width: 647,
    },
  ];

  return (
    <section className="xl:mb-40">
      <Heading text="certifications" className="w-1/3" />

      <div className="grid lg:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        {certifications.map((cert) => (
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
