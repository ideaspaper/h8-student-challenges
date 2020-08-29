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
    expect(mfnless.testProcess({ input: 1 })).toMatch('*');
  });
  it(`input: 2`, async () => {
    expect(mfnless.testProcess({ input: 2 })).toMatch(' *\n***');
  });
  it(`input: 3`, async () => {
    expect(mfnless.testProcess({ input: 3 })).toMatch('  *\n * *\n*****');
  });
  it(`input: 7`, async () => {
    expect(mfnless.testProcess({ input: 7 })).toMatch('      *\n     * *\n    *   *\n   *     *\n  *       *\n *         *\n*************');
  });
  it(`input: 8`, async () => {
    expect(mfnless.testProcess({ input: 8 })).toMatch('       *\n      * *\n     *   *\n    *     *\n   *       *\n  *         *\n *           *\n***************');
  });
  it(`input: 9`, async () => {
    expect(mfnless.testProcess({ input: 9 })).toMatch('        *\n       * *\n      *   *\n     *     *\n    *       *\n   *         *\n  *           *\n *             *\n*****************');
  });
});
