import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import ControlPanel from "../components/ControlPanel";

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZGlvZ29hbWFyYWwiLCJhIjoiY2p1b3l6eWNyMWtpaTRhbXA5eHRzNWp2ZiJ9.LP0a6I0JFGtBwqlJEChF6g"
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <ControlPanel />
      </MapGL>
    );
  }
}
