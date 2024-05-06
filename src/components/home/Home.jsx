import React from "react";
import Baner from "../banner/Baner";
import StepBlock from "../stepBlock/StepBlock";
import StepText from "../stepText/StepText";
import StepImage from "../stepImage/StepImage";

function Home() {
  return (
    <div>
      <Baner />
      <StepBlock />
      <StepText />
      <StepImage />
    </div>
  );
}

export default Home;
