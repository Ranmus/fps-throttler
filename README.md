# FPS Throttler
Throttle calling function to fps limit (by using requestAnimationFrame).

## Usage

Creating new throttler:
```javascript
const throttler = new Throttler(callback, fpsLimit);
```
Starting:
```
throttler.start();
```
Stopping:
```
throttler.stop();
```
