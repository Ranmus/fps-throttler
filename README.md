# FPS Throttler
Throttle function call excatly to specific number times during one second - fps limit (by using requestAnimationFrame).

Example:
```javascript
const Throttler = require('fps-throttler');
const throttler = new Throttler(() => {}, 10);
```
This will call function 10 times per second (max limit is 60 - according to requestAnimationFrame specification).
## Usage

Create new throttler:
```javascript
const Throttler = require('fps-throttler');
const throttler = new Throttler(callback, fpsLimit);
```
For ecmascript module use:
```javascript
import Throttler from './node_modules/src/fps-throttler/throttler.esm.js';
```
Start:
```javascript
throttler.start();
```
Stop:
```javascript
throttler.stop();
```
Change fps limit
```javascript
throttler.limit(fps);
```
Change callback
```javascript
throttler.callback(callable);
```
