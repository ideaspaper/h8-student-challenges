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
    expect(mfnless.testProcess({ input: 1 })).toMatch('1');
  });
  it(`input: 2`, async () => {
    expect(mfnless.testProcess({ input: 2 })).toMatch('1\n22');
  });
  it(`input: 3`, async () => {
    expect(mfnless.testProcess({ input: 3 })).toMatch('1\n22\n333');
  });
  it(`input: 7`, async () => {
    expect(mfnless.testProcess({ input: 7 })).toMatch('1\n22\n333\n4444\n55555\n666666\n7777777');
  });
  it(`input: 8`, async () => {
    expect(mfnless.testProcess({ input: 8 })).toMatch('1\n22\n333\n4444\n55555\n666666\n7777777\n88888888');
  });
  it(`input: 9`, async () => {
    expect(mfnless.testProcess({ input: 9 })).toMatch('1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999');
  });
});
