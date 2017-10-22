# FPS Throttler
Throttle calling function to fps limit (by using requestAnimationFrame).

Example:
```javascript
const throttler = new Throttler(() => {}, 10);
```
Will call function 10 times per second (according to requestAnimationFrame 60 fps limit).
## Usage

Create new throttler:
```javascript
const throttler = new Throttler(callback, fpsLimit);
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
