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
    expect(mfnless.testProcess({ input: 0 })).toMatch('type error');
  });
  it(`input: 1`, async () => {
    expect(mfnless.testProcess({ input: 1 })).toMatch('type error');
  });
  it(`input: true`, async () => {
    expect(mfnless.testProcess({ input: true })).toMatch('type error');
  });
  it(`input: false`, async () => {
    expect(mfnless.testProcess({ input: false })).toMatch('type error');
  });
});

describe(`Testing empty data`, () => {
  it(`input: `, async () => {
    expect(mfnless.testProcess({})).toMatch('empty data');
  });
  it(`input: ''`, async () => {
    expect(mfnless.testProcess({ input: '' })).toMatch('empty data');
  });
  it(`input: null`, async () => {
    expect(mfnless.testProcess({ input: null })).toMatch('empty data');
  });
});

describe(`Testing valid input`, () => {
  it(`input: 'Acong'`, async () => {
    expect(mfnless.testProcess({ input: 'Acong' })).toMatch('First character is A, middle character is o, last character is g');
  });
  it(`input: 'Yokult'`, async () => {
    expect(mfnless.testProcess({ input: 'Yokult' })).toMatch('First character is Y, no middle character, last character is t');
  });
  it(`input: 'ab'`, async () => {
    expect(mfnless.testProcess({ input: 'ab' })).toMatch('First character is a, no middle character, last character is b');
  });
  it(`input: 'abc'`, async () => {
    expect(mfnless.testProcess({ input: 'abc' })).toMatch('First character is a, middle character is b, last character is c');
  });
  it(`input: 'defg'`, async () => {
    expect(mfnless.testProcess({ input: 'defg' })).toMatch('First character is d, no middle character, last character is g');
  });
});
