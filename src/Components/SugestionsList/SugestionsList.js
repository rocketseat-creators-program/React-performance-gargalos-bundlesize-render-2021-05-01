import React, { Component } from "react";
import Suggestion from "./Suggestions";

import image2 from "../../Images/2.jpg";
import image3 from "../../Images/3.jpg";
import image4 from "../../Images/4.jpg";

export default class SugestionList extends Component {
  render() {
    return (
      <div className="flex -mx-1 mb-5">
        <div className="w-1/2 px-1">
          <Suggestion title="Routeburn Track, New Zealand" image={image3} />
        </div>
        <div className="w-1/2 px-1">
          <Suggestion title="Overland Track, Australia" image={image2} />
        </div>
        <div className="w-1/2 px-1">
          <Suggestion title="Everest Base Camp, Nepal" image={image4} />
        </div>
      </div>
    );
  }
}
