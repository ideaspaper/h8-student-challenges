const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['day', 'holiday']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables exist', () => {
  expect(mfnless.isKeyVarsExist()).toBe(true);
});

describe(`Testing invalid inputs`, () => {
  it(`day: 1, holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 1, holiday: true })).toMatch('invalid type');
  });
  it(`day: 'Senin', holiday: 1`, async () => {
    expect(mfnless.testProcess({ day: 'Senin', holiday: 1 })).toMatch('invalid type');
  });
  it(`day: 'Senyn', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Senyn', holiday: true })).toMatch('invalid day');
  });
});

describe(`Testing regular day`, () => {
  it(`day: 'Senin', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Senin', holiday: false })).toMatch('9');
  });
  it(`day: 'Selasa', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Selasa', holiday: false })).toMatch('9');
  });
  it(`day: 'Rabu', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Rabu', holiday: false })).toMatch('9');
  });
  it(`day: 'Kamis', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Kamis', holiday: false })).toMatch('9');
  });
  it(`day: 'Jumat', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Jumat', holiday: false })).toMatch('8');
  });
  it(`day: 'Sabtu', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Sabtu', holiday: false })).toMatch('0');
  });
  it(`day: 'Minggu', holiday: false`, async () => {
    expect(mfnless.testProcess({ day: 'Minggu', holiday: false })).toMatch('0');
  });
});

describe(`Testing holiday`, () => {
  it(`day: 'Senin', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Senin', holiday: true })).toMatch('0');
  });
  it(`day: 'Selasa', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Selasa', holiday: true })).toMatch('0');
  });
  it(`day: 'Rabu', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Rabu', holiday: true })).toMatch('0');
  });
  it(`day: 'Kamis', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Kamis', holiday: true })).toMatch('0');
  });
  it(`day: 'Jumat', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Jumat', holiday: true })).toMatch('0');
  });
  it(`day: 'Sabtu', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Sabtu', holiday: true })).toMatch('0');
  });
  it(`day: 'Minggu', holiday: true`, async () => {
    expect(mfnless.testProcess({ day: 'Minggu', holiday: true })).toMatch('0');
  });
});
