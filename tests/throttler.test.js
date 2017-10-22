const Throttler = require('../src/throttler');

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
    throttler = new Throttler(() => {}, 30);

    expect(throttler.FPSLimit)
      .toBe(30);
  });
});
