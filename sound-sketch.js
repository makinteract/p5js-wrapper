// Experimental
import * as p5 from '/node_modules/p5/lib/p5';
import * as p5sound from 'p5/lib/addons/p5.sound';

const sketch = window; // for single sketch
const wp5 = window.p5; // expose p5
export { sketch, wp5 as p5 };
