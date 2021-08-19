import ReactDOM from 'react-dom';

import {
  Control, setOptions, DomUtil, DomEvent,
} from 'leaflet';

const CustomControl = Control.extend({ //eslint-disable-line

  initialize(options) {
    setOptions(this, options);
  },

  onAdd(map) {//eslint-disable-line
    const div = DomUtil.create('div');
    div.style = "background: #fff; padding:5px; margin: 10px; border-radius:4px; border: solid #aaa 2px"

    DomEvent.disableClickPropagation(div);
    //ReactDOM.render(this.options.children ,div); // eslint-disable-line
    ReactDOM.render(<h1>Toto</h1> ,div); // eslint-disable-line
    return div;
  },
});

export default CustomControl;
