import React from "react";
import Heading from "../../Heading";
import AchievementCard from "./AchievementCard";
import Modal from "./Modal";

const AchievementsSection = () => {
  const [selectedImages, setSelectedImages] = React.useState([]);

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
      <Heading text="achievements" width="1/4" />

      <div className="grid xl:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        <AchievementCard
          title="1st Position in ForkThis"
          subtitle="(Open-source competition)"
          issuer="Computer Society of India - VIT Chapter"
          monthYear="Sep 2023"
          image="/assets/images/medal-gold.svg"
          onClick={() =>
            openModal([
              "/assets/images/photos/forkthis-1.png",
              "/assets/images/photos/forkthis-2.png",
              "/assets/images/photos/forkthis-3.png",
              "/assets/images/photos/forkthis-4.png",
            ])
          }
        />
        <AchievementCard
          title="Best Project Award"
          subtitle="in BCA 2nd year"
          issuer="Jagan Institute of Management Studies"
          monthYear="Oct 2022"
          image="/assets/images/trophy.svg"
          onClick={() =>
            openModal([
              "/assets/images/photos/bpa-1.png",
              "/assets/images/photos/bpa-2.png",
              "/assets/images/photos/bpa-3.png",
              "/assets/images/photos/bpa-4.png",
            ])
          }
        />
        <AchievementCard
          title="3rd Position in IT Quiz"
          subtitle="Sponsored by GFG"
          issuer="TekQbe - JIMS IT CLUB"
          monthYear="Jul 2022"
          image="/assets/images/medal-bronze.svg"
          onClick={() =>
            openModal([
              "/assets/images/photos/quiz-1.png",
              "/assets/images/photos/quiz-2.png",
              "/assets/images/photos/quiz-3.png",
            ])
          }
        />
        <AchievementCard
          title="1st Position in Shutter Up"
          subtitle="(Photography)"
          issuer="ARDOUR - The Cultural Club of JIMS"
          monthYear="Nov 2021"
          image="/assets/images/medal-gold.svg"
          onClick={() =>
            openModal([
              "/assets/images/photos/photography-1.png",
              "/assets/images/photos/photography-2.png",
              "/assets/images/photos/photography-3.png",
            ])
          }
        />
      </div>

      {/* calling Modal */}
      {selectedImages.length > 0 && (
        <Modal images={selectedImages} onClose={closeModal} />
      )}
    </section>
  );
};

export default AchievementsSection;
