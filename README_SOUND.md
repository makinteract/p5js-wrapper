# p5 Sound

You can add sound ([p5Sound library](https://p5js.org/reference/#/libraries/p5.sound)) but this currently an experimental and optional feature of this wrapper. You should not encounter any issue with single sketches, but currently multiple sketches might create errors.

Here how to use the sound library:

```js
import { sketch } from 'p5js-wrapper';
import 'p5js-wrapper/sound';

import mysound from './mysound.mp3';

let soundEffect;

sketch.setup = function () {
  createCanvas(100, 100);
  soundEffect = loadSound(mysound);
};

sketch.draw = function () {
  background('#eeeeee');
};

// Play sound on click
sketch.mousePressed = function () {
  soundEffect.play();
};
```
