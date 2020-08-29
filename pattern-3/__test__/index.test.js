const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['input']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables valid', () => {
  expect(mfnless.isKeyVarsValid()).toBe(true);
});

describe(`Testing invalid inputs`, () => {
  it(`input: 0`, async () => {
    expect(mfnless.testProcess({ input: 0 })).toMatch('invalid input');
  });
});

describe(`Testing valid input`, () => {
  it(`input: 1`, async () => {
    expect(mfnless.testProcess({ input: 1 })).toMatch('a');
  });
  it(`input: 2`, async () => {
    expect(mfnless.testProcess({ input: 2 })).toMatch('a\nBb');
  });
  it(`input: 3`, async () => {
    expect(mfnless.testProcess({ input: 3 })).toMatch('a\nBb\ncCc');
  });
  it(`input: 7`, async () => {
    expect(mfnless.testProcess({ input: 7 })).toMatch('a\nBb\ncCc\nDdDd\neEeEe\nFfFfFf\ngGgGgGg');
  });
  it(`input: 8`, async () => {
    expect(mfnless.testProcess({ input: 8 })).toMatch('a\nBb\ncCc\nDdDd\neEeEe\nFfFfFf\ngGgGgGg\nHhHhHhHh');
  });
  it(`input: 9`, async () => {
    expect(mfnless.testProcess({ input: 9 })).toMatch('a\nBb\ncCc\nDdDd\neEeEe\nFfFfFf\ngGgGgGg\nHhHhHhHh\niIiIiIiIi');
  });
});
