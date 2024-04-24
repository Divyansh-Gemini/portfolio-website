import React, { useState } from "react";
import Heading from "../../components/Heading";
import AchievementCard from "./AchievementCard";
import Modal from "./Modal";

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

  const achievements = [
    {
      title: "1st Position in ForkThis",
      subtitle: "(Open-source competition)",
      issuer: "Computer Society of India - VIT Chapter",
      monthYear: "Sep 2023",
      image: "/assets/images/medal-gold.svg",
      photos: [
        {
          path: "photos/forkthis-1.png",
          height: 283,
          width: 400,
        },
        {
          path: "photos/forkthis-2.png",
          height: 300,
          width: 400,
        },
        {
          path: "photos/forkthis-3.png",
          height: 349,
          width: 400,
        },
        {
          path: "photos/forkthis-4.png",
          height: 349,
          width: 400,
        },
      ],
    },
    {
      title: "Best Project Award",
      subtitle: "in BCA 2nd year",
      issuer: "Jagan Institute of Management Studies",
      monthYear: "Oct 2022",
      image: "/assets/images/trophy.svg",
      photos: [
        {
          path: "photos/bpa-1.png",
          height: 225,
          width: 400,
        },
        {
          path: "photos/bpa-2.png",
          height: 225,
          width: 400,
        },
        {
          path: "photos/bpa-3.png",
          height: 300,
          width: 400,
        },
        {
          path: "photos/bpa-4.png",
          height: 300,
          width: 400,
        },
      ],
    },
    {
      title: "3rd Position in IT Quiz",
      subtitle: "Sponsored by GFG",
      issuer: "TekQbe - JIMS IT CLUB",
      monthYear: "Jul 2022",
      image: "/assets/images/medal-bronze.svg",
      photos: [
        {
          path: "photos/quiz-1.png",
          height: 266,
          width: 400,
        },
        {
          path: "photos/quiz-2.png",
          height: 300,
          width: 400,
        },
        {
          path: "photos/quiz-3.png",
          height: 300,
          width: 400,
        },
      ],
    },
    {
      title: "1st Position in Shutter Up",
      subtitle: "(Photography)",
      issuer: "ARDOUR - The Cultural Club of JIMS",
      monthYear: "Nov 2021",
      image: "/assets/images/medal-gold.svg",
      photos: [
        {
          path: "photos/photography-1.png",
          height: 300,
          width: 400,
        },
        {
          path: "photos/photography-2.png",
          height: 533,
          width: 400,
        },
        {
          path: "photos/photography-3.png",
          height: 295,
          width: 400,
        },
      ],
    },
  ];

  return (
    <section className="xl:mb-40">
      <Heading text="achievements" className="w-1/4" />

      <div className="grid xl:grid-cols-2 gap-7 md:gap-10 md:max-lg:w-10/12 mx-auto">
        {achievements.map((achievement) => (
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
