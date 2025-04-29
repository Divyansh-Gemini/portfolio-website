import React, { useState } from "react";
import Heading from "../../Heading";
import AchievementCard from "./AchievementCard";
import Modal from "./Modal";
import data from "../../../data/data.json";

const AchievementsSection = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(images);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedImages([]);
    document.body.style.overflow = "auto";
  };


  return (
    <section className="xl:mb-40">
      <Heading text="achievements" className="w-1/4" />

      <div className="grid xl:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        {data.achievements.map((achievement) => (
          <AchievementCard
            key={achievement.title}
            title={achievement.title}
            subtitle={achievement.subtitle}
            issuer={achievement.issuer}
            monthYear={achievement.monthYear}
            image={achievement.image}
            onClick={() => openModal(achievement.photos)}
          />
        ))}
      </div>

      {/* calling Modal */}
      {selectedImages.length > 0 && (
        <Modal images={selectedImages} onClose={closeModal} />
      )}
    </section>
  );
};

export default AchievementsSection;
