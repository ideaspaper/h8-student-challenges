const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['clock', 'hungry', 'activity']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables valid', () => {
  expect(mfnless.isKeyVarsValid()).toBe(true);
});

describe(`Testing 'invalid input'`, () => {
  it(`clock: '700', hungry: false, activity: 1`, async () => {
    expect(mfnless.testProcess({ clock: '700', hungry: false, activity: 1 })).toMatch('invalid input');
  });
  it(`clock: '800', hungry: 'false', activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: '800', hungry: 'false', activity: 'high' })).toMatch('invalid input');
  });
  it(`clock: 800, hungry: false, activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: 800, hungry: false, activity: 'high' })).toMatch('invalid input');
  });
});

describe(`Testing 'eat'`, () => {
  it(`clock: '800', hungry: true, activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: '800', hungry: true, activity: 'high' })).toMatch('eat');
  });
  it(`clock: '1200', hungry: false, activity: 'low'`, async () => {
    expect(mfnless.testProcess({ clock: '1200', hungry: false, activity: 'low' })).toMatch('eat');
  });
  it(`clock: '1800', hungry: true, activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: '1800', hungry: true, activity: 'high' })).toMatch('eat');
  });
  it(`clock: '700', hungry: true, activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: '700', hungry: true, activity: 'high' })).toMatch('eat');
  });
});

describe(`Testing 'not eat'`, () => {
  it(`clock: '700', hungry: false, activity: 'high'`, async () => {
    expect(mfnless.testProcess({ clock: '700', hungry: false, activity: 'high' })).toMatch('not eat');
  });
  it(`clock: '1900', hungry: false, activity: 'low'`, async () => {
    expect(mfnless.testProcess({ clock: '1900', hungry: false, activity: 'low' })).toMatch('not eat');
  });
  it(`clock: '1300', hungry: true, activity: 'low'`, async () => {
    expect(mfnless.testProcess({ clock: '1300', hungry: true, activity: 'low' })).toMatch('not eat');
  });
});

describe(`Testing 'invalid activity'`, () => {
  it(`clock: '700', hungry: false, activity: 'tinggi'`, async () => {
    expect(mfnless.testProcess({ clock: '700', hungry: false, activity: 'tinggi' })).toMatch('invalid activity');
  });
  it(`clock: '1900', hungry: false, activity: 'rendah'`, async () => {
    expect(mfnless.testProcess({ clock: '1900', hungry: false, activity: 'rendah' })).toMatch('invalid activity');
  });
  it(`clock: '1300', hungry: true, activity: 'random'`, async () => {
    expect(mfnless.testProcess({ clock: '1300', hungry: true, activity: 'random' })).toMatch('invalid activity');
  });
});
