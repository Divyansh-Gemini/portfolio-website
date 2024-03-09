import React from "react";
import Heading from "../../Heading";
import CertificationCard from "./CertificationCard";
import Modal from "./Modal";

const CertificationsSection = () => {
  const [selectedImageUrl, setSelectedImageUrl] = React.useState(null);

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedImageUrl(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="xl:mb-40">
      <Heading text="certifications" width="1/4" />

      <div className="grid lg:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        {/* ML with Python by IBM */}
        <CertificationCard
          title="Machine Learning with Python"
          issuer="IBM"
          image="/assets/images/logos/logo-ibm.png"
          onClick={() =>
            openModal("/assets/images/certificates/certificate-ml.jpg")
          }
        />

        {/* Fundamentals of DL by NVIDIA */}
        <CertificationCard
          title="Fundamentals of Deep Learning"
          issuer="NVIDIA"
          image="/assets/images/logos/logo-nvidia.png"
          onClick={() =>
            openModal("/assets/images/certificates/certificate-dl.jpg")
          }
        />

        {/* Android by Ainwik */}
        <CertificationCard
          title="Android App Development"
          issuer="Ainwik Infotech"
          image="/assets/images/logos/logo-ainwik.png"
          onClick={() =>
            openModal(
              "/assets/images/certificates/certificate-android.jpg"
            )
          }
        />

        {/* Python by Google */}
        <CertificationCard
          title="Crash Course on Python"
          issuer="Google"
          image="/assets/images/logos/logo-google.png"
          onClick={() =>
            openModal("/assets/images/certificates/certificate-python.jpg")
          }
        />
      </div>

      {/* calling Modal */}
      {selectedImageUrl && (
        <Modal imageUrl={selectedImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default CertificationsSection;
