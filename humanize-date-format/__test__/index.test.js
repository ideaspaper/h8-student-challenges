const fs = require('fs');
const fnless = require('fnless');

const mfnless = new fnless('./index.js', ['date', 'month', 'year']);

afterAll(() => {
  mfnless.deleteInstrumentFile();
});

it('Key variables exist', () => {
  expect(mfnless.isKeyVarsExist()).toBe(true);
});

describe(`Testing invalid inputs`, () => {
  it(`date: 1, month: 1, year: '2000'`, async () => {
    expect(mfnless.testProcess({ date: 1, month: 1, year: '2000' })).toMatch('invalid type');
  });
  it(`date: 1, month: true, year: 2000`, async () => {
    expect(mfnless.testProcess({ date: 1, month: true, year: 2000 })).toMatch('invalid type');
  });
  it(`date: '1', month: 1, year: 2000`, async () => {
    expect(mfnless.testProcess({ date: '1', month: 1, year: 2000 })).toMatch('invalid type');
  });
});

describe(`Testing empty data`, () => {
  it(`date: 1, month: 1`, async () => {
    expect(mfnless.testProcess({ date: 1, month: 1 })).toMatch('empty data');
  });
  it(`date: 1, year: 2000`, async () => {
    expect(mfnless.testProcess({ date: 1, year: 2000 })).toMatch('empty data');
  });
  it(`month: 1, year: 2000`, async () => {
    expect(mfnless.testProcess({ month: 1, year: 2000 })).toMatch('empty data');
  });
});

describe(`Testing valid input`, () => {
  it(`date: 1, month: 1, year: 1999`, async () => {
    expect(mfnless.testProcess({ date: 1, month: 1, year: 1999 })).toMatch('01-January-1999');
  });
  it(`date: 10, month: 2, year: 2000`, async () => {
    expect(mfnless.testProcess({ date: 10, month: 2, year: 2000 })).toMatch('10-February-2000');
  });
  it(`date: 11, month: 3, year: 2001`, async () => {
    expect(mfnless.testProcess({ date: 11, month: 3, year: 2001 })).toMatch('11-March-2001');
  });
  it(`date: 9, month: 4, year: 2002`, async () => {
    expect(mfnless.testProcess({ date: 9, month: 4, year: 2002 })).toMatch('09-April-2002');
  });
  it(`date: 20, month: 5, year: 2003`, async () => {
    expect(mfnless.testProcess({ date: 20, month: 5, year: 2003 })).toMatch('20-May-2003');
  });
  it(`date: 30, month: 6, year: 2004`, async () => {
    expect(mfnless.testProcess({ date: 30, month: 6, year: 2004 })).toMatch('30-June-2004');
  });
  it(`date: 19, month: 7, year: 2005`, async () => {
    expect(mfnless.testProcess({ date: 19, month: 7, year: 2005 })).toMatch('19-July-2005');
  });
  it(`date: 25, month: 8, year: 2006`, async () => {
    expect(mfnless.testProcess({ date: 25, month: 8, year: 2006 })).toMatch('25-August-2006');
  });
  it(`date: 27, month: 9, year: 2007`, async () => {
    expect(mfnless.testProcess({ date: 27, month: 9, year: 2007 })).toMatch('27-September-2007');
  });
  it(`date: 15, month: 10, year: 2008`, async () => {
    expect(mfnless.testProcess({ date: 15, month: 10, year: 2008 })).toMatch('15-October-2008');
  });
  it(`date: 3, month: 11, year: 2009`, async () => {
    expect(mfnless.testProcess({ date: 3, month: 11, year: 2009 })).toMatch('03-November-2009');
  });
  it(`date: 7, month: 12, year: 2010`, async () => {
    expect(mfnless.testProcess({ date: 7, month: 12, year: 2010 })).toMatch('07-December-2010');
  });
  it(`date: 1, month: 1, year: 1`, async () => {
    expect(mfnless.testProcess({ date: 1, month: 1, year: 1 })).toMatch('1-January-1');
  });
});
