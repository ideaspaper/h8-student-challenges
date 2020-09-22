const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['scrollPos', 'agree', 'spyware']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables valid', () => {
  expect(mfnless.isKeyVarsValid()).toBe(true);
});

describe(`Testing invalid inputs`, () => {
  it(`scrollPos: 'bottom'`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'bottom' })).toMatch('Unknown error');
  });
  it(`agree: true`, async () => {
    expect(mfnless.testProcess({ agree: true })).toMatch('Unknown error');
  });
  it(`spyware: true`, async () => {
    expect(mfnless.testProcess({ spyware: true })).toMatch('Unknown error');
  });
  it(`scrollPos: '', agree: true, spyware: true`, async () => {
    expect(mfnless.testProcess({ scrollPos: '', agree: true, spyware: true })).toMatch('Unknown error');
  });
});

describe(`Testing valid inputs`, () => {
  it(`scrollPos: 'bottom', agree: false, spyware: true`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'bottom', agree: false, spyware: true })).toMatch('Cannot proceed when not agree');
  });
  it(`scrollPos: 'bottom', agree: true, spyware: false`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'bottom', agree: true, spyware: false })).toMatch('Installing software');
  });
  it(`scrollPos: 'bottom', agree: true, spyware: true`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'bottom', agree: true, spyware: true })).toMatch('Installing software + spyware remover');
  });
  it(`scrollPos: 'qwerty', agree: true, spyware: true`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'qwerty', agree: true, spyware: true })).toMatch('You have to read all the clauses before accepting');
  });
  it(`scrollPos: 'qwerty', agree: true, spyware: false`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'qwerty', agree: true, spyware: false })).toMatch('You have to read all the clauses before accepting');
  });
  it(`scrollPos: 'qwerty', agree: false, spyware: true`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'qwerty', agree: false, spyware: true })).toMatch('You have to read all the clauses before accepting');
  });
  it(`scrollPos: 'qwerty', agree: false, spyware: false`, async () => {
    expect(mfnless.testProcess({ scrollPos: 'qwerty', agree: false, spyware: false })).toMatch('You have to read all the clauses before accepting');
  });
});
