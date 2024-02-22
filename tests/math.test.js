const { add, subtract } = require('../src/math');

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should handle zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(subtract(-1, -2)).toBe(1);
  });

  it('should handle zero', () => {
    expect(subtract(0, 0)).toBe(0);
  });
});
