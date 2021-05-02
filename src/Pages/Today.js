import React from "react";
import Title from "../Components/Title/Title";
import { Card } from "../Components/Card/Card";
import SugestionList from "../Components/SugestionsList/SugestionsList";

import image5 from "../Images/5.jpg";
import image6 from "../Images/6.jpg";
import image7 from "../Images/7.jpg";

import Suggestion from "../Components/SugestionsList/Suggestions";

export default function Today() {
  return (
    <>
      <Title header="Today" fullDate="Best Hikes" />
      <Card />
      <Title header="This week" fullDate="top 3 destinations" />
      <SugestionList />

      <Title header="Previous" />
      <Suggestion title="Inca Trail, Peru" image={image5} />
      <Suggestion title="GR20, France" image={image6} />
      <Suggestion title="The Haute Route, France-Switzerland" image={image7} />
    </>
  );
}
