# p5.js-wrapper

A simple wrapper for p5.js.

## Installation

`npm install p5js-wrapper`

## Single sketch usage

```js
import { sketch } from 'p5js-wrapper';

sketch.setup = function () {
  createCanvas(800, 600);
};

sketch.draw = function () {
  background(100);
  fill(255, 0, 0);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
};

sketch.mousePressed = function () {
  console.log('here');
};
```

## Multi sketch usage

```js
import { p5 } from 'p5js-wrapper';

let sketch1 = new p5((p) => {
  p.setup = () => {
    // You can also specify the canvas size in the CSS file (size of div #one)
    p.createCanvas(800, 600);
  };

  p.draw = () => {
    p.background(100);
    p.fill(255);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(p.mouseX, p.mouseY, 50, 50);
  };
}, 'one');

// Sketch2
let sketch2 = new p5((p) => {
  p.setup = () => {
    // You can also specify the canvas size in the CSS file (size of div #two)
    p.createCanvas(800, 600);
  };

  p.draw = () => {
    p.background(170);
    p.noStroke();
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
}, 'two');
```

This sketch assumes that there are two divs available with id 'one' and 'two'.

## Adding sound

This is an [experimental feature](./README_SOUND.md).
