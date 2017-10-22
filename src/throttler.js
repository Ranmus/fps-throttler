/**
 * Throttler
 */
class Throttler {
  /**
   * Create new instance
   * @param {function} callback
   * @param {number} FPSLimit
   */
  constructor(callback, FPSLimit) {
    this.accumulator = 0;
    this.accumulatorLimit = 0;
    this.delta = 0;
    this.lastPerformance = 0;
    this.requestId = null;

    if (typeof callback !== 'function') {
      throw new Error('Callable callback is not provided');
    }

    this.callback = callback;
    this.setFPSLimit(FPSLimit);
  }

  /**
   * Start throttling
   * @returns {Throttler}
   */
  start() {
    const loop = () => {
      this.delta = performance.now() - this.lastPerformance;
      this.lastPerformance = performance.now();
      this.accumulator += this.delta;

      if (this.accumulator > this.accumulatorLimit) {
        this.accumulator -= this.accumulatorLimit;
        this.callback();
      }

      this.requestId = window.requestAnimationFrame(loop);
    };

    loop();

    return this;
  }
  /**
   * Stop throttling
   * @returns {Throttler}
   */
  stop() {
    window.cancelAnimationFrame(this.requestId);

    return this;
  }
  /**
   * Set fps limit
   * @param {number} FPSLimit
   * @returns {Throttler}
   */
  setFPSLimit(FPSLimit = 60) {
    this.FPSLimit = Math.max(Math.min(FPSLimit, 60), 1) | 0;
    this.accumulatorLimit = 1000 / this.FPSLimit;

    return this;
  }
  /**
   * Set callback
   * @param {Function} callback 
   */
  setCallback(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callable callback is not provided');
    }

    this.callback = callback;
  }
  /**
   * Shorthand function to set fps limit
   * @param {number} fps
   * @param {Throttler}
   */
  limit(fps) {
    return this.setFPSLimit(fps);
  }
  /**
   * Shorthand function to set callback
   * @param {Function} callback 
   * @returns {Throttler}
   */
  callback(callback) {
    return this.setCallback(callback);
  }
}

/**
 * Export class
 */
module.exports = Throttler;
