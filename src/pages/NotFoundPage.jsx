import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className="w-3/4 mx-auto text-center">
      {navigate("/")}
      {/* Emoji & Text */}
      <div className="flex flex-col gap-14 md:gap-24 mt-44 md:mt-64 xl:mt-52 above-fold:mt-56 w-full h-1/2">
        {/* Face Emoji */}
        <div className="text-3xl md:text-5xl xxxxm-32 w-full">
          <span className="font-extrabold rounded-2xl px-8 py-5 text-[var(--background)] bg-[var(--primary)]">
            -_-
          </span>
        </div>

        {/* 404: Page Not Found */}
        <div className=" text-lg above-fold:text-xl md:text-3xl">
          <span className="text-[var(--gray)]">404: </span>
          <span>Page Not Found</span>
        </div>
      </div>

      {/* Go Back to Home */}
      <div className="flex justify-center md:text-xl">
        <NavLink
          to="/"
          className="absolute bottom-5 mx-auto cursor-[var(--cursor-pointer)] hover:underline"
        >
          Go Back to Home
        </NavLink>
      </div>
    </main>
  );
};

export default NotFoundPage;
