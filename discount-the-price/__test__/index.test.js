const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['daysBeforeExp', 'basicPrice']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables valid', () => {
  expect(mfnless.isKeyVarsValid()).toBe(true);
});

describe(`Testing invalid inputs`, () => {
  it(`daysBeforeExp: '30', basicPrice: 10000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: '30', basicPrice: 10000 })).toMatch('invalid daysBeforeExp');
  });
  it(`daysBeforeExp: 30, basicPrice: '10000'`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 30, basicPrice: '10000' })).toMatch('invalid basicPrice');
  });
  it(`daysBeforeExp: true, basicPrice: false`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: true, basicPrice: false })).toMatch('invalid daysBeforeExp dan basicPrice');
  });
});

describe(`Testing daysBeforeExp`, () => {
  it(`daysBeforeExp: 60, basicPrice: 10000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 60, basicPrice: 10000 })).toMatch('10000');
  });
  it(`daysBeforeExp: 30, basicPrice: 10000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 30, basicPrice: 10000 })).toMatch('8000');
  });
  it(`daysBeforeExp: 29, basicPrice: 10000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 29, basicPrice: 10000 })).toMatch('7000');
  });
});

describe(`Testing basicPrice`, () => {
  it(`daysBeforeExp: 29, basicPrice: 50000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 29, basicPrice: 50000 })).toMatch('35000');
  });
  it(`daysBeforeExp: 29, basicPrice: 80000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 29, basicPrice: 80000 })).toMatch('60000');
  });
  it(`daysBeforeExp: 29, basicPrice: 150000`, async () => {
    expect(mfnless.testProcess({ daysBeforeExp: 29, basicPrice: 150000 })).toMatch('120000');
  });
});
