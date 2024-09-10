import React from "react";
import "../styles/mainGral.css";
import { SliderMain } from "./slider-main";
import { ShowOferts } from "./showOferts";

export const Home = () => {
  return (
    <main className="main-section">
      <SliderMain/>
      <ShowOferts/>
    </main>
  );
};
