import React from 'react'; //eslint-disable-line
import { MapControl, withLeaflet } from 'react-leaflet';
import CustomControl from './CustomControl';

export class MControl extends MapControl {
  createLeafletElement(props) {
    const el = new CustomControl(props);
    this.contextValue = {
      ...props.leaflet,
      layerContainer: el,
    };
    return el;
  }
}

export default withLeaflet(MControl);
