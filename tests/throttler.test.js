const Throttler = require('../src/throttler');

// Mock sleep function
function sleep(miliseconds) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

// Mock browser API
Object.assign(global, {
  // TODO: better mock for performance
  performance: { now: () => 1000 },
  requestAnimationFrame: (cb) => setTimeout(cb, 1000 / 60),
  cancelAnimationFrame: (id) => clearTimeout(id),
});

// Test suite
describe('Throttler testing', () => {
  let throttler = null;

  it('Checks if Throttler can be instances', () => {
    expect(typeof Throttler)
      .toBe('function');
  });

  it('Throws error when creating Throttler without callable callback', () => {
    expect(() => new Throttler())
      .toThrow('Callable callback is not provided');
  });

  it('Creates new Throttler with default fps 60 limit', () => {
    throttler = new Throttler(() => {});

    expect(throttler.FPSLimit)
      .toBe(60);
  });

  it('Creates new Throttler with default fps 30 limit', () => {
    throttler = new Throttler(() => {}, 10);

    expect(throttler.FPSLimit)
      .toBe(10);
  });

  it('Checks if callback was called 29 times after 1 second', async () => {
    const callback = jest.fn();
    throttler = new Throttler(callback, 30);

    throttler.start();
    await sleep(1000);
    throttler.stop();

    expect(callback)
      .toHaveBeenCalledTimes(29);
  });
});
