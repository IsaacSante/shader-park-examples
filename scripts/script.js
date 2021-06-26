import {sculptToMinimalRenderer} from 'https://unpkg.com/shader-park-core@0.0.270/dist/shader-park-core.esm.js';
import {spCode} from './spCode.js';

let canvas = document.querySelector('.my-canvas');
 const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = 200;
      canvas.height = 200;

 sculptToMinimalRenderer(canvas, spCode);