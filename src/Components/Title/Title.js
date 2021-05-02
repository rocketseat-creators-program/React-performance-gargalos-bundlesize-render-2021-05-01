import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">{this.props.header}</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {this.props.fullDate}
          </p>
        </div>
      </>
    );
  }
}
